var express = require('express');
var router = express.Router();


router.get('/',function(req,res,next)
{
  var y = Math.random();
  var x ;
  x = req.query.x;
  if (x==undefined){
  x=y;
  }
  res.render ('computation',{values: `f[Math.pow] applied to (${x}) is ${Math.pow(x)}`})

}
)
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render ('computation',{values: `f[Math.pow] applied to (${x}) is ${Math.pow(x)}`})

res.end();
});


module.exports = router;