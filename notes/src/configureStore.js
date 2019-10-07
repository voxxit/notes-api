import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from 'redux-thunk';

// import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = { 
  notes: [] 
};

export default function configureStore() {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
        thunk
    )
  );
  
  return store;
}