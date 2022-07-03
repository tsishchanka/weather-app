import { FC } from 'react';
import { Provider } from 'react-redux';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import store from 'store/configureStore';

import theme from '../../theme';

import { HOME_PAGE_ROUTE } from '../../constants/router';

import WeatherContainer from '../../containers/WeatherContainer';


const App: FC = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route
            path={HOME_PAGE_ROUTE}
            element={<WeatherContainer />}/>
        </Routes>
      </Provider>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
