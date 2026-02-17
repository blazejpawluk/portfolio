const phoneIcon = document.getElementById('phone-icon');
const emailIcon = document.getElementById('email-icon');
const addressIcon = document.getElementById('address-icon');
const facebookIcon = document.getElementById('facebook-icon');
const instagramIcon = document.getElementById('instagram-icon');
const linkedinIcon = document.getElementById('linkedin-icon');
const githubIcon = document.getElementById('github-icon');

const phoneClick = async () => {
	try {
		await navigator.clipboard.writeText('+48607633205');

		const textEl = document.getElementById('phone-text');
		textEl.classList.add('fade-out');
		setTimeout(() => {
			textEl.textContent = 'Skopiowano do schowka';
			textEl.classList.remove('fade-out');
			textEl.classList.add('fade-in');
			setTimeout(() => {
				textEl.classList.remove('fade-in');
				textEl.classList.add('fade-out');
				setTimeout(() => {
					textEl.textContent = '+48 607 633 205';
					textEl.classList.remove('fade-out');
					textEl.classList.add('fade-in');
					setTimeout(() => {
						textEl.classList.remove('fade-in');
					}, 300);
				}, 300);
			}, 3000);
		}, 300);
	} catch (error) {console.error('Błąd kopiowania:', err);}
}
phoneIcon.addEventListener('click', phoneClick);
phoneIcon.addEventListener('keypress', (e) => {
	if (e.key == 'Enter') phoneClick();
});

const emailClick = async () => {
	try {
		await navigator.clipboard.writeText('bpawluk05@gmail.com');

		const textEl = document.getElementById('email-text');
		textEl.classList.add('fade-out');
		setTimeout(() => {
			textEl.textContent = 'Skopiowano do schowka';
			textEl.classList.remove('fade-out');
			textEl.classList.add('fade-in');
			setTimeout(() => {
				textEl.classList.remove('fade-in');
				textEl.classList.add('fade-out');
				setTimeout(() => {
					textEl.textContent = 'bpawluk05@gmail.com';
					textEl.classList.remove('fade-out');
					textEl.classList.add('fade-in');
					setTimeout(() => {
						textEl.classList.remove('fade-in');
					}, 300);
				}, 300);
			}, 3000);
		}, 300);
	} catch (error) {console.error('Błąd kopiowania:', err);}
}

emailIcon.addEventListener('click', emailClick);
emailIcon.addEventListener('keypress', (e) => {
	if (e.key == 'Enter') emailClick();
});

const addressClick = async () => {
	try {
		await navigator.clipboard.writeText('ul. Leśna 25, 55-330, Lutynia');

		const textEl = document.getElementById('address-text');
		textEl.classList.add('fade-out');
		setTimeout(() => {
			textEl.textContent = 'Skopiowano do schowka';
			textEl.classList.remove('fade-out');
			textEl.classList.add('fade-in');
			setTimeout(() => {
				textEl.classList.remove('fade-in');
				textEl.classList.add('fade-out');
				setTimeout(() => {
					textEl.textContent = 'ul. Leśna 25, 55-330, Lutynia';
					textEl.classList.remove('fade-out');
					textEl.classList.add('fade-in');
					setTimeout(() => {
						textEl.classList.remove('fade-in');
					}, 300);
				}, 300);
			}, 3000);
		}, 300);
	} catch (error) {console.error('Błąd kopiowania:', err);}
}

addressIcon.addEventListener('click', addressClick);
addressIcon.addEventListener('keypress', (e) => {
	if (e.key == 'Enter') addressClick();
});

facebookIcon.addEventListener('click', () => {
	window.open('https://www.facebook.com/profile.php?id=100023762712516', '_blank');
});
facebookIcon.addEventListener('keypress', (e) => { if (e.key == 'Enter')
	window.open('https://www.facebook.com/profile.php?id=100023762712516', '_blank');
});

instagramIcon.addEventListener('click', () => {
	window.open('https://www.instagram.com/blazej.16/', '_blank');
});
instagramIcon.addEventListener('keypress', (e) => { if (e.key == 'Enter')
	window.open('https://www.instagram.com/blazej.16/', '_blank');
});

linkedinIcon.addEventListener('click', () => {
	window.open('https://www.linkedin.com/in/błażej-pawluk-67831132a/', '_blank');
});
linkedinIcon.addEventListener('keypress', (e) => { if (e.key == 'Enter')
	window.open('https://www.linkedin.com/in/błażej-pawluk-67831132a/', '_blank');
});

githubIcon.addEventListener('click', () => {
	window.open('https://github.com/blazejpawluk', '_blank');
});
githubIcon.addEventListener('keypress', (e) => { if (e.key == 'Enter')
	window.open('https://github.com/blazejpawluk', '_blank');
});