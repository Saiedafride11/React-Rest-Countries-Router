import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/NoMatch/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import Country from './components/Country/Country';
import CountryDetails from './components/CountryDetails/CountryDetails';

function App() {
  
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path="/home">
                  <Home/>
                </Route>
                <Route path="/country">
                  <Country/>
                </Route>
                <Route path="/name/:CountryName">
                  <CountryDetails/>
                </Route>
                <Route exact path="/">
                  <Home/>
                </Route>
                <Route path="*">
                  <NoMatch/>
                </Route>
            </Switch>
        </Router>

  
    </div>
  );
}

export default App;
