import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import { AppRoutes } from './routes';

export function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <AppRoutes />
      </Router>
    </>
  );
}
