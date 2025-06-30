const email = document.getElementById('email');
const copyEmail = document.getElementById('copy-msg-email');
const phone = document.getElementById('phone');
const copyPhone = document.getElementById('copy-msg-phone');

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