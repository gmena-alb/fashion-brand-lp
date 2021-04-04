import logo from './logo.svg';
import './css/style.css';
import Header from './components/Header';
import Fashion from './components/Fashion';
import History from './components/History';
import Dressmakers from './components/Dressmakers';
import Footer from './components/Footer';

function App() {
  return (
    <main>
      <Header />
      <Fashion />
      <History />
      <Dressmakers />
      <Footer />
    </main>
  );
}

export default App;
