import { toast } from "react-toastify";

export const fetchUserByEmail = async (mail) => {
  try {
    const res = await fetch(
      `https://crud-server-e63r.onrender.com/users?q=${mail}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    toast("Error has occurred, please try again")
  }
};
