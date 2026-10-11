import Header from'./components/header/header';
import Navigation from'./components/navigation/navigation';
import Profil from'./components/content/profil';
import Footer from'./components/footer/footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Navigation/>
      <Profil/>
      <Footer/>
    </div>
  );
}

export default App;
