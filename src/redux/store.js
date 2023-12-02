import { configureStore } from '@reduxjs/toolkit';
import { carsSliceReducer } from './reducer';

export const store = configureStore({
  reducer: {
    cars: carsSliceReducer,
  },
});




// import { configureStore } from '@reduxjs/toolkit';
// import { carsSliceReducer } from './reducer';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'cars',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, carsSliceReducer);

// export const store = configureStore({
//   reducer: {
//     cars: persistedReducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });
// export const persistor = persistStore(store);
