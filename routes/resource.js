var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var cinema_controller = require('../controllers/cinema');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Cinema.
router.post('/cinemas', cinema_controller.cinema_create_post);
// DELETE request to delete Cinema.
router.delete('/cinemas/:id', cinema_controller.cinema_delete);
// PUT request to update Cinema.
router.put('/cinemas/:id', cinema_controller.cinema_update_put);
// GET request for one Cinema.
router.get('/cinemas/:id', cinema_controller.cinema_detail);
// GET request for list of all Cinema items.
router.get('/cinemas', cinema_controller.cinema_list);
module.exports = router;
