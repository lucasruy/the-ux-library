/* eslint-disable */

const GetValues = urlGet => {
  const responseValues = fetch(urlGet, { method: 'GET' })
    .then(response => response.json())
    .then(response => response)
    .catch(error => console.error(error))

  return responseValues
}

export default GetValues
