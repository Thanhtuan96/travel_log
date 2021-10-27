const express = require('express');
const router = express.Router();
const campgroundCRUD = require('../controllers/campgroundCRUD');
const { isLoggedIn } = require('../middlewares/isLoggedIn');

router.post('/:id/reviews', isLoggedIn, campgroundCRUD.createReview);

//DELETE: delete review in camp
router.delete(
    '/:id/reviews/:reviewId',

    campgroundCRUD.deleteReview
);

module.exports = router;
