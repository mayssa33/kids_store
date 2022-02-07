import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom'
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Navbar from './components/navbar/Navbar';
import ShopCollection from './pages/ShopCollection';
import OurStory from './pages/OurStory';
import Contact from './pages/Contact';
import Home from './pages/Home';



function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
    <Switch>
      <Route exact path='/signup' component={SignUp} />
      <Route exact path='/signin' component={SignIn} />
      <Route exact path="/collection" component={ShopCollection} />
      <Route exact path='/contact' component= {Contact} />
      <Route exact path='/story' component= {OurStory} />
      <Route exact path='/' component= {Home} />
    </Switch>
    </Router>

    </div>
  );
}

export default App;
