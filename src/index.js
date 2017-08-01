import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

// FOR MATERIAL UI================================================
// import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
// injectTapEventPlugin();
//-------------------------------------------------------------

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// ==============================================================

//FOR FONTS===================================================
// import WebFont from 'webfontloader';

// WebFont.load({
//   google: {
// 	families: ['Roboto:300,500', 'sans-serif']
//   }
// });

//=============================================================

//COMPONENTS==================================================
import App from './components/App';
//============================================================

//STYLES=======================================================
// import styles from './style.css';
//=============================================================
//////////////////////////////////////////////////////////////////////////////////////////////////

ReactDOM.render(
	<AppContainer>
		<MuiThemeProvider>
			<App/>
		</MuiThemeProvider>
	</AppContainer>,
	document.getElementById('root')
)



if (module.hot) {
	module.hot.accept('./components/App', () => { render(App) })
}
