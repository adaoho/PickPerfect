<!-- [![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12632145&assignment_repo_type=AssignmentRepo)

# P2-Challenge-1 (Server Side)

> Tuliskan API Docs kamu di sini -->

# Pick Perfect API Documentation

This document provides an overview of the API endpoints and their usage for our service, <br>
that can be access on http://server.adaoho-project.my.id

### 1. Available endpoints for **_Public Site_**

- [**_POST_** /user/register](#1-post-register)
- [**_POST_** /user/login](#2-post-userlogin)
- [**_POST_** /user/google-login](#3-post-usergoogle-login)
- [**_POST_** /user/github-login](#4-post-usergithub-login)
- [**_POST_** /user/facebook-login](#5-post-userfacebook-login)
- [**_PATCH_** /user/:id](#10-patch-userid)

* [**_GET_** /fruit/](#6-get-fruit)
* [**_GET_** /fruit/fetchfruit/](#7-get-fruitfetchfruit)

- [**_GET_** /fruitmov/:id](#8-get-fruitmovid)
- [**_POST_** /fruitmov/:MovementId](#9-post-fruitmovmovementid)
- [**_DELETE_** /fruitmov/:MovementId](#11-delete-fruitmovmovementid)

* [**_GET_** /purchase/](#12-get-purchase)
* [**_POST_** /purchase/:id](#13-post-purchaseid)
* [**_DELETE_** /purchase/:id](#14-delete-purchaseid)
* [**_PATCH_** /purchase/:id](#15-patch-purchaseid)

- [**_GET_** /movement/](#16-get-movement)

### 2. Global Error

- [**_Global Error_**](#global-error)

&nbsp;

<!-- ## 1. POST /user/register -->

## 1. POST /user/register

Endpoint to create account user with default role "staff"

#### Request - Body

```json
{
  "fullname": "string",
  "email": "string",
  "password": "string",
  "imageUrl": "string",
  "age": "integer",
  "address": "string",
  "phoneNumber": "string"
}
```

<details>
<summary>
Click here for Response
</summary>

_Response (201 - Created)_

```json
{
  "newUser": {
    "id": 3,
    "fullname": "Adnan Nugroho",
    "email": "adnan@mail.com",
    "imageUrl": "https://source.unsplash.com/random/500x500/?person",
    "age": 25,
    "address": "South Tangerang"
  }
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Invalid email format"
}
OR
{
  "message": "Email must be unique"
}
OR
{
  "message": "Full Name is required"
}
OR
{
  "message": "Password is required"
}
```

&nbsp;

</details>

<!-- ## 2. POST /user/login -->

## 2. POST /user/login

#### Request - Body

```json
{
  "email": "string",
  "password": "string"
}
```

<details>
<summary>
Click here for Response
</summary>

_Response (200 - OK)_

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG5hbkBtYWlsLmNvbSIsImZ1bGxOYW1lIjoiQWRuYW4gTnVncm9obyIsInBob3RvIjoiaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL3JhbmRvbS81MDB4NTAwLz9wZXJzb24iLCJpYXQiOjE3MDAxNTg2NTl9.1T4jd_rWB5yK-QaQAMz65QZhE8V7Htbbv8yYOkWgyyc",
  "email": "adnan@mail.com",
  "fullname": "Adnan Nugroho",
  "photo": "https://source.unsplash.com/random/500x500/?person"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email Can't be Empty"
}
OR
{
  "message": "Password Can't be Empty"
}

```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid email/password"
}
```

&nbsp;

</details>

## 3. POST /user/google-login

#### Request - Body

```json
{
  "token": "string"
}
```

<details>
<summary>
Click here for Response
</summary>

_Response (200 - OK)_

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG5hbkBtYWlsLmNvbSIsImZ1bGxOYW1lIjoiQWRuYW4gTnVncm9obyIsInBob3RvIjoiaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL3JhbmRvbS81MDB4NTAwLz9wZXJzb24iLCJpYXQiOjE3MDAxNTg2NTl9.1T4jd_rWB5yK-QaQAMz65QZhE8V7Htbbv8yYOkWgyyc",
  "fullname": "Adnan Nugroho",
  "email": "adnan@mail.com",
  "photo": "https://source.unsplash.com/random/500x500/?person"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid email/password"
}
```

&nbsp;

</details>

## 4. POST /user/github-login

#### Request - Body

```json
{
  "fullname": "string",
  "email": "string",
  "password": "string",
  "imageUrl": "string"
}
```

<details>
<summary>
Click here for Response
</summary>

_Response (200 - OK)_

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG5hbkBtYWlsLmNvbSIsImZ1bGxOYW1lIjoiQWRuYW4gTnVncm9obyIsInBob3RvIjoiaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL3JhbmRvbS81MDB4NTAwLz9wZXJzb24iLCJpYXQiOjE3MDAxNTg2NTl9.1T4jd_rWB5yK-QaQAMz65QZhE8V7Htbbv8yYOkWgyyc",
  "fullname": "Adnan Nugroho",
  "email": "adnan@mail.com",
  "photo": "https://source.unsplash.com/random/500x500/?person"
}
```

&nbsp;

</details>

## 5. POST /user/facebook-login

#### Request - Body

```json
{
  "fullname": "string",
  "email": "string",
  "password": "string",
  "imageUrl": "string"
}
```

<details>
<summary>
Click here for Response
</summary>

_Response (200 - OK)_

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG5hbkBtYWlsLmNvbSIsImZ1bGxOYW1lIjoiQWRuYW4gTnVncm9obyIsInBob3RvIjoiaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL3JhbmRvbS81MDB4NTAwLz9wZXJzb24iLCJpYXQiOjE3MDAxNTg2NTl9.1T4jd_rWB5yK-QaQAMz65QZhE8V7Htbbv8yYOkWgyyc",
  "fullname": "Adnan Nugroho",
  "email": "adnan@mail.com",
  "photo": "https://source.unsplash.com/random/500x500/?person"
}
```

&nbsp;

</details>

## 6. GET /fruit/

#### Request - Body

```json
{
  "name": "string",
  "description": "string",
  "price": "integer",
  "imgUrl": "string",
  "categoryId": "integer"
}
```

#### Request - Headers - Authorization (Bearer Scheme)

```http
Authorization: Bearer <access_token>
```

<details>
<summary>
Click here for Response
</summary>

_Response (201 - Created)_

```json
{
  "getFruit": [
    {
      "id": 1,
      "name": "Persimmon",
      "family": "Ebenaceae",
      "calories": "81",
      "fat": "0",
      "sugar": "18",
      "carbohydrates": "18",
      "protein": "0",
      "imageUrl": "https://source.unsplash.com/random/900x700/?Persimmon",
      "MovementId": 1
    },
    ...
  ]
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "You're Not Authenticated"
}
```

&nbsp;

</details>

## 7. GET /fruit/fetchfruit

#### Request - Headers - Authorization (Bearer Scheme)

```http
Authorization: Bearer <access_token>
```

<details>
<summary>
Click here for Response
</summary>

_Response (200 - OK)_

```json
{
  "message": "Fetching data from FruityViceAPI Success"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "You're Not Authenticated"
}
```

&nbsp;

</details>

## 8. GET /fruitmov/

#### Request - Headers - Authorization (Bearer Scheme)

```http
Authorization: Bearer <access_token>
```

<details>
<summary>
Click here for Response
</summary>

_Response (200 - OK)_

```json
{
  "findCuisine": {
    "id": 1,
    "name": "Sloppy Joes",
    "description": "This beats canned or ...",
    "price": 12000,
    "imgUrl": "https://img.sndimg.com/...",
    "categoryId": 1,
    "authorId": 1,
    "createdAt": "2023-10-30T20:25:08.875Z",
    "updatedAt": "2023-10-30T20:25:08.875Z"
  }
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "User didn't have any Data"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "You're Not Authenticated"
}
```

&nbsp;

</details>

<!-- ## 6. PUT /cuisine/:id -->

## 9. POST /fruitmov/:MovementId

#### Request - Params

```json
{
  "MovementId": "<integer>"
}
```

#### Request - Headers - Authorization (Bearer Scheme)

```http
Authorization: Bearer <access_token>
```

<details>
<summary>
Click here for Response
</summary>

_Response (200 - OK)_

```json
{
  "message": "Add Movement <movement name> to User Success"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Data Movement Already Being Input"
}
OR
{
  "message": "Data Movement Already Being Deleted"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "You're Not Authenticated"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Error Data Not Found"
}
```

&nbsp;

</details>

<!-- ## 7. PATCH /cuisine/:id -->

## 10. PATCH /user/:id

#### Request - File

```json
{
  "imageUrl": "<file>"
}
```

#### Request - Params

```json
{
  "id": "integer (required)"
}
```

#### Request - Headers - Authorization (Bearer Scheme)

```http
Authorization: Bearer <access_token>
```

<details>
<summary>
Click here for Response
</summary>

_Response (200 - OK)_

```json
{
  "message": "Image <entitiy_name> success to update"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "ImageURL can't be Empty"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "You're Not Authenticated"
}
```

_Response (403 - Forbidden)_

```json
{
  "message": "You're Not Authorized"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Error Data Not Found"
}
```

&nbsp;

</details>

## 11. GET /purchase/

#### Request - Headers - Authorization (Bearer Scheme)

```http
Authorization: Bearer <access_token>
```

<details>
<summary>
Click here for Response
</summary>

_Response (200 - OK)_

```json
{
  "message": "Sloppy White success to delete"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "You're Not Authenticated"
}
```

_Response (403 - Forbidden)_

```json
{
  "message": "You're Not Authorized"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Error Data Not Found"
}
```

&nbsp;

</details>

## 12. POST /purchase/:id

#### Request - Body

```json
{
  "name": "string",
  "quantity": "integer",
  "price": "integer",
  "total": "integer"
}
```

#### Request - Params

```json
{
  "id": "<integer>"
}
```

#### Request - Headers - Authorization (Bearer Scheme)

```http
Authorization: Bearer <access_token>
```

<details>
<summary>
Click here for Response
</summary>

_Response (201 - OK)_

```json
{
  "addPurchase": {
    "id": 6,
    "name": "Indonesian",
    "updatedAt": "2023-10-31T03:41:06.960Z",
    "createdAt": "2023-10-31T03:41:06.960Z"
  }
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Name can't be Empty"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "You're Not Authenticated"
}
```

&nbsp;

</details>

<!-- ## 11. PUT /category/:id -->

## 13. DELETE /purchase/:id

#### Request - Params

```json
{
  "id": "<integer>"
}
```

#### Request - Headers - Authorization (Bearer Scheme)

```http
Authorization: Bearer <access_token>
```

<details>
<summary>
Click here for Response
</summary>

_Response (200 - OK)_

```json
{
  "updatedCategory": {
    "id": 1,
    "name": "Waffle Cone",
    "createdAt": "2023-10-30T20:24:52.246Z",
    "updatedAt": "2023-10-31T03:59:02.802Z"
  }
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Name can't be Empty"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "You're Not Authenticated"
}
```

_Response (403 - Forbidden)_

```json
{
  "message": "You're Not Authorized"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Error Data Not Found"
}
```

&nbsp;

</details>

<!-- ## 12. DELETE /category/:id -->

## 14. PATCH /purchase/:id

#### Request - Params

```json
{
  "id": "<integer>"
}
```

#### Request - Headers - Authorization (Bearer Scheme)

```http
Authorization: Bearer <access_token>
```

<details>
<summary>
Click here for Response
</summary>

_Response (200 - OK)_

```json
{
  "message": "Italian success to delete"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "You're Not Authenticated"
}
```

_Response (403 - Forbidden)_

```json
{
  "message": "You're Not Authorized"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Error Data Not Found"
}
```

&nbsp;

</details>

## 15. GET /movement/

#### Request - Params

```json
{
  "id": "<integer>"
}
```

#### Request - Headers - Authorization (Bearer Scheme)

```http
Authorization: Bearer <access_token>
```

<details>
<summary>
Click here for Response
</summary>

_Response (200 - OK)_

```json
{
  "message": "Italian success to delete"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "You're Not Authenticated"
}
```

_Response (403 - Forbidden)_

```json
{
  "message": "You're Not Authorized"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Error Data Not Found"
}
```

&nbsp;

</details>

<!-- GLOBAL ERROR -->

## Global Error

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid Token"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```
