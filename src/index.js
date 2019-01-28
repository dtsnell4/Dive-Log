import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
// import ReduxToastr from 'react-redux-toastr';
import configureStore from './store';
import 'bootstrap/dist/css/bootstrap.css';
import './style/App.scss';
import Main from './components/main';
// import * as serviceWorker from './serviceWorker';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<div>
			<Main />
			{/*<ReduxToastr
		        timeOut={4000}
		        newestOnTop={false}
		        preventDuplicates
		        transitionIn="fadeIn"
		        transitionOut="fadeOut"
		    />*/}
		</div>
	</Provider>,
	document.getElementById('root')
);

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// // serviceWorker.unregister();
