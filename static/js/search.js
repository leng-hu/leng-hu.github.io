blog.addLoadEvent(function () {
	let input = document.getElementById('search-input');
		if (!input) return;
	
	input.addEventListener('keypress', function(event) {
		if (event.key === 'Enter') {
			event.preventDefault();
			document.getElementById('search-form').submit(); 
		}
	});
});
