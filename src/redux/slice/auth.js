import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";
import AuthService from "../../services/auth.service";
const user = JSON.parse(localStorage.getItem("user"));


export const signUp = createAsyncThunk(
  "auth/register",
  async ({ store_id, phone, }, thunkAPI) => {
    try {
      const response = await AuthService.signUp(store_id, phone,);

      thunkAPI.dispatch(setMessage(response.data.message));
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);


// User Forgot Password 
export const forgot = createAsyncThunk(
  "auth/forgot",
  async ({ store_id, phone, }, thunkAPI) => {
    try {
      const response = await AuthService.forgot(store_id, phone,);

      thunkAPI.dispatch(setMessage(response.data.message));
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const verify = createAsyncThunk(
  "auth/verify",
  async ({ otp }, thunkAPI) => {
    try {
      const response = await AuthService.verify_phone(otp);

      thunkAPI.dispatch(setMessage(response.data.error));
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);


export const login = createAsyncThunk(
  "auth/login",
  async ({ store_id, phone, password }, thunkAPI) => {
    try {
      const data = await AuthService.login(store_id, phone, password);
      return data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const reset = createAsyncThunk(
  "auth/reset",
  async ({ user_id, password, confirm_password }, thunkAPI) => {
    try {
      const data = await AuthService.passwordReset(user_id, password, confirm_password);
      return { user: data };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);


export const logout = createAsyncThunk("auth/logout",
  async (thunkAPI) => {
    try {
      return await AuthService.logout();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

const initialState = user
  ? { isLoggedIn: true, user, success: '' }
  : { isLoggedIn: false, user: null, success: '' };
const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [signUp.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      // custom 
      state.user = action.payload

    },
    [signUp.rejected]: (state, action) => {
      state.isLoggedIn = false;
      // custom 
      state.success = ''
      state.user = null;
    },
    [login.fulfilled]: (state, action) => {
      if (action.payload.verify) {
        state.isLoggedIn = true;
        state.user = action.payload;
      } else {
        state.isLoggedIn = false;
        state.user = action.payload;
      }
    },
    [login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },

    [verify.fulfilled]: (state, action) => {
      if (action.payload.verify) {
        state.isLoggedIn = true;
        state.user = action.payload;
      } else {
        state.isLoggedIn = false;
        state.user = action.payload;

      }

    },

    [verify.rejected]: (state, action) => {
      state.success = ''
    },

    [forgot.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      // custom 
      state.success = action.payload.success
      state.user = action.payload
    },

    [forgot.rejected]: (state, action) => {
      state.isLoggedIn = false;
      // custom 
      state.success = ''
    },




    [reset.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [reset.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [logout.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
      state.success = ''
    },
  },
});
const { reducer } = authSlice;
export default reducer;