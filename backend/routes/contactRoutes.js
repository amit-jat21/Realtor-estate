const Contact = require('../models/Contact');
router.post('/', async (req, res) => {
  const contact = new Contact(req.body);
  await contact.save();
  res.json({ message: 'Contact submitted' });
});

router.get('/', async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
});

module.exports = router;
