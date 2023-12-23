import './App.css';
import '../layout/header/header'
import Header from '../layout/header/header';
import Filtr from '../blocks/filtr/filtr';
import About from '../blocks/about/about';
import FlatsList from '../blocks/flats/flats-list';
import NewFlatsList from '../blocks/new-flats/new-flats-list.jsx';
import AgentsList from '../blocks/agents/agents-list.jsx';
import Contacts from '../blocks/contacts/contacts.jsx';
import Footer from '../layout/footer/footer.jsx';
import '../../../src/fonts/Kharkiv.ttf';

function App() {
  return (
    <div className="App">
      <Header sstyle={{zIndex:100}}/>
      <Filtr/>
      <About/>
      <FlatsList/>
      <NewFlatsList/>
      <AgentsList/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
