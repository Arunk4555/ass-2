import logo from './logo.svg';
import './App.css';
import RecipeList from './component/RecipeList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Recipe </h1>
      </header>
      <RecipeList />
    </div>
  );
}

export default App;
