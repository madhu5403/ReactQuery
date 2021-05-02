import Navbar from "./Components/Navbar";
import {useState}  from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import Planets from "./Components/Planets";
import People from "./Components/People";
import {ReactQueryDevtools}  from 'react-query-devtools'

function App() {
  const queryClient = new QueryClient()
  const [page, setPage] = useState('planets')
  return (
    <>
    <QueryClientProvider client={queryClient}>
     <div className="App">
     <h1>Star Wars Info</h1>
      <Navbar setPage={setPage} />
      <div className="content">
        { page === 'planets' ? <Planets /> : <People /> }
      </div>
    </div>
    </QueryClientProvider>
    </>
  );
}

export default App;
