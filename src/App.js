
import './App.css';
  import{ Footer} from './components/Footer';
import { DynamicJobManager } from './components/DynamicJobManager';
import {Header }from './components/header';

function App() {
   

  return (
    <div className="app">
      <Header />
      <DynamicJobManager  />
      <Footer />
    </div>
  );
}



export default App;


 

