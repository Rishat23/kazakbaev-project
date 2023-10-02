class ServicesDropdownController {
	constructor(servicesDropdownElement, options) {
		this._servicesDropdownElement = servicesDropdownElement
		this._options = options
		const servicesDropdownButtonElement = servicesDropdownElement.querySelector(options.servicesDropdownButtonSelector)

		this._servicesDropdownButtonElement = servicesDropdownButtonElement

		servicesDropdownButtonElement.addEventListener('click', () => this._toggleServicesDropdownActive())
	}

	_toggleServicesDropdownActive() {
		this._servicesDropdownElement.classList.toggle(this._options.servicesDropdownActiveClass)
	}
}

export default ServicesDropdownController
