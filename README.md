# Sports App

This is an intern practice project. The goal is to create a basic React + Typescript app for the auth flow.

### Install Dependencies:

```bash
npm install
```

### Build the Project

```bash
npm run build
```

### Run the Project

```bash
npm start
```

### Running the App with Docker

You can run the app using Docker for both development and production environments. Follow the instructions below.

### Running the App in Development Mode

In development mode, the app will support live reloading, meaning that changes you make to the source code will be reflected immediately without needing to rebuild the container.

### 1. Build the Docker Image for Development:
   In the root of the project, use the following command to build the Docker image for development:

   ```bash
   docker-compose build
   ```

### 2. Run the Docker Container for Development:
   After the image is built, you can start the container using the command:

   ```bash
   docker-compose up
   ```

### 3. Access the App:
   Open your browser and navigate to http://localhost:3000 to see the application running in development mode.

### 4. Stop the Docker Container:
   When you want to stop the app in development mode, use the following command:

   ```bash
   docker compose down
   ```

### Running the App in Production Mode

For production, we use a multi-stage Docker build to create an optimized version of the app that is served via Ngnix.

### 1. Build the Docker Image for Production:
   In the root od the project, use the following command to build the Docker image for production:

```bash
docker build -t sports-app-prod .
```

### 2. Run the Docker Container for Production:
   Once the image is built, you can start the container using the following command:

```bash
docker run -d -p 80:80 sports-app-prod
```

### 3. Access the App:
   Open your browser and navigate to http://localhost too see the production version of the application.

### 4. Stop the Docker container: 
   When you want to stop the production app, use the following command:

```bash
docker stop <container_id_or_name>
```

You can find the container ID or name by running the following command:

```bash
docker ps
```

## How to submit code

- Each ticket should be worked on in a separate branch.
- The branch should be named in a descriptive way (e.g. ticket "Implement linter and formatter" - branch name "linter-and-formatter").
- The first commit message on that branch should be the name of the ticket itself.
- When your work is done, you should submit your changes by making a _Pull request_ from that branch to _main_.
- The pull request should have a description of your changes and testing instructions. (Usually, there is a pull request template to help you out with this part.)
- You then request a review from your colleagues and testing from QA.
- After you receive both approvals, the PR can be merged.
- When merging, merge by squashing all the commits (so only one commit will be made to _main_) and delete the branch.

As your work goes through each step, it's important to keep track of which status your ticket has on the Scrum management tool the team uses.
Only after all of this is done, you will move the ticket to status "Done".



