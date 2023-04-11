var Cinema = require("../models/cinema");
// List of all Cinemas
exports.cinema_list = async function (req, res) {
  try {
    theCinemas = await Cinema.find();
    res.send(theCinemas);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};
// for a specific Cinema.
exports.cinema_detail = function (req, res) {
  res.send("NOT IMPLEMENTED: Cinema detail: " + req.params.id);
};
// Handle Cinema create on POST.
exports.cinema_create_post = async function (req, res) {
  console.log(req.body);
  let document = new Cinema();
  // We are looking for a body, since POST does not have query parameters.
  // Even though bodies can be in many different formats, we will be picky
  // and require that it be a json object
  // {"cinema_type":"goat", "cost":12, "size":"large"}
  document.cinema_Name = req.body.cinema_Name;
  document.cinema_genre = req.body.cinema_genre;
  document.cinema_parts = req.body.cinema_parts;
  try {
    let result = await document.save();
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

// Handle Cinema delete form on DELETE.
exports.cinema_delete = function (req, res) {
  res.send("NOT IMPLEMENTED: Cinema delete DELETE " + req.params.id);
};
// Handle Cinema update form on PUT.
exports.cinema_update_put = function (req, res) {
  res.send("NOT IMPLEMENTED: Cinema update PUT" + req.params.id);
};
exports.cinema_view_all_Page = async function (req, res) {
  try {
    theCinemas = await Cinema.find();
    console.log(theCinemas);
    res.render("cinema", {
      title: "Cinemas Search Results",
      results: theCinemas,
    });
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};
