/** @format */

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
});

const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  instance.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const response = await instance.post("/auth/signup", credentials);
      setToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await instance.post("/auth/login", credentials);
      setToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      const response = await instance.post("/auth/logout");
      clearToken();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });

  export const refreshUser = createAsyncThunk(
    "auth/refresh",
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const token = state.auth.token;
    try {
        const response = await instance.post("/auth/refresh", null, {
        });
        setToken(token);
        return response.data;
    } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
    }
},
    {
        condition: (_, thunkAPI) => {
            const state = thunkAPI.getState();
            const token = state.auth.token;
            if(!token) return false;
            return true;
        }
    }

  )
