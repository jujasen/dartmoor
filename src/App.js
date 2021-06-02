import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import General from './pages/Home';
import Secondary from './pages/Home';
import MainNav from './components/MainNav';
import Tavistock from './pages/Tavistock';

function App() {
  return (
    <div className="App">
      <Router>
        <MainNav/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/places/tavistock' exact component={Tavistock} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
