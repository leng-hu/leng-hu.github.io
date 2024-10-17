blog.addLoadEvent(function () {
	const input = document.getElementById('search-input');
		if (!input) return;
	const url="https://qfafa.com/portal/post/search/?k=";
	input.addEventListener('keypress', function(event) {
		if (event.key === 'Enter') {
			event.preventDefault();
			 window.location.href=url+encodeURIComponent(input.value);
		}
	});
	document.getElementById('search-btn').addEventListener('click', function() {
		window.location.href=url+encodeURIComponent(input.value);
	});
});
