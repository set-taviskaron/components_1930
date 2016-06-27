(function (window) {
	'use strict';
	// this
	// 5. В обработчиках событий - на элемент!

	let outerLet = 'HELLO!'

	function blockOnClick (event) {
		let color = this.style.background;
		console.log('Клик по: ', event.target);
		console.log('Клик зарегистрирован на : ', event.currentTarget);

		if (event.target === blockInner) {
			// event.stopPropagation();
		}
	}

	let blockOuter = document.querySelector('.block_outer');
	let blockInner = document.querySelector('.block_inner');
	

	blockOuter.addEventListener('click', blockOnClick, true);
	blockInner.addEventListener('click', blockOnClick, true);


	document.body.addEventListener('click', function () {
		console.log('Я всплыл до BODY')
	}, true);
})(window);