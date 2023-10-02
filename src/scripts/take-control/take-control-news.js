import NewsController from '../elements-controllers/news-controller.js'

const takeControlNews = (newsContainerSelector, options) => {
	new NewsController(newsContainerSelector, options)
}
export default takeControlNews
