
# Krist E-commerce Frontend (T-shirt selling web application)

This is the frontend of Krist E-commerce, built with React to provide a seamless user experience for browsing and purchasing t-shirts. It integrates Bootstrap for responsive UI, Axios for API interactions, and React-Hook-Form for efficient form handling.


## Features
- Browse and filter through 1000+ t-shirt designs.
- Add items to cart or favorites.
- Manage orders and delivery addresses.
- Handle authentication (login, signup, password reset).
- Protected routes that can logged in user only access. 
- Advange filtering. 
- Single page application.
- REST APIs integration
- Payment System
- Admin Dashboard 


## Tech Stack

**React:** Core framework.

**Bootstrap:** For responsive design.

**Axios:** For API calls to the backend.

**React-Hook-Form:** For form validation and handling.


## Docker Setup

Ensure that you have Docker and Docker Compose installed on your machine.

## Building the Docker Image

```bash
  docker compose build
```

This command will build the Docker image based on the Dockerfile and configurations in docker-compose.yml.

## Running the Application

```bash
  docker compose up
```

This command will build (if not already built) and start the containers as defined in the docker-compose.yml file. The application should be accessible at http://localhost:7070.


