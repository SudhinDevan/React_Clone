import './App.css'
import { Banner } from './components/Banner/Banner'
import { Navbar } from './components/Navbar/Navbar'
import { RowPoster } from './components/RowPoster/RowPoster'
import { actionMovies, netflixOriginals, comedy } from './urls'

function App() {


  return (
    <>
      <Navbar/>
      <Banner/>
      <RowPoster title="Netflix Originals" genres={netflixOriginals}/>
      <RowPoster title="Action/Adventure" smallPoster genres={actionMovies}/>
      <RowPoster title="Comedy" smallPoster genres={comedy}/>
    </>
  )
}

export default App
