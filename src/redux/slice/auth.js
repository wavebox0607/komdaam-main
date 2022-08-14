import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "../../services";
import { setMessage } from "./message";
const user = JSON.parse(localStorage.getItem("user"));
export const signUp = createAsyncThunk(
  "auth/register",
  async ({ name, email, phone, password }, thunkAPI) => {
    try {
      const { data } = await authService.signUp(name, email, phone, password);
      thunkAPI.dispatch(setMessage(data.message));
      console.log(data);
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

export const verify = createAsyncThunk(
  "auth/verify",
  async ({ otp }, thunkAPI) => {
    try {
      const { data } = await authService.verify_phone(otp);

      thunkAPI.dispatch(setMessage(data.error));
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


// User Forgot Password 
export const forgot = createAsyncThunk(
  "auth/forgot",
  async ({ store_id, phone, }, thunkAPI) => {
    try {
      const response = await authService.forgot(store_id, phone,);

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

export const login = createAsyncThunk(
  "auth/login",
  async ({ phone, password }, thunkAPI) => {
    try {
      const { data } = await authService.login(phone, password);
      return data
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


export const googleLogin = createAsyncThunk(
  "auth/googleLogin",
  async ({ name, email, access_token, imageurl }, thunkAPI) => {
    try {
      const { data } = await authService.googleLogin(name, email, access_token, imageurl);
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


export const logout = createAsyncThunk("logout",
  async (thunkAPI) => {
    try {
      return await authService.logout();
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

    [googleLogin.fulfilled]: (state, action) => {
      if (action.payload.verify) {
        state.isLoggedIn = true;
        state.user = action.payload;
      } else {
        state.isLoggedIn = false;
        state.user = action.payload;

      }
    },
    [googleLogin.rejected]: (state, action) => {
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