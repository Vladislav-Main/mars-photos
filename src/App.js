import './App.scss';
import { useRoutes } from './routes/routes';

function App() {
  const routes = useRoutes();
  return <div className="wrapper">{routes}</div>;
}

export default App;
