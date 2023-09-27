var express = require('express');
var router = express.Router();
var OrderData = require('../Db.models/userOrders')
var Items = require('../Db.models/Items')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/getItems/:category', (req, res)=>{
  // console.log(req.params.category);
  let category = req.params.category
  try {
    Items.find({ category:category })
      .then(result => {
        console.log(result)
        res.json(result)
      })
} catch (error) {
    console.log(error)
}
})

router.post('/data', (req, res) => {
  const  data  = req.body;
  try {
    const newUserOrder = new OrderData({
    table:'1',
    order: data.Orders,
    totalPrice: data.LastAMount
  })
  newUserOrder.save()
  .then(res.json({successUrl:'/'}))
  } catch (error) {
    console.log(error);
    // .then(res.json(error))
  }
});

module.exports = router;
