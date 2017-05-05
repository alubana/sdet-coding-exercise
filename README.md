# TEKsystems SDET Coding Exercise for Java

## Application Description
A simple [mongo](https://www.mongodb.com/)-[express](https://expressjs.com/) node based todo-app. App provided basic functionality for a user to store, mark-complete, delete a todo. All requests are handled via a RESTful Api. App also, features a local authentication strategy using [Passport](http://passportjs.org/).
### Features at a glance 
* todo-app must display all saved todos regardless of login authentication
* User must be logged in to add, mark-complete or delete a todo. Otherwise, if the user perform any of these actions, the user must be redirected to the login page.
* Succesfull login redirects the user to landing page. Otherwise, the user stays on the login page.
* Data persistence
Note: The application contains intentional bugs

## General Instruction
* Programming Language must be Java.
* Exercise must be completed within 24 hours period of receiving examination.

## App Deployment | Running Locally
1. Make sure you have [NPM](https://www.npmjs.com/) and [Node.js](http://nodejs.org/). Please note npm in distributed with Node.js.
2. Clone [todo-app](https://github.com/todo-app-link-please-update) and issue ``npm start`` in app root folder. todo-app will run on [Local Host](http://localhost/4200)
3. Please note you can only make changes to ``app.listen(PORT, IP)`` method in `./app.js.` As your automation scripts will be run against the default todo-app.
Note: In case of problems with deployment, please contact app [Admin](admin@some-domain-maybe-tek.com)

## Download Java Project Repo
* Clone [TEKsystem-Coding-Ex](https://github.com/coding-ex) and follow instructions expicltly specified in respective `package.info`.
* The complelete coding exercise is to be completed in entirety within this project folder.

## Evaluation Factors (In order of importance)
* Demonstrate OOP principles.
* Framework and test case organization
* Automation script stability.
* Code Coverage
* Use of a build tool such as [maven](https://maven.apache.org/).

## Delivery Instruction
* The code must work out of the box, i.e. include all the necessary dependencies.
* Candidate must submit code without bytecode, target folder etc.

## Delivery Method
Commit your code to the [repository](https://github.com/coding-ex)

## **Problem Statement**
* Using the provided todo-app, create a [Selenium](http://www.seleniumhq.org/) framework. And implement integration (e2e) tests to verify the functionality of the todo-app.
* You must either use TestNG or Junit as the unit test framework.
* Using an Api Test framework of your choice (such as [REST-assured](http://rest-assured.io/), [Jersey](https://jersey.java.net/)), test all routes (end-points) implemented in `app.js`.

#### Documentation
Add a `README.md` file (You may replace the current file with your own)

_You may demonstrate any other relevant technologies or approaches deemed fit within the scope of this exercise._
