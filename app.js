const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js");


const app = express();


let addItems = ["Buy Food", "Cook Food", "Eat Food"]; // array in which we push our items one by one
let workItems = [];


app.set('view engine', 'ejs'); // using ejs with express


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get('/', function (req, res) {

    let day = date.get_Day();

    res.render("list", { listTitle: day, newListItems: addItems }); // instead of using .sendFile() to send .html file, using .render() to send .ejs file
});

app.get("/work", function (req, res) {
    res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.get("/about", function (req, res) {
    res.render("about");
});




app.post("/", function (req, res) {
    let item = req.body.newItem; // storing the item input by the user in a variable

    if (req.body.list === "Work") { // the title we gave to the work page was 'Work List', but the 'value' attribute of the button tag only stores the word before a whitespace, i.e. 'Work' in this case
        workItems.push(item);
        res.redirect("/work");
    }
    else {
        addItems.push(item); // appending the input item to the array
        res.redirect("/"); // redirecting to the home route after each time a new item has been entered
    }

});

// app.post("/work", function (req, res) {
//     let item = req.body.newItem;
//     workItems.push(item);
//     res.redirect("/work");
// });




app.listen(3000, function () {
    console.log('Server started on port 3000.');
});