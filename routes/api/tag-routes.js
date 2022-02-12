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

router.post('/', async (req, res) => {
  // create a new tag
  const result = await Tag.create(req.body)
  if(result){
    return res.status(200).json(result);
  }
  res.status(400).json(result);
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', async (req, res) => {
  const result = await Tag.destroy({where: {id: req.params.id}});
  if(result){
    return res.status(200).json(result);
  }
  res.status(400).json(result);
});

module.exports = router;
