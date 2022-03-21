import './App.css';
import PostContact from './components/PostContacts';
const url = "http://www.raydelto.org/agenda.php"


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <PostContact url={url}/>
      </header>
    </div>
  );
}

export default App;
