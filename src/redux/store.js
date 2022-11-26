import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import userSlice from "./users/userSlice";
import userMenuSlice from "./userMenu/userSlice";
import cartSlice from "./cart/cartSlice";
import infoSlice from "./Info/infoSlice";
import deliverySlice from "./delivery/deliverySlice";
import selfDeliverySlice from "./selfDelivery/selfDeliverySlice";

const userPersistConfig = {
  key: "user",
  storage,
  whitelist: ["accessToken", "refreshToken"],
};

const userMenuPersistConfig = {
  key: "menu",
  storage,
  whitelist: ["product"],
};
const itemsCartPersistConfig = {
  key: "cart",
  storage,
  whitelist: ["itemsInCart", "itemsQuntity"],
};
const infoPersistConfig = {
  key: "info",
  storage,
  whitelist: ["currentInfo"],
};
const deliveryPersistConfig = {
  key: "delivery",
  storage,
};
const selfDeliveryPersistConfig = {
  key: "selfDelivery",
  storage,
};

const userPersistedReducer = persistReducer(userPersistConfig, userSlice);
const userMenuPersistedReducer = persistReducer(
  userMenuPersistConfig,
  userMenuSlice
);

const itemsCartPersistedReducer = persistReducer(
  itemsCartPersistConfig,
  cartSlice
);
const infoPersistedReducer = persistReducer(infoPersistConfig, infoSlice);
const deliveryPersistedReducer = persistReducer(
  deliveryPersistConfig,
  deliverySlice
);
const selfDeliveryPersistedReducer = persistReducer(
  selfDeliveryPersistConfig,
  selfDeliverySlice
);

// const rootPersistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["theme", "lang"],
// };

// const rootReducer = combineReducers({
//   theme: themeReducer,
// });

// const rootPersistedReducer = persistReducer(rootPersistConfig, rootReducer);

const store = configureStore({
  reducer: {
    user: userPersistedReducer,
    userMenu: userMenuPersistedReducer,
    cart: itemsCartPersistedReducer,
    info: infoPersistedReducer,
    delivery: deliveryPersistedReducer,
    selfDelivery: selfDeliveryPersistedReducer,

    //  answers: answersPersistedReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  //   devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);

export default store;
