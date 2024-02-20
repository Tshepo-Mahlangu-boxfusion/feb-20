import './App.css';
import Grocery from './Grocery';
import {ThemeProvider} from './providers/provider.jsx';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Grocery />
      </ThemeProvider>
    </div>
  );
}

export default App;
