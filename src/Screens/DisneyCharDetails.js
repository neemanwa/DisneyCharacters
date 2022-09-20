import React, {useState, useEffect} from 'react';
import * as RN from 'react-native';
import {SafeAreaView, View, Text, Image, ScrollView, SectionList, TouchableOpacity} from 'react-native';
import styles from '../Styles/styles';
import {useDispatch, useSelector} from 'react-redux';

const ShowDetails = (props) =>{

    {/*1. Fecth the data through Navigation
      const paramss = props.route.params; */}

    {/*2. Fecth the data through Redux*/}
    const params = useSelector((store) => store.disneyCharacters);
    const [getData, setData] = useState([]);

    {/*Componenet Did load*/}
    useEffect( () => {
      prepareData();
    }, []);

    {/*Preparing data to load inside section list*/}
    const prepareData = () => {
       const DATA = [
        {
          title : "films (" + params.films.length + ")",
          data: params.films
        },
        {
          title : "shortFilms (" + params.shortFilms.length + ")",
          data: params.shortFilms
        },
        {
          title : "tvShows (" + params.tvShows.length + ")",
          data: params.tvShows
        },
        {
          title : "videoGames (" + params.videoGames.length + ")",
          data: params.videoGames
        },
        {
          title : "parkAttractions (" + params.parkAttractions.length + ")",
          data: params.parkAttractions
        },
        {
          title : "allies (" + params.allies.length + ")",
          data: params.allies
        },
        {
          title : "enemies (" + params.enemies.length + ")",
          data: params.enemies
        }
      ]
      setData(DATA);
    }

    {/*Top image header view*/}
      const TopImageHeader = () => {
        return (
                <Image
                  source={{ uri: params.imageUrl, priority: 'high' }}
                  style={styles.img}
                  resizeMode="cover"  />

        );
      }

    {/*UI*/}
    return(
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'flex-start', backgroundColor: 'black'}}>
                <SectionList

                    style = {styles.sectionListStyle}
                    sections={getData}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => (
                      <View style={styles.row}>
                        <Text style={styles.rowText}>{item}</Text>
                      </View>
                    )}

                    renderSectionHeader={({ section: { title } }) => (
                      <Text style={styles.section}>{title}</Text>
                    )}

                    ListHeaderComponent={TopImageHeader}

                  />
            </View>
    )
}

export default ShowDetails;
