import { useState } from "react"
import { useEffect } from "react"
import movieDB from "../api/movieDB"
import { Movie, MovieDBNowPlaying } from "../interfaces/movieInterface"


export const useMovies = () => {

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [peliculasEnCines, setPeliculasEnCines] = useState<Movie[]>([]);


    const getMovies = async() => {

        const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing')
        setPeliculasEnCines(resp.data.results);

        setIsLoading(false)

    }
    
    useEffect(() => {
        // now_playing
        getMovies();
        
    }, []);
    
    return {
        peliculasEnCines,
        isLoading
    }
}
