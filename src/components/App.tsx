import React from 'react';
import LoginPage from 'pages/LoginPage';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import { Provider } from 'react-redux';
import { store } from 'state';
import RepositoriesList from './RepositoriesList';
import Home from './Home';
import PrivateRoute from './PrivateRoute';

const App = () => (
  <Router>
    <Link to="/">Home</Link>
    <Link to="/repos">Repos</Link>
    <Link to="/login">Login</Link>

    <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
      className="switch-wrapper"
    >
      <Route exact path="/" component={Home} />
      <Route exact path="/login/:id?">
        <Provider store={store}>
          <LoginPage />
        </Provider>
      </Route>

      <PrivateRoute isAuth={false} redirectPath="/login" path="/repos">
        <Provider store={store}>
          <RepositoriesList />
        </Provider>
      </PrivateRoute>

    </AnimatedSwitch>

  </Router>
);

export default App;
