import getResponse from '../helpers/get-response.js'
import { newsServiceRoutes } from '../constants/routes.js'

const NewsService = {
	getNews() {
		return getResponse(newsServiceRoutes.GET_NEWS)
	}
}

export default NewsService
