import { FC } from 'react';
import { Provider } from 'react-redux';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { ThemeProvider } from 'styled-components';

import { HOME_PAGE_ROUTE } from 'constants/router';

import store from 'store/configureStore';
import WeatherContainer from 'containers/WeatherContainer';
import theme from 'theme';



const persistor = persistStore(store);

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <Routes>
            <Route
              path={HOME_PAGE_ROUTE}
              element={<WeatherContainer />}/>
          </Routes>
        </Provider>
      </PersistGate>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
