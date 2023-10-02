class BurgerController {
	constructor(burgerSelector, options) {
		this._burgerElement = document.querySelector(burgerSelector)
		const burgerButtonElement = document.querySelector(options.burgerButtonSelector)
		this._options = options
		this._burgerButtonElement = burgerButtonElement

		burgerButtonElement.addEventListener('click', () => this._toggleBurgerActive())
	}

	_toggleBurgerActive() {
		this._burgerElement.classList.toggle(this._options.burgerActiveClass)
	}
}

export default BurgerController
