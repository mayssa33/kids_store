import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter ,Switch,Route } from 'react-router-dom'
import SignUp from './pages/navbar/SignUp';
import SignIn from './pages/navbar/SignIn';
import Navbar from './pages/navbar/Navbar';
import Autourdubébé from './pages/Autourdubébé';
import Contact from './pages/Contact';
import Acceuil from './pages/Acceuil';
import Marques from './pages/Marques';
import nourriture from './pages/products/prod_components/Nourriture';
import jouets from './pages/products/prod_components/Jouet';
import Maxicosi from './pages/products/prod_components/Maxi';
import Siégesautos from './pages/products/prod_components/Siege';
import poussettes from './pages/products/prod_components/Poussette';
import Puericulture from './pages/products/prod_components/Puericulture';
import Chaiseshautes from './pages/products/prod_components/ChaiseHaute';
import Parcs from './pages/products/prod_components/Parc';
import Babyphone from './pages/products/prod_components/Babyphone';
import assiettecuillere from './pages/products/prod_components/AssietteCui';
import allaitement from './pages/products/prod_components/Allaitement';
import biberons from './pages/products/prod_components/Biberon';
import premierage from './pages/products/prod_components/Premage';
import eveil from './pages/products/prod_components/JouetEveil';
import musicale from './pages/products/prod_components/Musical';
import peluche from './pages/products/prod_components/Peluche';
import cam from './pages/products/prod_components/Cam';
import chicco from './pages/products/prod_components/Chicco';
import reer from './pages/products/prod_components/Reer';
import autres from './pages/products/prod_components/AutresM';
import pegpérego from './pages/products/prod_components/Perego';
import vtech from './pages/products/prod_components/Vtech';
import giordani from './pages/products/prod_components/Giordani';
import lansinoh from './pages/products/prod_components/Lansinoh';
import bebeconfort from './pages/products/prod_components/BebeConfort';
import medela from './pages/products/prod_components/Medela';
import Prénatal from './pages/products/prod_components/Prenatal';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from './redux/productActions';
import Card from './pages/products/Card';
// import Order from './pages/products/Order';




function App() {
  const dispatch = useDispatch();
    const {products, loading} = useSelector((state) => state.productReducer);
    console.log('products',products);
    useEffect(() => {
      dispatch(getProducts());
    }, []);  
    return (
    <div className="App">
    <BrowserRouter>
      <Navbar/>
    <Switch>
      <Route exact path='/connecter' component={SignIn} />
      <Route exact path='/login' component={SignUp} />
      <Route exact path="/autourbebe" component={Autourdubébé} />
      <Route exact path='/contact' component= {Contact} />
      <Route exact path='/story' component= {Marques} />
      <Route exact path='/' component= {Acceuil} />
      {/*allah ghaleb mayssa 3amlet 70 link*/}
      <Route exact path="/puericulture" component={Puericulture} />
      <Route exact path="/nourriture" component={nourriture} />
      <Route exact path="/jouet" component={jouets} />
      <Route exact path="/poussettes" component={poussettes} />
      <Route exact path="/maxi" component={Maxicosi} />
      <Route exact path="/siegeauto" component={Siégesautos} />
      <Route exact path="/parc" component={Parcs} />
      <Route exact path="/Chaisehaute" component={Chaiseshautes} />
      <Route exact path="/babyphone" component={Babyphone} />
      <Route exact path="/biberon" component={biberons} />
      <Route exact path="/assietcuillere" component={assiettecuillere} />
      <Route exact path="/premierage" component={premierage} />
      <Route exact path="/eveil" component={eveil} />
      <Route exact path="/peluche" component={peluche} />
      <Route exact path="/musicale" component={musicale} />
      <Route exact path="/allaitement" component={allaitement} />
      <Route exact path="/vtech" component={vtech} />
      <Route exact path="/cam" component={cam} />
      <Route exact path="/reer" component={reer} />
      <Route exact path="/chicco" component={chicco} />
      <Route exact path="/pegperego" component={pegpérego} />
      <Route exact path="/medela" component={medela} />
      <Route exact path="/lansinoh" component={lansinoh} />
      <Route exact path="/giordani" component={giordani} />
      <Route exact path="/bebeconfort" component={bebeconfort} />
      <Route exact path="/autre" component={autres} />
      <Route exact path="/Prénatal" component={Prénatal}/>
      <Route exact path="/:id" render={(props)=><Card {...props} products={products}/>} />
    {/* <Route exact path="/order" render={(props)=><Order {...props} />} /> */}
    </Switch>

    </BrowserRouter>
    </div>
  );
}

export default App;
