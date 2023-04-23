var express = require('express');
var router = express.Router();
const cinema_controlers= require('../controllers/cinema');
/* GET home page. */
const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    req.session.returnTo = req.originalUrl;
    console.log(req.session.returnTo);
    res.redirect("/login");
}
router.get('/', cinema_controlers.cinema_view_all_Page);
router.get('/detail',secured, cinema_controlers.cinema_view_one_Page);
/* GET create cinema page */
router.get('/create', secured,cinema_controlers.cinema_create_Page);
router.get('/update', secured,cinema_controlers.cinema_update_Page);
router.get('/delete',secured, cinema_controlers.cinema_delete_Page);
module.exports = router;
