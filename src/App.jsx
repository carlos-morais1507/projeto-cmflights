import { Header } from './components/Header';
import { AppRoutes } from './store/AppRouter'
import { globalStyles } from './styles/Theme'

function App() {
  globalStyles();

  return (   
    <div >
    <Header />
    <AppRoutes />
    </div>
  );
}

export default App
