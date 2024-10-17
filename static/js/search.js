blog.addLoadEvent(function () {
	let input = document.getElementById('search-input');
		if (!input) return;
	
	input.addEventListener('keypress', function(event) {
		if (event.key === 'Enter') {
			event.preventDefault();
			 location.href="http://qfafa/com/portal/post/search/?k="+encodeURIComponent(input.value);
		}
	});
});
