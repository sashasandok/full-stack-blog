const apiBaseUrl = 'http://localhost:4000/'

const apiUrl = endpoint => apiBaseUrl + endpoint

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

export const get = endpoint =>
  fetch(apiUrl(endpoint), {
    method: 'GET',
    headers: headers,
  }).then(response => response.json())

export const post = (endpoint, { ...args }) =>
  fetch(apiUrl(endpoint), {
    method: 'POST',
    headers: {
      ...headers,
    },
    body: JSON.stringify(args),
  })
    .then(response => {
      response.json()
    })
    .then(response => console.log(response))

export const put = (endpoint, { ...args }, token) =>
  fetch(apiUrl(endpoint), {
    method: 'PUT',
    headers: {
      ...headers,
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    body: JSON.stringify(args),
  }).then(response => response.json())

export const del = endpoint =>
  fetch(apiUrl(endpoint), {
    method: 'DELETE',
    headers: {
      ...headers,
    },
  }).then(response => {
    console.log(response)
    return response.status === 200
  })
