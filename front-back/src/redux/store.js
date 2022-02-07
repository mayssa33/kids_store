
import {applyMiddleware, compose, createStore} from "redux";
// import rootReducer from "./rootReducer";
import thunk from 'redux-thunk';
import productReducer from "./productReducer";

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()




const store = createStore(productReducer,compose(applyMiddleware(thunk),devtools))

export default store;