const express = require('express');

const professionalController = require('../controllers/professional');

const router = express.Router();

// GET 
router.get('/', professionalController.getData);

// POST /feed/post
// router.post('/post', feedController.createPost);

module.exports = router;