// npm install axios

axios
  axios.get(url) // -> Promise (with parsed data)

// Sending headers
axios.post(url, jsObject, {headers: {'Content-Type': 'application/json'}})

// Setting defaults
axios.defaults.headers.common['Content-Type'] = 'application/json';

// Getting error responses
try {
  const response = axios.get(url);
  console.log(response.data);
} catch (error) {
  console.error(error.response.data)
} // The response body is in response.data

// npm install moment react-moment

import Moment from 'react-moment'

(<Moment format='MMMM Do YYYY h:mm:ss a'>${date}</Moment>)
