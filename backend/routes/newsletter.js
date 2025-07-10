const Newsletter = require('../models/newsletter');
router.post('/', async (req, res) => {
  const newsletter = new Newsletter(req.body);
  await newsletter.save();
  res.json({ message: 'Subscribed successfully' });
});

router.get('/', async (req, res) => {
  const list = await Newsletter.find();
  res.json(list);
});

module.exports = router;
