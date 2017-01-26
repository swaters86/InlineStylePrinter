$('#scrape').submit(function () {
	var fetch = $.ajax({
		data: $(this).serialize(),
		type: $(this).attr('method'),
		url: $(this).attr('action')
	});
	fetch.done(function (response) {
		$('#results').html(response);
		var tableRows = $(".table tr").length - 1;
		$("#fail-message").css("visibility", "hidden");
		$(".table").css("visibility", "hidden");
		$("#success-message").css("visibility", "visible");
		if (!tableRows > 0) {
			$("#success-message").text("No inline styles found on this page!");
		} else {
			$(".table").css("visibility", "visible");
		}
		$("#success-message").fadeIn(3000);
	});
	fetch.fail(function (jqXHR, textStatus) {
		$("#success-message").css("visibility", "hidden");
		$("#fail-message").css("visibility", "hidden");
		$("#fail-message").css("visibility", "visible");
		$("#fail-message").fadeIn(3000);
	});
	return false;
});