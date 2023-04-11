var express = require('express');
var router = express.Router();
const cinema_controlers= require('../controllers/cinema');
/* GET home page. */
router.get('/', cinema_controlers.cinema_view_all_Page);

module.exports = router;
