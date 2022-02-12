const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  const categories = await Category.findAll({
    include: [{model: Product}]
  });
  res.json(categories);
});

router.get('/:id', async (req, res) => {
  const category = await Category.findByPk(req.params.id, {
    include: [{model: Product}]
  });
  res.json(category);
});

router.post('/', async (req, res) => {
  const result = await Category.create(req.body);
  if(result){
    return res.status(200).json(result);
  }
  res.status(400).json(result);
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  const result = await Category.destroy({where: {id: req.params.id }});
  if(result){
    return res.status(200).json(result);
  }
  res.status(400).json(result);
});

module.exports = router;
