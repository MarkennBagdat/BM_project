 
import { ReactComponent as Logo } from 'C:/Users/marke/my-bosi/my-first-react-application/BM_project/src/components/SIdeHomeComponent/logo.svg';

export default function SideMenu(){
  return (
    <header>
    <nav>
      <div className="logo">
      <a href='./user'>
        <Logo />
        </a>
      </div>
      <ul className="menu">
        <li className='nav_text'><a src=''>Біз жәйлі</a></li>
        <li className='nav_text'>Контактілер</li>
        <li className='nav_text'>Іздеу</li>
        <a href='/login' className='but'>Кіру</a>
      </ul>
    </nav>
    </header>
  );
};
