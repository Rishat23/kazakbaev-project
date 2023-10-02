import SliderController from '../elements-controllers/slider-controller.js'

const takeControlSlider = (sliderContainerSelector, sliderSelector, options) => {
	const sliderContainerElements = document.querySelectorAll(sliderContainerSelector)
	sliderContainerElements.forEach((sliderContainerElement) => {
		const sliderElement = sliderContainerElement.querySelector(sliderSelector)
		const nextArrowElement = sliderContainerElement.querySelector(options.navigation.nextArrowSelector)
		const prevArrowElement = sliderContainerElement.querySelector(options.navigation.prevArrowSelector)

		new SliderController(sliderContainerElement, sliderElement, {
			...options,
			navigation: {
				nextEl: nextArrowElement,
				prevEl: prevArrowElement,
				disabledClass: options.navigation.disabledClass
			}
		})
	})
}

export default takeControlSlider
