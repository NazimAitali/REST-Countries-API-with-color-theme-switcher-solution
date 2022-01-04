const URL = "https://restcountries.com/v2";

export const fetchData = async (axios, setData) => {
  try {
    const Response = await axios.get(`${URL}/all`);
    return Response.status === 200
      ? setData((prevState) => ({
          ...prevState,
          all: Response.data,
          loading: false,
        }))
      : null;
  } catch (err) {
    setData((prevState) => ({ ...prevState, error: err }));
  }
};

export const alphaToName = (data, border) => {
  const alphaListe = data.all.filter(
    (elm) => elm.alpha3Code.indexOf(border) !== -1
  );
  return alphaListe;
};

export const researchCountry = (Name, data, toast, setData) => {
  let matchData = Name
    ? data.all.filter((elem) => elem.name.toLowerCase() === Name.toLowerCase())
    : [];
  try {
    return (
      !Name
        ? toast.error(`Error !! Empty field`, {
            theme: "colored",
          })
        : setData((prevState) => ({
            ...prevState,
            byCountry: matchData,
          })),
      Name
        ? matchData.length === 0
          ? toast.error(`Error !! Check your entry`, {
              theme: "colored",
            })
          : null
        : null
    );
  } catch (err) {
    setData((prevState) => ({ ...prevState, error: err }));
  }
};
export const changeStateFunc = (state, query) => {
  state(query);
};
export const prevStateFunc = (state, key, value) => {
  state((prevState) => ({
    ...prevState,
    [`${key}`]: value,
  }));
};
