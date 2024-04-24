/** @format */

import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../auth/operations";
import toast from "react-hot-toast";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await instance.get(`/contacts`);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const response = await instance.post(`/contacts`, contact);
      toast.success('Contact added successfully!')
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await instance.delete(`/contacts/${contactId}`);
      toast.success('Contact deleted successfully');
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
