class Menu {
	constructor(options) {
		this.el = options.el;

		this._initEvents();
		this.menuItems = options.el.querySelectorAll('.menu__item');
	}

	_initEvents() {
		this.el.addEventListener('click', this._onMenuClick.bind(this));
	}


	_onMenuClick(event) {
		if (event.target.classList.contains('menu__title')) {
			this.el.classList.toggle('menu_open');
		}

		if (event.target.classList.contains('menu__item')) {
			this._onMenuItemClick(event);
		}
		if (event.target.classList.contains('menu__item-delete')) {
			this._onMenuItemDelete(event);
		}

	}

	_deleteActive() {
		for (let i = 0; i < this.menuItems.length; i++) {
			this.menuItems[i].classList.remove('menu__item_active');
		}
	}

	_onMenuItemClick(event) {
		this._deleteActive();
		event.target.classList.add('menu__item_active');
	}


	_onMenuItemDelete(event) {
		console.log(this);
		event.target.parentNode.parentNode.removeChild(event.target.parentNode);
	}

}