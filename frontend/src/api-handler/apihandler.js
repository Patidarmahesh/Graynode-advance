import axios from "axios";
const servalUrl = "http://localhost:8000";

// POSTREQUEST || METHOD POST
export const PostRequest = async (endpoint, body, options) => {
  try {
    const response = await axios.post(`${servalUrl}${endpoint}`,body, {
      ...options,
    });
    if (response) {
      return response;
    } else {
      return false;
    }
  } catch (error) {
    console.log("}}}}}}}}}}}}", error.message);
  }
};
// POSTREQUEST || METHOD POST

// POSTREQUEST || METHOD POST
export const PutRequest = async (endpoint, body, options) => {
  try {
    const response = await axios.put(`${servalUrl}${endpoint}`,body, {
      ...options,
    });
    if (response) {
      return response;
    } else {
      return false;
    }
  } catch (error) {
    console.log(",,;;;;;;;;;;;;;;", error.message);
  }
};
// POSTREQUEST || METHOD POST

// POSTREQUEST || METHOD POST
export const GetRequest = async (endpoint, options) => {
  try {
    const response = await axios.get(`${servalUrl}${endpoint}`, {
      ...options,
    });
    if (response) {
      return response;
    } else {
      return false;
    }
  } catch (error) {
    console.log(",,,,,",error.message);
  }
};
// POSTREQUEST || METHOD POST