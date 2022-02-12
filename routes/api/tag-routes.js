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
  if(!tag){
    return res.status(404).json({message: "No tag found for that ID."});
  }
  res.json(tag);
});

router.post('/', async (req, res) => {
  const result = await Tag.create(req.body)
  if(result){
    return res.status(200).json(result);
  }
  res.status(400).json(result);
});

router.put('/:id', async (req, res) => {
  const result = await Tag.update(req.body, {where: {id: req.params.id}});
  if(result[0]){
    return res.status(200).json(result);
  }
  res.status(400).json({message: "No tag found for that ID."});
});

router.delete('/:id', async (req, res) => {
  const result = await Tag.destroy({where: {id: req.params.id}});
  if(result){
    return res.status(200).json(result);
  }
  res.status(400).json({message: "No tag found for that ID."});
});

module.exports = router;
