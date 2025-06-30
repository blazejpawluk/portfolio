document.querySelectorAll('.title-div').forEach(title => {
	title.addEventListener('click', () => {
		const nextDiv = title.nextElementSibling;
		const arrow = title.querySelector('.arrow-icon');

		if (nextDiv.style.display === 'none') {
			nextDiv.style.display = 'block';
			arrow.classList.add('rotated');
		} else {
			nextDiv.style.display = 'none';
			arrow.classList.remove('rotated');
		}
	});

	title.addEventListener('keypress', (event) => {
		if (event.key === 'Enter') {
			title.click();
		}
	});
});