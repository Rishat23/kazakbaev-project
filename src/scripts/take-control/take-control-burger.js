import BurgerController from '../elements-controllers/burger-controller.js'

const takeControlBurger = (burgerSelector, options) => {
	new BurgerController(burgerSelector, options)
}
export default takeControlBurger
