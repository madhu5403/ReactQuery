import NavBar from "./Components/NavBar";
import {useState}  from 'react'
import Planet from "./Components/Planet";
import People from "./Components/People";

function App() {
  const [Page, setPage] = useState('planets')
  return (
    <div className='App'>
      <h1>Start wars info</h1>
      <NavBar setPage={setPage} />
      <div className='Content'>
        {Page==='planet'?<Planet />:<People/>}
      </div>
    </div>
  );
}

export default App;
