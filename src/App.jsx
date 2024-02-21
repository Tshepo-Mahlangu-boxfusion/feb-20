import './App.css';
import Grocery from './Grocery';
import { AuthProvider } from './providers/authProvider/AuthProvider.jsx';
import {ThemeProvider} from './providers/provider.jsx';

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
