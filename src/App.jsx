import { Header } from './components/Header';
import { AppRoutes } from './store/AppRouter'
import { body } from './styles/Theme'

function App() {
  return (   
    <div className={body()}>
    <Header />
    <AppRoutes />
    </div>
  );
}

export default App
