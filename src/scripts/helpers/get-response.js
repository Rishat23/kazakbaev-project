import { API_BASE_URL } from '../constants/base.js'

const getResponse = async (apiUrl, body, params) => {
	try {
		const response = await fetch(`${API_BASE_URL}${apiUrl}`, {
			headers: {
				'Content-Type': 'application/json'
			},
			body,
			method: params?.method
		})
		return response.json()
	} catch (e) {
		console.error(e)
	}
}

export default getResponse
