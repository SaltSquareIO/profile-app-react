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

## Running the App with Docker

To run the app using Docker, follow these steps:

1. ### Build and Run the Docker Container:
   In the root of the project, use the following command to build and start the container:

   ```bash
   docker compose up --build
   ```

2. ### Access the App:
   Open your browser and navigate to [Local App](http://localhost:3000) to see the application running.

3. ### Stop the Docker Container:
   When you want to stop the app, use the following command:

   ```bash
   docker compose down
   ```

## How to submit code

- Each ticket should be worked on in a separate branch.
- The branch should be named in a descriptive way (e.g. ticket "Implement linter and formatter" - branch name "linter-and-formatter").
- The first commit message on that branch should be the name of the ticket itself.
- When your work is done, you should submit your changes by making a _Pull request_ from that branch to _main_.
- The pull request should have a description of your changes and testing instructions. (Usually, there is a pull request template to help you out with this part.)
- You then request a review from your colleagues and testing from QA.
- After you receive both approvals, the PR can be merged.
- When merging, merge by squashing all the commits (so only one commit will be made to _main_.)

As your work goes through each step, it's important to keep track of which status your ticket has on the Scrum management tool the team uses.
Only after all of this is done, you will move the ticket to status "Done".



