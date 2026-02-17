function downloadCV() {
	const link = document.createElement('a');
	link.href = 'files/cv-2025.pdf';
	link.target = '_blank';
	link.rel = "noopener noreferrer";

	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}