const express = require('express')
const uploadMiddleware = require('./uploadMiddleware')
const db = require('./models')
const router = express.Router()

router.get('/:areacode/:storename/offers', (req, res) => {
    const area_code = req.params.areacode
    const store_name = req.params.storename
    return db.Offer.findAll({where:{area_code, store_name}})
    .then(offers => res.send(offers))
    .catch(err => {
        console.log('There was an error querying offers', JSON.stringify(err))
        return res.send(err)
    })
})

router.get('/offers', (req, res) => {
  return db.Offer.findAll()
    .then(offers => res.send(offers))
    .catch((err) => {
      console.log('There was an error querying offers', JSON.stringify(err))
      return res.send(err)
    })
})

router.post('/offers', uploadMiddleware.single('product_image'), (req, res) => {
  const { 
      area_code,
      store_name,
      product_name,
      product_detail,
      offer_detail,
      start_date,
      end_date
  } = req.body
  const image_path = req.file !== undefined
    ? `uploads/${req.file.filename}`
    : null
  return db.Offer.create({ area_code, store_name, product_name, image_path, product_detail, offer_detail, start_date, end_date})
    .then(offer => res.send(offer))
    .catch((err) => {
      console.log('***There was an error creating a offer', JSON.stringify(offer))
      return res.status(400).send(err)
    })
})

router.delete('/offers/:id', (req, res) => {
  const id = parseInt(req.params.id)
  return db.Offer.findByPk(id)
    .then(offer => offer.destroy())
    .then(() => res.send({ id }))
    .catch((err) => {
      console.log('***Error deleting offer', JSON.stringify(err))
      res.status(400).send(err)
    })
})

router.put('/offers/:id', uploadMiddleware.single('product_image'), (req, res) => {
    const id = parseInt(req.params.id)
  return db.Offer.findByPk(id)
  .then(offer => {
    const {
      area_code,
      store_name,
      product_name,
      product_detail,
      offer_detail,
      start_date,
      end_date
    } = req.body
    const image_path = req.file !== undefined
      ? `uploads/${req.file.filename}`
      : null
    return offer.update({
      area_code,
      store_name,
      product_name,
      image_path,
      product_detail,
      offer_detail,
      start_date,
      end_date
    })
      .then(() => res.send(offer))
      .catch((err) => {
        console.log('***Error updating offer', JSON.stringify(err))
        res.status(400).send(err)
      })
  })  
})

module.exports = router
