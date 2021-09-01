
import './main.css';
import CreateStore from './components/CreateStore';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StoreList from './components/StoreList';
import DisplayStore from './components/DisplayStore';

function App() {
  return (
    <div className="App">
      <h1> Shop builder</h1>
      <CreateStore />
      <DisplayStore />
    </div>
  );
}

export default App;
