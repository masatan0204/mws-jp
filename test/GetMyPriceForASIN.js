var mws         = require("../lib/index.js");
var asin        = "B015CPT37I";

mws.products.GetMyPriceForASIN({
    ASINList: {"ASINList.ASIN.1": asin},
    ItemCondition : 'New'
  }, function(err, data){
    console.log(data);
  }
);

