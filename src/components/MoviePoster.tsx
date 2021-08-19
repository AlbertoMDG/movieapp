import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Image } from 'react-native';
import { Movie } from '../interfaces/movieInterface';


interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}

export const MoviePoster = ({ movie, width = 300, height = 400 }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

    return (
        <View style={{
            width,
            height,
            marginHorizontal: 7
        }}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri }}
                    style={styles.image}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18,
    },

    imageContainer: {
        borderRadius: 18,
        flex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 10,
    }

});
