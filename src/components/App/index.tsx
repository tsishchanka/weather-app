import {FC} from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import { HOME_PAGE_ROUTE } from '../../constants/router';
import WeatherContainer from '../../containers/WeatherContainer';
import theme from '../../theme';


const App: FC = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route
          path={HOME_PAGE_ROUTE}
          element={<WeatherContainer />}/>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
