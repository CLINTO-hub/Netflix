import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Youtube from 'react-youtube'
import { imageUrl } from '../../Constants/constant'
import { API_KEY } from '../../Constants/constant'
import './RowPost.css'

function RowPost(props) {
 
  const[movies, setMoives] = useState([])
  const [urlId, setUrlId] = useState('')

  useEffect(() => {
    
  axios.get(props.url).then((response)=>{
    console.log(response.data);
    setMoives(response.data.results);
  }); 

  }, [])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  
  const handleMoive = (id)=>{
   axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=${API_KEY}`).then(response=>{
    if(response.data.results.length!==0){
      setUrlId(response.data.results[0])
    }else{

    }
   })
  }


  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
      {movies.map((obj)=>
        <img onClick={()=>handleMoive(obj.id)} className={props.isSmall ?'smallposter':'poster'} alt="poster" src={`${imageUrl+obj.backdrop_path}`}  />

      )}
      
 
     
    </div>
   {urlId && <Youtube opts={opts} videoId={urlId.key} /> }
    </div>
    
  )
}

export default RowPost
