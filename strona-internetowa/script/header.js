const email = document.getElementById('email');
const copyEmail = document.getElementById('copy-msg-email');
const phone = document.getElementById('phone');
const copyPhone = document.getElementById('copy-msg-phone');
const menuIcon = document.getElementById('menu');
const cancelIcon = document.getElementById('cancel');
const hr1 = document.getElementById('hr1');
const hiddenMenu = document.getElementById('hidden-menu');

email.addEventListener('click', async (e) => {
	try {
		await navigator.clipboard.writeText('bpawluk05@gmail.com');

		copyEmail.style.left = e.clientX + 'px';
		copyEmail.style.top = (e.clientY) + 'px';
		copyEmail.style.display = 'block';

		setTimeout(() => {
			copyEmail.style.display = 'none';
		}, 3000);
	} catch (error) {console.error('Błąd kopiowania:', err);}
});

phone.addEventListener('click', async (e) => {
	try {
		await navigator.clipboard.writeText('+48607633205');

		copyPhone.style.left = e.clientX + 'px';
		copyPhone.style.top = e.clientY + 'px';
		copyPhone.style.display = 'block';

		setTimeout(() => {
			copyPhone.style.display = 'none';
		}, 3000);
	} catch (error) {console.error('Błąd kopiowania:', err);}
});

menuIcon.addEventListener('click', async (e) => {
	menuIcon.style.display = "none";
	cancelIcon.style.display = "block";
	hr1.style.display = "block";
	hiddenMenu.style.display = "flex";
});

cancelIcon.addEventListener('click', async (e) => {
	menuIcon.style.display = "block";
	cancelIcon.style.display = "none";
	hr1.style.display = "none";
	hiddenMenu.style.display = "none";
});