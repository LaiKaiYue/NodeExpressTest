module.exports = function(app) {
  app.get("/", (req, res) => {
    res.render("index", {
      title: "first express project",
      content: "Hello world"
    });
  });
};
