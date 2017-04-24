function populate(result) {
	console.log(result);

	var resultResponse = result.response.docs;
	console.log(result.response.docs)


	for (var i = 0; i < result.response.docs.length; i++) {
			result[i];

		var article = document.createElement('div');
		var title = document.createElement('a');
		var date = document.createElement('p');

		$(title).html(resultResponse[i].headline.main);

		$(title).attr('href', resultResponse[i].web_url);
		$(date).html(resultResponse[i].pub_date);

		$('.container').append(date);
		$('.container').append(article);
		$('.container').append(title);
		

	}

}

$('form').on("submit", function(e){
	e.preventDefault();
	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	url += '?' + $.param({
	  'api-key': "d3d5b73a680c47ae8ce2f3078ae29cc6",
	  'q': $('input').val(),
	  'sort': "newest"
	});
	$.ajax({
	  url: url,
	  method: 'GET',
	}).done(function(result) {
	  console.log(result);
	  populate(result);
	}).fail(function(err) {
	  throw err;
	});
})




