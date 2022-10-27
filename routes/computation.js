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
  res.render ('computation',{title: `f[Math.tanh] applied to [${x}] is [${Math.tanh(x)}]`})
  res.end();
}
);


module.exports = router;