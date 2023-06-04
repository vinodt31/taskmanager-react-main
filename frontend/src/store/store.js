//import {configureStore} from "@reduxjs/toolkit";
import { configureStore } from '@reduxjs/toolkit'
import taskSlice from "./taskSlice";

export default configureStore({
    reducer: {
        manageTask: taskSlice,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: false
    }),  

  })
  