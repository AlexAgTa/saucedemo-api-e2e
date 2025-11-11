# Petstore API Flow Tests using cURL

This file contains a sequence of cURL commands to test the full CRUD (Create, Read, Update, Delete) functionality of the Petstore API.

**Important:**
*   These commands include the `-k` flag to bypass SSL certificate verification issues detected in your environment.
*   You will need to manually copy the `id` from the response of the `POST` command and use it in the subsequent `GET`, `PUT`, and `DELETE` commands.

---

### 1. Create a new Pet (POST)

This command creates a new pet with the name "my-test-pet". Look for the `"id"` field in the JSON response and use it in the next steps.

**Command:**
```bash
curl.exe -k -X POST "https://petstore.swagger.io/v2/pet" -H "Content-Type: application/json" -H "api_key: special-key" -d "{\"name\": \"my-test-pet\", \"status\": \"available\"}"
```

---

### 2. Get the created Pet (GET)

Replace `PET_ID_HERE` with the actual `id` you received from the previous step.

**Command:**
```bash
curl.exe -k -X GET "https://petstore.swagger.io/v2/pet/PET_ID_HERE" -H "api_key: special-key"
```

---

### 3. Update the created Pet (PUT)

Replace `PET_ID_HERE` with the pet's `id`. This command updates the pet's name to "my-updated-pet" and its status to "sold".

**Command:**
```bash
curl.exe -k -X PUT "https://petstore.swagger.io/v2/pet" -H "Content-Type: application/json" -H "api_key: special-key" -d "{\"id\": PET_ID_HERE, \"name\": \"my-updated-pet\", \"status\": \"sold\"}"
```

---

### 4. Delete the created Pet (DELETE)

Replace `PET_ID_HERE` with the pet's `id` to delete it.

**Command:**
```bash
curl.exe -k -X DELETE "https://petstore.swagger.io/v2/pet/PET_ID_HERE" -H "api_key: special-key"
```
