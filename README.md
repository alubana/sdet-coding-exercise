# TEKsystems SDET Coding Exercise for Java

## Application Description
A simple Node todo-app built with Express and MongoDB. In Todo-app a user can store, mark-complete, delete a todo. All requests are handled via a RESTful Api.
### Features at a glance 
* todo-app must display all saved todos regardless of login authentication
* User must be logged in to add, mark-complete or delete a todo. Otherwise, if the user perform any of these actions, user must be redirected to the login page.
* Succesfull login redirects the user to landing page, otherwise the user stays on login page.
* Data persistence
Note: The application contains intentional bugs

## General Instruction
* Programming Language must be Java.
* Exercise must be completed within 24 hours period of receiving examination.

## App Deployment | Running Locally
1. Make sure you have [NPM](https://www.npmjs.com/) and [Node.js](http://nodejs.org/). Please note npm in distributed with Node.js.
2. Clone [todo-app](https://github.com/todo-app-link-please-update) and issue ``npm start`` in app root folder. todo-app will run on [Local Host](http://localhost/4200)
3. Please note you can only make changes to ``app.listen(PORT, IP)`` method in `./app.js.` As your automation scripts will be run against the default todo-app. 

## Download Java Project Repo
* Clone [TEKsystem-Coding-Ex](https://github.com/coding-ex) and follow instructions expicltly specified in respective `package.info`.
* The complelete coding exercise is to be completed in entirety within this project folder.

## Evaluation Factors (In order of importance)
* Demonstrate OOP principles.
* Framework and test case organization
* Automation script stability.
* Code Coverage
* Use of a build tool such as maven.

## Delivery Instruction
* The code must work out of the box, i.e. include all the necessary dependencies.
* Candidate must submit code without bytecode, target folder etc.

## Delivery Method
Commit your code to the [repository](https://github.com/coding-ex)

## **Problem Statement**
1. Using the provided todo-app, create a selenium framework and implement integration (e2e) tests to verify the functionality of the todo-app.
You must either use TestNG or Junit as the unit test framework.
2. Using an Api Test framework of your choice (such as REST-assured, Jersey), test all routes (end-points) defined in `app.js`.

#### Documentation
Add a `README.md` file (You may replace the current file with your own)

_You may demonstrate any other relevant technologies or approaches deemed fit within the scope of this exercise._
