#!/bin/bash

# Bash script to test the Petstore API flow for a pipeline.
# This script is self-contained: it creates a pet, tests it, and deletes it.

# Exit immediately if a command exits with a non-zero status.
set -e

# --- Configuration ---
BASE_URL="https://petstore.swagger.io/v2"
API_KEY="special-key"
PET_NAME="MyTestPet-$(shuf -i 1000-9999 -n 1)"

echo "##[section]Starting Petstore API Test Flow..."

# 1. CREATE a new pet (POST)
echo "Step 1: Creating a new pet named '$PET_NAME' ભા"
POST_DATA="{\"name\": \"$PET_NAME\", \"status\": \"available\"}"
RESPONSE_POST=$(curl -k -s -w "\n%{http_code}" -X POST "$BASE_URL/pet" -H "Content-Type: application/json" -H "api_key: $API_KEY" -d "$POST_DATA")
HTTP_CODE_POST=$(echo "$RESPONSE_POST" | tail -n 1)
BODY_POST=$(echo "$RESPONSE_POST" | sed '$d')

echo "POST Response Code: $HTTP_CODE_POST"
echo "POST Response Body: $BODY_POST"
if [ "$HTTP_CODE_POST" -ne 200 ]; then
    echo "##[error]Failed to create pet. Expected HTTP 200, but got $HTTP_CODE_POST."
    exit 1
fi

# Extract the ID from the response body
PET_ID=$(echo "$BODY_POST" | grep -o '"id":[0-9]*' | cut -d':' -f2)
if [ -z "$PET_ID" ]; then
    echo "##[error]Could not extract Pet ID from POST response."
    exit 1
fi
echo "Successfully created pet with ID: $PET_ID"

# 2. GET the created pet
echo "Step 2: Retrieving pet with ID $PET_ID..."
RESPONSE_GET=$(curl -k -s -w "\n%{http_code}" -X GET "$BASE_URL/pet/$PET_ID" -H "api_key: $API_KEY")
HTTP_CODE_GET=$(echo "$RESPONSE_GET" | tail -n 1)
if [ "$HTTP_CODE_GET" -ne 200 ]; then
    echo "##[error]Failed to get created pet. Expected HTTP 200, but got $HTTP_CODE_GET."
    exit 1
fi
echo "Successfully retrieved pet with ID $PET_ID."

# 3. UPDATE the pet (PUT)
UPDATED_PET_NAME="MyUpdatedPet-$(shuf -i 1000-9999 -n 1)"
echo "Step 3: Updating pet with ID $PET_ID to name '$UPDATED_PET_NAME'..."
PUT_DATA="{\"id\": $PET_ID, \"name\": \"$UPDATED_PET_NAME\", \"status\": \"sold\"}"
RESPONSE_PUT=$(curl -k -s -w "\n%{http_code}" -X PUT "$BASE_URL/pet" -H "Content-Type: application/json" -H "api_key: $API_KEY" -d "$PUT_DATA")
HTTP_CODE_PUT=$(echo "$RESPONSE_PUT" | tail -n 1)
if [ "$HTTP_CODE_PUT" -ne 200 ]; then
    echo "##[error]Failed to update pet. Expected HTTP 200, but got $HTTP_CODE_PUT."
    exit 1
fi
echo "Successfully updated pet."

# 4. DELETE the pet
echo "Step 4: Deleting pet with ID $PET_ID..."
RESPONSE_DELETE=$(curl -k -s -w "\n%{http_code}" -X DELETE "$BASE_URL/pet/$PET_ID" -H "api_key: $API_KEY")
HTTP_CODE_DELETE=$(echo "$RESPONSE_DELETE" | tail -n 1)
if [ "$HTTP_CODE_DELETE" -ne 200 ]; then
    echo "##[error]Failed to delete pet. Expected HTTP 200, but got $HTTP_CODE_DELETE."
    exit 1
fi
echo "Successfully deleted pet with ID $PET_ID."

echo "##[section]All API tests passed successfully!"
exit 0