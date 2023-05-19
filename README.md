## Installation
   ```
1. Set db data and JWT secret into `docker-compose.yml` file: 

2. Run the application using Docker:

```bash
    docker-compose up -d --build
```
Swagger documentation can be accessed at `/`

## Endpoints
Endpoints:

- `POST /user`: creates a new user. Expects an object in the request body and returns the created user object.
- `PUT /user/:id`: updates user data. Returns the updated user object.
- `GET /user`: retrieves all users and returns an array of all user objects.
- `GET /user/:id`: retrieves user data by id. Expects the user id and returns the user object.
- `DELETE /user/:id`: deletes a user by id. Expects the user id and returns the deleted user object.

- `POST /auth/login`: authenticates a user. Expects am user email and password in the request body. Returns an access token on success.

- `GET /verify/:code`: verifies an email confirmation code. Expects the confirmation code as a URL parameter. If the confirmation code matches a user, updates `isEmailVerified` property to `true`.