const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  const tags = await Tag.findAll({
    include: [{model: Product}]
  })
  res.json(tags);
});

router.get('/:id', async (req, res) => {
  const tag = await Tag.findByPk(req.params.id, {
    include: [{model: Product}]
  })
  res.json(tag);
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
