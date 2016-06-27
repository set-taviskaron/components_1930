(function (window) {
	'use strict';
	// this
	// 5. В обработчиках событий - на элемент!

	let outerLet = 'HELLO!'

	function blockOnClick () {
		let color = this.style.background;

		if (color === 'yellow') {
			color = 'red';
		} else {
			color = 'yellow';
		}

		this.style.background = color;
		this.innerHTML = parseInt(this.innerHTML, 10) + 1;
	}

	let blockRed = document.querySelector('.block_red');
	let blockGreen = document.querySelector('.block_green');
	let blockBlue = document.querySelector('.block_blue');

	blockRed.onclick = blockOnClick;
	blockGreen.onclick = blockOnClick;
	blockBlue.onclick = blockOnClick;

})(window);