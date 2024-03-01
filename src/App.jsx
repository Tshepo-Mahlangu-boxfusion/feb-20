import './App.css';
import Grocery from './components/Grocery.jsx';
import { AuthProvider } from './providers/authProvider/index.jsx';
import {ThemeProvider} from './providers/themeProvider/themeProvider.jsx';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ThemeProvider>
          <Grocery />
        </ThemeProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
