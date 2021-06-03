import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import MainNav from './components/MainNav';
import TavistockGeneral from './pages/tavistock/TavistockGeneral';
import TavistockHistory from './pages/tavistock/TavistockHistory';
import PostbridgeGeneral from './pages/postbridge/PostbridgeGeneral';
import PostbridgeBridge from './pages/postbridge/PostbridgeBridge';
import OkehamptonGeneral from './pages/okehampton/OkehamptonGeneral';
import OkehamptonCastle from './pages/okehampton/OkehamptonCastle';
import WidecombeGeneral from './pages/widecombe/WidecombeGeneral';
import WidecombeFair from './pages/widecombe/WidecombeFair';
import BuckfastleighGeneral from './pages/buckfastleigh/BuckfastleighGeneral';
import BuckfastleighAbbey from './pages/buckfastleigh/BuckfastleighAbbey';
import InfoGeneral from './pages/infocentres/InfoGeneral';
import InfoTourist from './pages/infocentres/InfoTourist';
import InfoCommunity from './pages/infocentres/InfoCommunity';

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
          <Route path='/places/widecombe/general' exact component={WidecombeGeneral} />
          <Route path='/places/widecombe/fair' exact component={WidecombeFair} />
          <Route path='/places/buckfastleigh/general' exact component={BuckfastleighGeneral} />
          <Route path='/places/buckfastleigh/abbey' exact component={BuckfastleighAbbey} />
          <Route path='/info/general' exact component={InfoGeneral} />
          <Route path='/info/tourist' exact component={InfoTourist} />
          <Route path='/info/community' exact component={InfoCommunity} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
