const express = require("express");
const path = require("path");
require("./db/conn");
require("./models/usermessage")
const hbs = require("hbs");
const User = require("./models/usermessage");

const app = express();
const port = process.env.PORT || 3000;

// Setting the path
const staticPath = path.join(__dirname, "../public")
const views_path = path.join(__dirname, "../templates/views")
const partials_path = path.join(__dirname, "../templates/partials")

// middleware
app.use('/public', express.static(path.join(__dirname, "../public")))
app.use('/bootstrap_css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use('/bootstrap_js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use('/jquery', express.static(path.join(__dirname, "../node_modules/jquery/dist")));

app.use(express.urlencoded({ extended: false }));
// app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.set("views", views_path);
hbs.registerPartials(partials_path);

// routing
// app.get(path, callback)
app.get("/", (req, res) => {
    res.render("index");
});
app.get("/about", (req, res) => {
    res.render("about");
});
app.get("/services", (req, res) => {
    res.render("services");
});
app.get("/portfolio", (req, res) => {
    res.render("portfolio");
});
app.get("/contact", (req, res) => {
    res.render("contact");
});
app.post("/contact", async (req, res) => {
    try {
        // res.send(req.body);
        const userData = new User(req.body);
        await userData.save();
        res.status(201).render("index");
    } catch (error) {
        res.status(500).send(error);
    }
})
app.get("/*", (req, res) => {
    res.render("404_error");
});



// Server create
app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
})