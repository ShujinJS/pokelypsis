import './App.css';

// Routing
import Router from './route/route';
// Components
import NavBar from './components/navbar/navbar.component';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router/>
      <Footer/>
    </div>
  );
}

export default App;
