var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var router = express.Router();

/* GET Inline Styles of Elements on a Page */
router.post('/', function(req, res, next) {

	var url = req.body.url;

	console.log("url is:", url);
  
	request({
		uri: url
	}, function(error, response, body){
	    
	    var $ = cheerio.load(body);

	    // This handy function was found here: http://stackoverflow.com/a/34491966
	    function isEmpty(obj) { 
	      for (var x in obj) { return false; }
	      return true;
	    }

	    var data = new Array();
	    
	    var tags = "body,div,img,p,span,h1,h2,h3,h4,h5,h6,table,tr,th,td";

			var show = false;

	    $(tags).each(function(){
	      
	      var tag = $(this);
	      
	      var inlineStyles = tag.css();
	      
	      var tagName = tag.prop("tagName");
	      
	      var tagClass = tag.attr("class");
	      
	      var tagID = tag.attr("class");		

	      if( !isEmpty(inlineStyles) ) {
	        data.push({name: tagName, class: tagClass, id: tagID, inlineStyles: JSON.stringify(inlineStyles), show: true});
	      } 

	    });


	    res.render('scrape', {data: data});

	});

	

});

module.exports = router;
