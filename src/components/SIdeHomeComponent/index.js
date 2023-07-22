 
import { ReactComponent as Logo } from 'C:/Users/marke/my-bosi/my-first-react-application/src/components/SIdeHomeComponent/logo.svg';

export default function SideMenu(){
  return (
    <header>
    <nav>
      <div className="logo">
        <Logo />
      </div>
      <ul className="menu">
        <li className='nav_text'>Біз жәйлі</li>
        <li className='nav_text'>Контактілер</li>
        <li className='nav_text'>Іздеу</li>
      </ul>
    </nav>
    </header>
  );
};
