import { Header } from './components/Header';
import { AppRoutes } from './store/AppRouter'
import { body, globalStyles } from './styles/Theme'

function App() {
  globalStyles();

  return (   
    <div className={body()}>
    <Header />
    <AppRoutes />
    </div>
  );
}

export default App
