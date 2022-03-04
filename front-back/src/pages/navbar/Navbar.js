import {Link} from 'react-router-dom';
import './navbar.css';
import Search from './Search';
import { RiShoppingBagLine } from "react-icons/ri";
import {useSelector} from 'react-redux';
const Navbar = () => {
const {isAuth} = useSelector(state=>state.reducer)
  return (
  <div className='bodyy' >

  <div className='nav1'>
<img className='imag' src="https://media.istockphoto.com/vectors/cute-baby-face-with-curly-hair-logo-design-inspiration-vector-id1171093124?k=20&m=1171093124&s=612x612&w=0&h=JrKWyZSQPlX6rAcWLFMrJwR9J1oOBOqFCXzVgUo9VcU=" />
      <div className='div1'>
        <Link to="/" id="logo">
          Kid Store
        </Link>
      </div>
  </div>
    <div className="nav">
      <div className="links">
 <ul id="nav">
 <Search/>
        <li><Link to="/" >Acceuil</Link></li>
        <li><Link to="/autourbebe" >Autour du bébé</Link>
            <ul>
                <li><Link to="/puericulture">puériculture</Link>
                <ul>
                        <li><Link to="/poussettes">poussettes</Link></li>
                            <li><Link to="/maxi">Maxi-cosi</Link></li>
                            <li><Link to="/siegeauto">Siéges autos</Link></li>
                            <li><Link to="/parc">Parcs</Link></li>
                            <li><Link to="/Chaisehaute">Chaises hautes</Link></li>
                            <li><Link to="/babyphone" > Baby phone </Link></li>
                            <li> <Link to="/transatb" > Transat et balancelle </Link> </li>

                    </ul>
                </li>
                <li><Link to="/nourriture">nourriture</Link>
                <ul>
                        <li><Link to="/biberon">biberons</Link></li>
                            <li><Link to="/sucette">sucettes</Link></li>
                            <li><Link to="/assietcuillere">assiettes et cuilléres</Link></li>
                            <li><Link to="/allaitement">Allaitement</Link></li>

                    </ul>
                </li>
                <li><Link to="/jouet">jouets</Link>
                <ul>
                        <li><Link to="/premierage">Premier age</Link></li>
                            <li><Link to="/eveil">d'éveil</Link></li>
                            <li><Link to="/peluche">Peluches</Link></li>
                            <li><Link to="/musicale">Musicales</Link></li>

                    </ul>
                    </li>
            </ul>
            </li>
            <li><Link to="/marque" >Marques</Link>
            <ul>
                            <li><Link to="/chicco">Chicco</Link></li>
                            <li><Link to="/cam">Cam</Link></li>
                            <li><Link to="/medela">Medela</Link></li>
                            <li><Link to="/avent">Avent</Link></li>
                            <li><Link to="/lansinoh">Lansinoh</Link></li>
                            <li><Link to="/pegperego">Peg-Perégo</Link></li>
                            <li><Link to="/giordani">giordani</Link></li>
                            <li><Link to="/vtech">Vtech</Link></li>
                            <li><Link to="/reer">Reer</Link></li>
                            <li><Link to="/bebeconfort" >bébé confort</Link></li>
                            <li><Link to="/Prénatal">Prénatal</Link></li>
                            <li><Link to="/autre">Autres</Link></li>
                            </ul>
            </li>
            <li><Link to='/contact'>Contact</Link></li>
            {
              isAuth? <li><Link >Deconnecter</Link></li>
              :
            <li><Link  to="/connecter">Se connecter</Link></li>
            }
           <li> <Link to="/order" className='panier' ><RiShoppingBagLine/> </Link></li>

    </ul>
      </div>
     
    </div>
  </div>
  );
};

export default Navbar;