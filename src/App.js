import React from 'react';
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const mcmTheme = getMuiTheme({
  palette: {
    primary1Color: '#154500',
    primary2Color: '#7B1FA2',
    primary3Color: '#B66CF8',
    accent1Color: '#4CAF50',
    accent2Color: '#8BC34A',
    textColor: '#ffef00',
    alternateTextColor: '#fff',
    secondaryTextColor: '#757575',
    canvasColor: '#154500',
    disabledColor: '#F3E8D2',
    borderColor: '#BDBDBD',
  },
});


const App = props => (
  <MuiThemeProvider muiTheme={getMuiTheme(mcmTheme)}>
    <div className="App">
      <Header />
        {props.children}
      <Footer />
    </div>
  </MuiThemeProvider>
);

App.propTypes = {
  children: React.PropTypes.node,
};
export default App;
