# Hackintosh Builder

## Description

_Duration: 2 Week Sprint_

Directly above this is how long it took you to develop the project. Your project description goes here. What problem did you solve? How did you solve it? 


To see the fully functional site, please visit: [DEPLOYED VERSION OF APP](www.heroku.com)

## Screen Shots

**Home Page View**
![Home Page View](/public/images/homeView.png)


![Builder View](/public/images/builderView.png)

![Component View (CPU)](/public/images/componentView.png)

![New/Edit Build View](/public/images/newBuildView.png)

![User Builds View](/public/images/userBuildsView.png)

![Review View](/public/images/reviewView.png)

### Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Installation

* Create a database named `prime_app`
* The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries
* Run `npm install`
* Create a `.env` file at the root of the project and paste this line into the file:
    ```
    SERVER_SESSION_SECRET=superDuperSecret
    ```
    While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
* Start postgres if not running already by using `brew services start postgresql`
* Run `npm run server`
* Run `npm run client`
* The `npm run client` command will open up a new browser tab for you

## Usage
How does someone use this application? Tell a user story here.

1. xxx
2. xxx
3. xxx
4. xxx
5. xxx
6. xxx


## Built With

- React.js
- React-Redux
- Redux-Sagas 
- PostgreSQL
- Passport
- Node
- Express.js
- React-Router-Dom
- Material-UI
- Material Design for Bootstrap for React
- ReactCardFlip

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality.  Special thanks to the Paxos instructors and the entire Paxos cohort.

## Support
If you have suggestions or issues, please email me at [jman985@gmail.com](www.google.com)