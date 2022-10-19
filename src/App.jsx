import { Header } from './components/Header';
import { AppRoutes } from './store/AppRouter'

function App() {
  return (   
    <div className="app">
    <Header />
    <AppRoutes />
    </div>
  );
}

export default App
