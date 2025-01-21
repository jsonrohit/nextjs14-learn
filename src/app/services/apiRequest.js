const httpRequest = async (url, body = null) => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    return await fetch(`${API_URL}/${url}`, { body })
}

export { httpRequest };