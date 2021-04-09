const getKanyeRest = {
  getkanyeRest() {
    return fetch(`https://api.kanye.rest`, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonReponse) => {
        console.log(jsonReponse);
        return jsonReponse;
      })
      .catch((error) => console.log("error", error));
  },
};

export default getKanyeRest;
