$('#scrape').submit(function() { 
	$.ajax({
	   data: $(this).serialize(), 
	   type: $(this).attr('method'), 
	   url: $(this).attr('action'),
	   success: function(response) { 
	    $('#results').html(response);
	   }
	});
    return false;
});