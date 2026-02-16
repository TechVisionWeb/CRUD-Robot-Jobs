 
 import logo from '../imgs/BotHub_Full_Transparent_250x250.png';
import   './header.css'

export const Header = () => {
  return (
    <header className="header">
        <img className="logo" alt="logo" src={logo}/>
        <h1>The Robot Job Board</h1>
     </header>
  );
}

export default Header;