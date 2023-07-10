
export async function apiClient(url: string, options = {}) {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
}

export async function post(url: string, body = {}, options = {}) {
  try {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any additional headers as needed
      },
      body: JSON.stringify(body),
      ...options,
    };

    return await apiClient(url, requestOptions);
  } catch (error) {
    console.error('POST request failed:', error);
    throw error;
  }
}

export default {
  get: apiClient,
  post,
};
