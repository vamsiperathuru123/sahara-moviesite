import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [movieinfo,setMovieinfo]=useState("RRR");
  const [title,setTitle]=useState("RRR");
  useEffect(()=>{
    ;
  },[])

  function readTitle(value){
    
    setTitle(value);
    
  }

  function getMovieData(){
    let url=`https://omdbapi.com/?t=${title}&apikey=be4662f1`;
    fetch(url)
    .then((response)=>response.json())
    .then((movie)=>{
      setMovieinfo(movie);
      console.log(movie);

      
    })
    .catch((err)=>{
      console.log(err);
    })

  }

  return (
    <div className="App">
      <div className="container">
        <div className="padd">
          <h1>Movie Search</h1>
          <div className="int-grp">
            
              <input type="text" placeholder="Enter Movie Name"  onChange={(event)=>{readTitle(event.target.value)}} className="search-field" />
            <button type='submit' className="btn" onClick={getMovieData}>Get Movie</button>
            
          </div>
          <div className="movie">
            <div className="poster">
              <img src={movieinfo?.Poster} alt="poster" className="img-poster"/>

            </div>
            <div className="details">
              <div className="padd">
                <h1>{movieinfo?.Title}</h1>
                <p><strong>Genre:</strong>{movieinfo?.Genre}</p>
                <p><strong>Director:</strong>{movieinfo?.Director}</p>
                <p><strong>Plot:</strong>{movieinfo?.Plot}</p>
                <p><strong>Actors:</strong>{movieinfo?.Actors}</p>
                <p><strong>BoxOffice:</strong>{movieinfo?.BoxOffice}</p>
                <p><strong>Language:</strong>{movieinfo?.Language}</p>
                <p><strong>Released:</strong>{movieinfo?.Released}</p>
                <p><strong>Runtime:</strong>{movieinfo?.Runtime}</p>
                <div className="ratings">
                  {
                    movieinfo?.Ratings.map((rating,index)=>(
                      <div>
                        <strong>{rating.Source}</strong>
                        <h3>{rating.Value}</h3>
                      </div>


                    ))
                  }
                  
                </div>

              </div>
              
              

            </div>

        </div>

        </div>

      </div>

    
    </div>
  );
}

export default App;
