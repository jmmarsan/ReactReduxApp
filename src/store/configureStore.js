import {createStore} from 'redux';
import rootReducer from "../reducers";


/*Create a function called configureStore */

export default function configureStore() {  

  //es como poner Redux.createStore
  return createStore(rootReducer);
}