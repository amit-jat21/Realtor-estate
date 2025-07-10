const Client = require('../models/Client');
const express = require('express');
const router = express.Router(); // ✅ this line is missing!

router.get('/', async (req, res) => {
  const clients = await Client.find();
  res.json(clients);
});

router.post('/', upload.single('image'), async (req, res) => {
  const { name, description, designation } = req.body;
  const newClient = new Client({ name, description, designation, image: req.file.filename });
  await newClient.save();
  res.json({ message: 'Client added' });
});

module.exports = router;