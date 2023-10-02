import { takeControlBurger, takeControlServicesDropdown, takeControlSlider } from './take-control'
import takeControlMap from './take-control/take-control-map.js'
import takeControlNews from './take-control/take-control-news.js'

// takeControlBurger('.burger', {
// 	burgerActiveClass: 'burger_active',
// 	burgerButtonSelector: '.burger__button'
// })
//
// takeControlServicesDropdown('.navigation__nested-wrapper', {
// 	servicesDropdownActiveClass: 'navigation__nested-wrapper_active',
// 	servicesDropdownButtonSelector: '.navigation__item_nested'
// })
//
// takeControlSlider('.slider', '.swiper-container', {
// 	direction: 'horizontal',
// 	navigation: {
// 		nextArrowSelector: '.slider-arrows__arrow_right',
// 		prevArrowSelector: '.slider-arrows__arrow:not(.slider-arrows__arrow_right)',
// 		disabledClass: 'sosi'
// 	}
// })

// takeControlMap('.our-branches__map', {
// 	center: [54.73399856993552, 55.949007499999986],
// 	zoom: 16,
// 	placemarkSrc: '../files/icons/map-location.svg'
// })

takeControlNews('.news-list__list', {
	newsItemTemplateIdSelector: 'news-list-item'
})
