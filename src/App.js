import './App.css';
import './sass/index.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navi from './components/Navi';
import AppFooter from './components/Footer';
import Landing from './components/Landing';
import Slider from './components/Slider';

function App() {

  return (
    // The react router makes the transition from page to page more seamless
    <Router>
    <div className="App">
      <Navi />
      <div className="content">
        <Switch>
        <Route exact path="/">
      <Landing />
      </Route>
      <Route exact path="/cars">
      <Slider />
      </Route>
      </Switch>
      <AppFooter />
    </div>
    </div>
    </Router>
  );
}

export default App;
