import ServicesDropdownController from '../elements-controllers/services-dropdown-controller.js'

const takeControlServicesDropdown = (servicesDropdownSelector, options) => {
	const servicesDropdownElements = document.querySelectorAll(servicesDropdownSelector)
	servicesDropdownElements.forEach((servicesDropdownElement) => {
		new ServicesDropdownController(servicesDropdownElement, options)
	})
}
export default takeControlServicesDropdown
