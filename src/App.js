import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import General from './pages/Home';
import Secondary from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/:area' exact component={General} />
          <Route path='/:area/:section' exact component={Secondary} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
