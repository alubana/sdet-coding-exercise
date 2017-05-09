var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var request = require("request");
var tungus = require('tungus');
var mongoose = require("mongoose");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var os = require("os");

//db collections
var User = require("./models/user");
var Todo = require("./models/todo");

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/data'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.listen(3600, 'localhost', function() {
    console.log("todo-app server has started");
});

 function getDirName() {
	 if(os.platform() == 'win32') {
		 return __dirname.substr(3, __dirname.length);
	 }
	 return __dirname;
 }

//DB Stuff
/**
 * Connect to the console database on localhost with
 * the default port (27017)
 */
mongoose.connect('tingodb:///'  + getDirName() + '/data', function (err) {
    if (err) throw err;
    console.log("db connected");
	console.log("dir:" + __dirname);
});

//Passport Config
app.use(require("express-session")({
    secret: "teksystem-1234",
    resave: false,
    saveUninitialized: false
}));

//AUTH Passport Config Stuff
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//ROUTES
app.get("/", function(req, res) {
    var tUsername = "none";
    if (req.user) {
        tUsername = req.user.username;
    }
    console.log("Logged in as: " + tUsername);
    //All todos from dbap
    Todo.find({}, function(err, allTodos) {

        if (err) {
            console.log(err);
        }
        else {
            res.render("home", {
                todos: allTodos,
                currentUser: req.user
            });
        }
    });

});

app.get("/api/todo", function(req, res) {
    //All todos from dbap
    Todo.find({}, function(err, allTodos) {

        if (err) {
            console.log(err);
        }
        else {
            res.send(allTodos);
        }
    });

});

// add new todos
app.post("/api/todo", isLoggedIn, function(req, res) {
    var name = req.body.name;
    var isDone = false;
    var priority = "LOW";

    var newTodo = {
        name: name,
        isDone: isDone,
        priority: priority
    }

    Todo.create(
        newTodo,
        function(err, newlyCreatedTodo) {
            if (err) {
                console.log(err);
            }
            else {
                res.status(200);
                console.log("Todo added: " + name);
                //send user back to homepage
                res.send();
            }
        });
    res.redirect("/");
});

app.delete("/api/todo/:todo_id", isLoggedIn, function(req, res) {
    console.log("Delete request recevied");
    console.log("Req param : " + req.params.todo_id);
    Todo.remove({
        _id: req.params.todo_id
    }, function(err, data) {
        if (err) {
            res.status(500);
            res.send("Error Deleting" + err);
        }
        else {
            res.json({
                message: 'Successfully deleted'
            });
        }
    });
});

app.put("/api/todo/:todo_id", isLoggedIn, function(req, res) {
    console.log("Update complete request recevied");
    console.log("Req param : " + req.params.todo_id);

    Todo.findById(req.params.todo_id, function(err, todo) {
        if (err) {
            res.status(500).send(err);
        }
        else {
            todo.name = req.body.name || todo.name;
            todo.isDone = req.body.isDone || todo.isDone;
            todo.priority = req.body.priority || todo.priority;

            todo.save(function(err, todo) {
                if (err) {
                    res.status(500).send(err)
                }
                res.send(todo);
            });
        }
    });
});

//AUTH ROUTES
app.get("/login", function(req, res) {
    res.render("login", {
        currentUser: req.user
    })
});

app.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
}), function(req, res) {

});

app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    return res.redirect(303, "/login");
}

//Use to access registeration path only
function isLoggedInAsAdmin(req, res, next) {
    if (req.isAuthenticated() && req.user.username === "admin") {
        return next();
    }
    return res.render("error", {
        errCode: 401,
        errDesc: "Forbidden: No milkshake for you!!!",
        currentUser: req.user
    });
}

//Registeration Routes
app.get("/register",  function(req, res) {
    res.render("register", {
        currentUser: req.user
    });
});

app.post("/register", function(req, res) {
    var newUser = new User({
        username: req.body.username
    });
    User.register(newUser, req.body.password, function(err, user) {
        if (err) {
            console.log("Error registering user");
            console.log(err);
            res.render("error", {
                errCode: 400,
                errDesc: err.message,
                currentUser: req.user
            });
            return;
        }
        passport.authenticate("local")(req, res, function() {
            console.log(req);
            res.redirect("/");
        })
    });
});
