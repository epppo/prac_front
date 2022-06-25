import { configureStore } from "@reduxjs/toolkit";
import save from "./modules/saveList";

const store = configureStore({
  reducer: { save },
});

export default store;
