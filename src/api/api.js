const Axios = require('Axios');

const GET = "get";
const client = Axios.create({
  baseURL: 'http://localhost:3000' // TODO: move to env variable
});

export const getWeather = async ({ lat, lng }) => {
  const searchUrl = `/weather?lat=${lat}&lng=${lng}`;
  // TODO: send token
  const { data } = await request(GET, searchUrl);
  return data;
};

const request = async (method, url) => {
  try {
    const requestConfig = {
      url,
      method
    };

    const response = await client.request(requestConfig);
    return { data: response.data, status: response.status };
  } catch (error) {
    if (error.response && error.response.status === 401)
      return { error, status: 401 };
    else {
      return { error, status: error.response.status };
    }
  }
};
