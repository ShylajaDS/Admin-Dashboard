import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './reducers/store';
import Main from './Main';
import SignInForm from './components/SignInForm';
import Cart from './components/Cart';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#000000', 
    },
  },
  typography:{
    fontFamily:{
      default:'Poppins',
    }
  }
});

const App = () => {
  React.useLayoutEffect(() => {
    document.documentElement.style.overflowX = 'hidden';
    document.body.style.overflowX = 'hidden';
    return () => {
      document.documentElement.style.overflowX = 'visible';
      document.body.style.overflowX = 'visible';
    };
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/cart" element={<Cart />} />
            <Route path="/sign-in" element={<SignInForm />} />
            <Route path="/" element={<Main />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
