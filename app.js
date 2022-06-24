const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

// express app
const app = express();

// connect to mongodb
const dbURI =
  "mongodb+srv://adminninja:n7h6JqYlNCsh4oWk@nodetuts.db7wbeh.mongodb.net/node-tuts?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// register view engine
app.set("view engine", "ejs");

// middleware and static files
app.use(express.static("public"));
app.use(morgan("dev"));

// mongoose and mongodb sandbox routes
app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "New blog 2",
    snippet: "about my other new blog",
    body: "more about my new blog",
  });

  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/all-blogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/single-blog", (req, res) => {
  Blog.findById("62b506e135df3b27087f957c")
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    })
})

app.get("/", (req, res) => {
  res.redirect("/blogs")
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});


// blog routes
app.get("/blogs", (req, res) => {
  Blog.find().sort({ createdAt: -1 })
    .then(result => {

      res.render("index", { title: "All Blogs", blogs: result})
    })
    .catch(err => {
      console.log("Error fetching blogs")
    })
})

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create Blog" });
});

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404 Page" });
});
