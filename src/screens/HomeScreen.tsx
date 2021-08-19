import React from 'react';
import Carousel from 'react-native-snap-carousel';
import { ActivityIndicator, Dimensions, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { HorizontalSlider } from '../components/HorizontalSlider';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {


    const { peliculasEnCines, isLoading } = useMovies();
    const { top } = useSafeAreaInsets();


    if (isLoading) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignContent: 'center'
                }}
            >
                <ActivityIndicator color="red" size={100} />
            </View>
        )
    }

    return (
        <ScrollView>
            <View
                style={{ marginTop: top + 20 }}
            >
                {/* Corousel Pricipal */}
                <View style={{ height: 440 }}>
                    <Carousel
                        data={peliculasEnCines}
                        renderItem={({ item }: any) => <MoviePoster movie={item} />}
                        sliderWidth={windowWidth}
                        itemWidth={300}
                        inactiveSlideOpacity={0.9}
                    />
                </View>

                {/* Peliculas Populares */}
                <HorizontalSlider title="En Cines" movies={peliculasEnCines}/>
            </View>
        </ScrollView>
    )
}
