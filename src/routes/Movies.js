import { gql, useApolloClient } from "@apollo/client";
import { useEffect, useState } from "react";

const Movies=()=> {

  const client  = useApolloClient();
  const [movies,setMovies] = useState([]);

  const loadMovies = async()=>{
    const qResult = await client.query({
      query : gql`
        {
          allMovies{
            id
            title
          }
        }
      `
    });    
    setMovies([...qResult.data.allMovies])
  }
  useEffect(()=>{
    loadMovies();
  },[])
  return (
    <div>
      <ul>
      {movies.length>0 && movies.map((movie)=>{
        return (<li key={movie.id}><span>{movie.id}</span>,<span>{movie.title}</span></li>);
      }) }
      </ul>
    </div>
  );
}
  
  export default Movies;
  