# Hackintosh Builder

## Description

_Duration: 2 Week Sprint_

Hackintosh Builder is a personal computer (PC) builder application that contains strictly macOS compatible PC components to allow the user to build their own custom PC capable of installing and running macOS.  To complete their "Hackintosh" build, the user chooses up to one PC component in each of eight catagories - CPU, CPU Cooler, Motherboard, Case, GPU, Storage, Memory, and PSU.  The app gives the user the freedom to Edit, Review and Print, Delete, or Save their build at any time.


To see the fully functional site, please visit Heroku here --> [HACKINTOSH BUILDER](https://whispering-reaches-08747.herokuapp.com/#/home)

## Screen Shots

**Login Page View**
![Login Page View](/public/images/loginView.png)

**Home Page View**
![Home Page View](/public/images/homeView.png)

**New Build View**
![New/Edit Build View](/public/images/newBuildView.png)

**Component View (CPU component)**
![Component View (CPU)](/public/images/componentView.png)

**Build View (after component selections)**
![Builder View](/public/images/builderView.png)

**User Builds View**
![User Builds View](/public/images/userBuildsView.png)

**Review Build View**
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

1. Register as a new user by clicking on "Don't have an account? Sign Up" at the login page and registering your username and password.
2. Login using your username and password.
3. At the Home Page, click on "Build Your Hackintosh" to start a new build.
4. Start adding components to your build by clicking on "ADD CPU" (or "Add CPU Cooler", "Add Motherboard, etc.).
5. At the "Select Your (Component Type)" page, click on any of the component photos to view and compare the specifications for that particular component.
6. Click the "SELECT" button to select the desired component, then click "SAVE AND RETURN" to save the selected component to your build.
7. Repeat step 6 for any remaining components, as desired.  Click "CHANGE (Component Type)" on any previously added components to swap them out for a different variety.
8. Click "ADD/EDIT BUILD NAME" at any time to name your build.
9. When finished adding components, click "REVIEW AND PRINT" to view your build components on a print-friendly page.
10. Click on "View Builds" in the navigation bar at any time to view all previous and in-progress builds for editing or deletion.


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