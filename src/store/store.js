import {createStore} from 'redux';
import {onlineStoreApp} from '../reducer/reducer';


 export const store = createStore(
     onlineStoreApp,
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
     );
 