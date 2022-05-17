const URL = "https://jsonplaceholder.typicode.com/posts";

const checkStatusResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(`Error: ${res.status}`);
  }
  return res.json();
};

export const getPosts = async (limit = 10) => {
  return await fetch(`${URL}?_limit=${limit}`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkStatusResponse);
};

export const getComments = async (id) => {
  return await fetch(`${URL}/${id}/comments`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkStatusResponse);
};
