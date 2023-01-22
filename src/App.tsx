import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import CatViewer from './pages/CatViewer';
import WorkingHours from './pages/WorkingHours';
import { theme } from './theme/index';
import GlobalStyle from './theme/globalStyle';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <div className="App">
            <nav
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
              }}
            >
              <ul>
                <li>
                  <Link to="/cat-viewer">CatViewer</Link>
                </li>
                <li>
                  <Link to="/working-hour">WorkingHours</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/cat-viewer">
                <CatViewer />
              </Route>
              <Route path="/working-hour">
                <WorkingHours />
              </Route>
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
