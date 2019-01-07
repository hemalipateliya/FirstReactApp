import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Compenents/App';
import * as serviceWorker from './serviceWorker';

/*const showDate=()=>{

	const date=new Date();
	return date.toDateString();
}
const greeting=<h1>hello hemali !! Today's date is {showDate()}</h1>*/
ReactDOM.render(<App/>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
