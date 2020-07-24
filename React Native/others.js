/*
  Axios
  -----
  - npm i axios
  - create, get, post
*/
axios.create({ baseURL, headers });
axios.get(url, { params });
axios.post(url, body);

/*
  Axios instance
  --------------
*/
instance.interceptors.request.use(config => console.log(config));

/*
  JSON Server & Ngrok
  -------------------
  - npm i json-server ngrok
  - Create `database.json` in the root directory
  - Add two scripts in `package.json` that starts both JSON Server and Ngrok
    - "database": "json-server -w database.json"
    - "tunnel": "ngrok http 3000"
  - npm run database
  - npm run tunnel
  - Use the provided URL as a proxy to your local server
*/
