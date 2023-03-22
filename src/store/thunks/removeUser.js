import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removeUser = createAsyncThunk("users/remove", async (user) => {
  await axios.delete(`http://localhost:3007/users/${user.id}`);

  // FIX !!
  return user;
});

export { removeUser };
