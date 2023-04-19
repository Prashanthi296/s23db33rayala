var express = require('express');
var router = express.Router();
const cinema_controlers= require('../controllers/cinema');
/* GET home page. */
router.get('/', cinema_controlers.cinema_view_all_Page);
router.get('/detail', cinema_controlers.cinema_view_one_Page);
/* GET create cinema page */
router.get('/create', cinema_controlers.cinema_create_Page);
router.get('/update', cinema_controlers.cinema_update_Page);
router.get('/delete', cinema_controlers.cinema_delete_Page);
module.exports = router;
