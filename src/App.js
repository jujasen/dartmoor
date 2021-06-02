import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import MainNav from './components/MainNav';
import TavistockGeneral from './pages/tavistock/TavistockGeneral';
import TavistockHistory from './pages/tavistock/TavistockHistory';
import PostbridgeGeneral from './pages/postbridge/PostbridgeGeneral';
import PostbridgeBridge from './pages/postbridge/PostbridgeBridge';
import OkehamptonGeneral from './pages/okehampton/OkehamptonGeneral';
import OkehamptonCastle from './pages/okehampton/OkehamptonCastle';


function App() {
  return (
    <div className="App">
      <Router>
        <MainNav/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/places/tavistock/general' exact component={TavistockGeneral} />
          <Route path='/places/tavistock/history' exact component={TavistockHistory} />
          <Route path='/places/postbridge/general' exact component={PostbridgeGeneral} />
          <Route path='/places/postbridge/clapperbridge' exact component={PostbridgeBridge} />
          <Route path='/places/okehampton/general' exact component={OkehamptonGeneral} />
          <Route path='/places/okehampton/castle' exact component={OkehamptonCastle} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
