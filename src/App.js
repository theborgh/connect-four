import './App.css';
import Footer from './components/Footer/Footer';
import MainContent from './components/MainContent/MainContent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Connect Four</h1>
      </header>
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
