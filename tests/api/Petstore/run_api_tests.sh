#!/bin/bash

# Bash script to test the Petstore API flow for a pipeline.
# This script uses curl and a hardcoded pet ID (1).
# It will exit with an error if any step fails.

# Exit immediately if a command exits with a non-zero status.
set -e

# --- Configuration ---
BASE_URL="https://petstore.swagger.io/v2"
API_KEY="special-key"
PET_ID=2
NEW_PET_NAME="MyUpdatedPet-$(shuf -i 1000-9999 -n 1)" # Generate a random name

# --- Helper Function to Check Last Command ---
assert_success() {
    if [ $? -ne 0 ]; then
        echo "##[error]Previous command failed."
        exit 1
    fi
    echo "OK."
}

# --- Test Flow ---

# 1. GET Pet by ID
echo "Step 1: Attempting to GET pet with ID $PET_ID..."
RESPONSE_GET=$(curl -k -s -w "\n%{http_code}" -X GET "$BASE_URL/pet/$PET_ID" -H "api_key: $API_KEY")
HTTP_CODE_GET=$(echo "$RESPONSE_GET" | tail -n 1)
BODY_GET=$(echo "$RESPONSE_GET" | sed '$d')

echo "GET Response Code: $HTTP_CODE_GET"
echo "GET Response Body: $BODY_GET"
if [ "$HTTP_CODE_GET" -ne 200 ]; then
    echo "##[error]Failed to get pet. Expected HTTP 200, but got $HTTP_CODE_GET."
    exit 1
fi
assert_success

# 2. UPDATE Pet by ID (PUT)
echo "Step 2: Attempting to UPDATE pet with ID $PET_ID..."
PUT_DATA="{\"id\": $PET_ID, \"name\": \"$NEW_PET_NAME\", \"status\": \"sold\"}"
RESPONSE_PUT=$(curl -k -s -w "\n%{http_code}" -X PUT "$BASE_URL/pet" -H "Content-Type: application/json" -H "api_key: $API_KEY" -d "$PUT_DATA")
HTTP_CODE_PUT=$(echo "$RESPONSE_PUT" | tail -n 1)
BODY_PUT=$(echo "$RESPONSE_PUT" | sed '$d')

echo "PUT Response Code: $HTTP_CODE_PUT"
echo "PUT Response Body: $BODY_PUT"
if [ "$HTTP_CODE_PUT" -ne 200 ]; then
    echo "##[error]Failed to update pet. Expected HTTP 200, but got $HTTP_CODE_PUT."
    exit 1
fi
assert_success

# 3. Verify the UPDATE by GETting the pet again
echo "Step 3: Verifying the update by GETting pet with ID $PET_ID again..."
RESPONSE_VERIFY=$(curl -k -s -w "\n%{http_code}" -X GET "$BASE_URL/pet/$PET_ID" -H "api_key: $API_KEY")
HTTP_CODE_VERIFY=$(echo "$RESPONSE_VERIFY" | tail -n 1)
BODY_VERIFY=$(echo "$RESPONSE_VERIFY" | sed '$d')

echo "Verification GET Response Code: $HTTP_CODE_VERIFY"
echo "Verification GET Response Body: $BODY_VERIFY"
if [ "$HTTP_CODE_VERIFY" -ne 200 ]; then
    echo "##[error]Failed to get pet after update. Expected HTTP 200, but got $HTTP_CODE_VERIFY."
    exit 1
fi
if [[ ! "$BODY_VERIFY" =~ \"name\":\"$NEW_PET_NAME\" ]]; then
    echo "##[error]Pet name was not updated correctly. Expected '$NEW_PET_NAME' in the response."
    exit 1
fi
assert_success

echo "##[section]All API tests passed successfully!"
exit 0
