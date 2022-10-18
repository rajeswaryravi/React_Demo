import logo from './logo.svg';
import './App.css';

import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ContentComponent from './components/ContentComponent';


function App() {
    return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <ContentComponent content="Content Header" item="Items Header"></ContentComponent>
     <FooterComponent copyright="Copyright Dialog"></FooterComponent>
    </div>
  );
}

export default App;
