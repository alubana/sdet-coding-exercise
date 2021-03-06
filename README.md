# TEKsystems SDET Coding Exercise for Java

## Application Description
A simple [mongo](https://www.mongodb.com/)-[express](https://expressjs.com/) node based todo-app. App provided basic functionality for a user to store, mark-complete, delete a todo. All requests are handled via a RESTful Api. App features a local authentication strategy using [Passport](http://passportjs.org/).

## App Deployment | Running Locally
1. Make sure you have [NPM](https://www.npmjs.com/) and [Node.js](http://nodejs.org/). Please note npm in distributed with Node.js.
2. Clone [todo-app](https://github.com/todo-app-link-please-update) and issue ``npm install`` followed by ``npm start`` in app root folder. todo-app will run on [Local Host](http://localhost:3600) port 3600. Default user is admin with password admin
3. Please note you can only make changes to ``app.listen(PORT, IP)`` method in `./app.js.` As your automation scripts will be run against the default todo-app.

Note: In case of problems with deployment, please contact app [Admin](alubana@teksystems.com)
## Features at a glance 
* todo-app must display all saved todos regardless of login authentication
* User must be logged in to add, mark-complete or delete a todo. Otherwise, if the user perform any of these actions, the user must be redirected to the login page.
* Successful login redirects the user to landing page. Otherwise, the user stays on the login page. Also, a new user can be registered.
* Data persistence, todo-app must retain changes after a page refresh, browser session termination.

Note: The application contains intentional bugs

## General Instruction
* Programming Language must be Java.
* Exercise must be completed within 24 hours period of receiving examination.

## Download Java Project Repo
* Clone [TEKsystem-Coding-Ex](https://github.com/coding-ex).
* Follow instructions explicitly specified in respective `package.info`.

## Evaluation Factors
* Demonstrate OOP principles
* Framework and test case organization
* Automation script stability
* Code Coverage
* Effective usage of a build tool such as [maven](https://maven.apache.org/)

## Delivery Instruction
* The code must work out of the box, i.e. include all the necessary dependencies.
* Candidate must submit code without bytecode, target folder etc.

## Delivery Method
Commit your code to the [repository](https://github.com/coding-ex).

## **Problem Statement**
* Using the provided todo-app, create a [Selenium](http://www.seleniumhq.org/) framework. And implement integration (e2e) tests to verify the functionality of the todo-app.
* You must either use TestNG or JUnit as the unit test framework.
* Using a BDD framework such as [Cucumber](https://cucumber.io/) is recommended.
* Using an Api Test framework of your choice (such as [REST-assured](http://rest-assured.io/), [Jersey](https://jersey.java.net/)), test all routes (end-points) implemented in `app.js`.

_You may demonstrate any other relevant technologies or approaches deemed fit within the scope of this exercise._
