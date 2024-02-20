import "./App.css";
import Navbar from "./components/Navbar";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'


library.add(fas)
function App() {
  return (
    <>
      <Navbar></Navbar>
    </>
  );
}

export default App;
