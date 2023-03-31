export const getDataFromLocalStorage = () => {
  const jaksimList = localStorage.getItem("JAKSIM");

  return JSON.parse(jaksimList);
};
