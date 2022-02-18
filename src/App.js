
import './App.css';
import HeaderComponent from './header/Header';
import AboutMeComponent from './about-me/AboutMe'
import SkillsClass from './skills/SkillClass';
import PortfolioClass from './portfolio/PortfolioClass';
import FooterClass from './footer/FooterClass';

function App() {
  return (
    <div >
      <HeaderComponent/>
      <AboutMeComponent/>
      <SkillsClass/>
      <PortfolioClass/>
      <FooterClass/>
    </div>
  );
}

export default App;
