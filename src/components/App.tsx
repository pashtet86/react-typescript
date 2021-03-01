import { Provider }     from 'react-redux';
import { store }        from '../state';
import RepositoriesList from './RepositoriesList';
import Home             from './Home';
import { AnimatedSwitch } from 'react-router-transition';
import 'assets/styles/App.scss';

import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
 
const App = () => {
  return (
    <Router>
      <Link to="/">Home</Link> 
      <Link to="/repos">Repos</Link>

      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper"
      >
        <Route exact path="/" component={Home} />

        <Route exact path="/repos" component={Home}>
          <Provider store={store}>
            <div>
              <h1>Search For a Package</h1> 
              <RepositoriesList />
            </div>
          </Provider>
        </Route>
      </AnimatedSwitch>
    
    </Router>
  );
};

export default App;
