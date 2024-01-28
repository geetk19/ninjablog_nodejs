const Blog = require("../models/blogs");

const blog_create_get = (req, res) => {
  res.render("blogs/create", { title: "Create a blog" });
};

const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("blogs/index", { title: "All blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

const blog_create_post = (req, res) => {
  console.log(req.body); //{ title: 'Sasuke', snippet: 'Uchiha', body: 'Team 7' }
  const blogs = new Blog(req.body); //{ title: 'Sasuke', snippet: 'Uchiha', body: 'Team 7' }
  blogs
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => console.log(err));
};

const blog_details = (req, res) => {
  ///blogs/id takes literal meaning. :id indicates its a variable
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("blogs/details", { title: "Blog Details", blog: result });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).render("404", { title: "Blog not found" });
    });
};

const blog_delete = (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  blog_create_get,
  blog_index,
  blog_create_post,
  blog_details,
  blog_delete,
};
