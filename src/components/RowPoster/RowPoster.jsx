import { useEffect, useState } from 'react'
import './RowPoster.css'
import YouTube from 'react-youtube'
import axios from '../../axios'
import { imageUrl, API_KEY } from '../../Constants/Constants'


export function RowPoster({title,smallPoster,genres}){

  const[movies, setMovies] = useState([])
  const[urlId, setUrlId] = useState('')
  const[isVideo, setIsVideo] = useState(false)

  useEffect(()=>{
    axios
    .get(genres).then(response=>{
      setMovies(response.data.results)
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
  },[]);

  const opts = {
    height: '390',
    width:'100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovie =(id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response =>{
      if(response.data.results.length !== 0){
        setUrlId(response.data.results[0])
        setIsVideo(true)
      }else{
        console.log('Trailer not available');
      }
    })
  }

  return(
    <>
    <div className='row'>
      <h1 className='subtitle'>{title}</h1>
      <div className="posters">
        {movies.map((obj,index)=>
          <img onClick={()=>handleMovie(obj.id)} key={index} className={smallPoster ? 'smallPoster' : 'poster'}
          src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
        )}
        
      </div>
      {isVideo && (
        <div>
        <button className='close-button' onClick={()=>setIsVideo(false)}>Close</button>
        {urlId && <YouTube videoId={urlId.key} opts={opts}/>}
        </div>
      )}
      
    </div>

    </>
  )
}