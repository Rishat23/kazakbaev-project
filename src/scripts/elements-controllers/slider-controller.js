import Swiper, { Navigation } from 'swiper'

class SliderController {
	constructor(sliderContainerElement, sliderElement, options) {
		this._sliderContainerElement = sliderContainerElement
		this._sliderElement = sliderElement
		this._options = options

		Swiper.use([Navigation])

		this.swiper = new Swiper(sliderElement, options)
	}
}

export default SliderController
