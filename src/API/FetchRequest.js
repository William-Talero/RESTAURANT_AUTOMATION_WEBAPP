export const GetApiRequest = async (url, token) => {
  try {
    let config = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return await fetch(url, config);
  } catch (error) {
    console.log(error);
  }
};

export const GetApiRequestWithoutToken = async (url) => {
  try {
    let config = {
      method: "GET",
      headers: {
        Authorization: `Basic ${btoa(
          `${process.env.REACT_APP_API_USER}:${process.env.REACT_APP_API_PASSWORD}`
        )}`,
      },
    };
    return await fetch(url, config);
  } catch (error) {
    console.log(error);
  }
};

export const PostApiRequest = async (url, token, body) => {
  try {
    let config = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: body,
    };
    const peticion = await fetch(url, config);
    return peticion;
  } catch (error) {
    console.log(error);
  }
};

export const PostApiRequestFormData = async (url, token, formData) => {
  try {
    let config = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    };
    const peticion = await fetch(url, config);
    return peticion;
  } catch (error) {
    console.log(error);
  }
};

export const PostApiRequestWithoutToken = async (url) => {
  try {
    let config = {
      method: "POST",
      headers: {
        Authorization: `Basic ${btoa(
          `${process.env.REACT_APP_API_USER}:${process.env.REACT_APP_API_PASSWORD}`
        )}`,
        "Content-Type": "application/json",
      },
    };
    const peticion = await fetch(url, config);
    return peticion;
  } catch (error) {
    console.log(error);
  }
};

export const PutApiRequest = async (url, token, body) => {
  try {
    let config = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: body,
    };
    const peticion = await fetch(url, config);
    return peticion;
  } catch (error) {
    console.log(error);
  }
};

export const DeleteApiRequest = async (url, token) => {
  try {
    let config = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    const peticion = await fetch(url, config);
    return peticion;
  } catch (error) {
    console.log(error);
  }
};
