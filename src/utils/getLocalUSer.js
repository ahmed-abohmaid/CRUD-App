export const getLocalUser = () => {
  const userInfo =
    localStorage.getItem("user") !== "undefind"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();

  return userInfo;
};