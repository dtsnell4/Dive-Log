import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
// import ReduxToastr from 'react-redux-toastr';
import configureStore from './store';
import 'bootstrap/dist/css/bootstrap.css';
import './style/App.scss';
import Main from './components/main';

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
