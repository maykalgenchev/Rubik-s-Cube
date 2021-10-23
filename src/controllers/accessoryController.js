const express = require('express');
const accessoryService = require('../services/accessoryService');

const router = express.Router();

const { create } = require('../services/accessoryService');

console.log(create)

router.get('/create', (req, res) => {
    res.render('accessory/create');
})

router.post('/create', async (req, res) => {
    let { name, description, imageUrl } = req.body;
    await accessoryService.create(name, description, imageUrl)

    res.redirect('/')
})


module.exports = router;