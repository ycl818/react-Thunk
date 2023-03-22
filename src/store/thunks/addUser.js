import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from "@faker-js/faker";

const addUser = createAsyncThunk("user/add", async () => {
  const response = await axios.post("http://localhost:3007/users", {
    name: faker.name.fullName(),
  });

  return response.data;
});

export { addUser };
