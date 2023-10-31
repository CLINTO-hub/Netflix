import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import '../src/components/Navbar/NavBar.css'
import '../src/components/Navbar/app.css'
import Banner from './components/Banner/Banner';
import '../src/components/Banner/Banner.css';
import RowPost from './components/RowPost/RowPost';
import { Action,Orginals } from './urls';






function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={Orginals}title='Netflix Orginals'/>
      <RowPost url={Action}title='Action' isSmall />
    </div>
  );
}

export default App;
