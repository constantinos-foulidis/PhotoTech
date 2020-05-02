import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { navigatorReducer } from './store/reducers/navigator';
import  loginAuthReducer  from './store/reducers/loginAuth';
import  loginAuthPhotografersReducer  from './store/reducers/LoginPhotografersReducer/loginPhotografersReducer';
import  loginGrafeiouAuthReducer  from './store/reducers/LoginGrafeioReducer/loginGrafeio';
import  userReducer from './store/reducers/userReducer';
import productsReducer from './store/reducers/products';
import photografersReducer from './store/reducers/Grafeio/photografers';
import 'bootstrap/dist/css/bootstrap.min.css';
import sellerReducer from './store/reducers/Grafeio/sallers';

const rootReducer = combineReducers({
    navigator: navigatorReducer,
    login: loginAuthReducer,
    loginGrafeiou:loginGrafeiouAuthReducer,
    user:userReducer,
    sellers:sellerReducer,
    products: productsReducer,
    photografers:photografersReducer,
    loginPhotografers:loginAuthPhotografersReducer,
});
const store = createStore(rootReducer,applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
