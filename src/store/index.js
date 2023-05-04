import { configureStore, MiddlewareArray } from "@reduxjs/toolkit";
import { courseApi } from "../Features/ApiSlice";
import  userSlice  from "./slices/UserSlice";

// const Mystore = configureStore({
//     reducer:{
//         users: userSlice,
//         // [courseApi.reducerPath] : courseApi.reducer
//     },

// });


//  export default Mystore;

const store = configureStore({
    reducer: {
        [courseApi.reducerPath] : courseApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(courseApi.middleware),
    
})
 export default store;