class MapController {
	constructor(ymaps, mapSelector, options) {
		this._ymaps = ymaps
		this._mapElement = document.querySelector(mapSelector)
		this._options = options
		this._loadMap()
	}

	_loadMap() {
		this._buildMap()
		this._renderGeoObjects()
	}

	_buildMap() {
		const { Map } = this._ymaps
		const { center, zoom } = this._options
		this._map = new Map(this._mapElement, { center, zoom })
	}

	_renderGeoObjects() {
		this._addPlacemark()
	}

	_addPlacemark() {
		const { Placemark } = this._ymaps
		const { placemarkSrc } = this._options

		if (!placemarkSrc) {
			return
		}

		const placemark = new Placemark(
			this._map.getCenter(),
			{
				hintContent: 'Kazakbaev-gey'
			},
			{
				iconLayout: 'default#image',
				iconImageHref: placemarkSrc,
				iconImageSize: [60, 84]
			}
		)
		this._map.geoObjects.add(placemark)
	}
}

export default MapController
