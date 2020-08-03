const modalOverlay = document.querySelector('.modal-overlay'),
	  openBtn = document.querySelector('.header-btn'),
	  closeBtn = document.querySelector('.close-btn');


window.addEventListener('click', e => {
	let target = e.target.classList;
	if(target.contains('header-btn')) {
		modalOverlay.classList.add('open-modal');
	} else if (target.contains('close-btn') || target.contains('open-modal')) {
		modalOverlay.classList.remove('open-modal');
	}
});