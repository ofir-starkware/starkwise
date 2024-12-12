import './App.css';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { Providers } from './providers';

const App = () => (
  <ErrorBoundary>
    <Providers />
  </ErrorBoundary>
);

export default App;
