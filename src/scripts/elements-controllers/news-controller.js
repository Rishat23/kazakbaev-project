import NewsService from '../API/news-service.js'

class NewsController {
	constructor(newsContainerSelector, options) {
		this._newsContainerElement = document.querySelector(newsContainerSelector)
		this._options = options
		this._newsItemTemplateElement = document.getElementById(options.newsItemTemplateIdSelector)
		this._renderNews()
	}

	_fetchNews() {
		return NewsService.getNews()
	}

	async _renderNews() {
		const newsList = await this._fetchNews()
		newsList.forEach((newsItem) => {
			const newsItemElement = this._newsItemTemplateElement.content.cloneNode(true)
			const newsImageElement = newsItemElement.querySelector('img')
			const newsTitleElement = newsItemElement.querySelector('h3')
			const newsTextElement = newsItemElement.querySelector('p')

			newsTitleElement.textContent = newsItem.title
			newsTextElement.textContent = newsItem.text
			newsImageElement.src = newsItem.src

			this._newsContainerElement.append(newsItemElement)
		})
	}
}
export default NewsController
