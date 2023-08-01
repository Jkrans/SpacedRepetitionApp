import './App.css';
import './index.css';
import Header from './Components/Header'
import Button from './Components/Button'
import TextInput from './Components/TextInput'
import DeckList from './Components/DeckList';

function App() {
  return (
    <div className="Container">
      <Header />
      <DeckList />
    </div>
  );
}

export default App;
