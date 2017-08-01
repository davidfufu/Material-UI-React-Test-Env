import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

// FOR MATERIAL UI================================================
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
//-------------------------------------------------------------

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// FOR MATERIAL UI============================================

//FOR FONTS===================================================
import WebFont from 'webfontloader';

WebFont.load({
  google: {
	families: ['Roboto:300,500', 'sans-serif']
  }
});

//=============================================================

//COMPONENTS==================================================
import Button from './Button';
import SimpleBar from './SimpleBar';
import CardExample from './Card';
//COMPONENTS====================================================

//STYLES=======================================================
import styles from '../style.css';
//=============================================================
//////////////////////////////////////////////////////////////////////////////////////////////////

class App extends React.Component{
	render(){
		return(
			<div>
				<SimpleBar/>
				<CardExample/>
				<Button/>
			</div>
		);
	}
}

export default App