import Ymaps from 'ymaps'
import MapController from '../elements-controllers/map-controller.js'

const takeControlMap = async (mapSelector, options) => {
	const ymaps = await Ymaps.load().catch((error) => console.error('Failed to load Maps', error))

	new MapController(ymaps, mapSelector, options)
}

export default takeControlMap
