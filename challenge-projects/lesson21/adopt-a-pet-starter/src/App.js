import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Navigation from './components/navigation';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Route path="/:type"><Navigation /></Route>
      <HomePage />
    </Router>
  );
}

export default App;
