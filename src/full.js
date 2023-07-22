import Home from './components/HomeComponent';
import SideMenu from './components/SIdeHomeComponent';
import InfoHome from './components/InfoComponent';
import Action from './components/ActionComponent';
import ActionTwo from './components/ActionTwoComponent';
import Article from './components/ArticleComponent';
import Footer from './components/Footer';

function Full() {
  return (
    <div className="App">
      <SideMenu/>
        <Home/>
        <InfoHome/>
        <Action/>
        <Article/>
        <ActionTwo/>
        <Footer/>
    </div>
  );
}

export default Full;