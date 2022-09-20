import React, {useState, useEffect} from 'react';


import {SafeAreaView, View, FlatList, Text, TouchableOpacity, ActivityIndicator, Modal} from 'react-native';
import styles from '../Styles/styles';

import axios from 'axios';

import {useDispatch} from 'react-redux';
import {GET_DISNEY_CHAR_REDUCERS} from '../Constants/constants';


const ShowDisneyChatList = (props) => {
    const URL = 'https://api.disneyapi.dev/characters'
    const [fetchResponse, setResponse] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const {navigate} = props.navigation;
    const dispatch = useDispatch();

    {/*Componenet Did load*/}
    useEffect ( () => {
      console.log('useEffect called')
      setModalVisible(true);
      fetchDisneyCharList()
    }, []);

    {/*Navigation*/}
    goToNextScreen = (props) => {

      {/*pass data through Navigation
        navigate('DisneyCharDetails', props)*/}
      return navigate('DisneyCharDetails')
    }

    {/*Async Await with Axios*/}
    const fetchDisneyCharList = async() => {

      try {
          setModalVisible(true);
          let response = await axios.get(URL);


          setResponse(response.data.data);
          setModalVisible(false);
      }
      catch(error) {
          console.log('Error ===> ', error);
          setModalVisible(false);
      }
    }

    {/*Update UI*/}
    return (
        <SafeAreaView style = {{flex:1, backgroundColor: 'black'}}>

          <View>

          {/*Header title*/}
          <Text style = {styles.topHeaderStyle}> Disney Characters </Text>

          {/*Flat List*/}
            <FlatList
            style = {{backgroundColor: 'black'}}
            data={fetchResponse}
            renderItem={({item}) =>
              <TouchableOpacity
                onPress = {() =>
                  {
                      {/*1. Pass data through Redux*/}
                      const action = {
                          type: GET_DISNEY_CHAR_REDUCERS,
                          payload: item
                        }
                      dispatch(action);

                      {/*2. Pass data through Navigation
                        this.goToNextScreen(item);*/}

                        this.goToNextScreen();

                  }
              }>
                <Text style = {styles.item}> {item.name}</Text>
              </TouchableOpacity>
          }
          keyExtractor={(item) => item["_id"]}
          />

          {/*Activity Indicator*/}
          <Modal
          style = {{backgroundColor: 'black'}}
          animationType="fade"
          transparent={true}
          visible={modalVisible}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <ActivityIndicator style = {styles.activityIndicator}  />
                <Text style={styles.titleStyle}>Please wait...</Text>
              </View>
            </View>
          </Modal>

        </View>
      </SafeAreaView>
  )
}

export default ShowDisneyChatList;



    //1. Api Call With Fetch and Then
    {/*// const fetchDisneyCharList = () => {

      //Fetch does not parse data automatically to JSON, but axios does
      fetch(URL).then( (response) => response.json())
        .then((jsonResponse) =>
        {
          setResponse(jsonResponse["data"]);
          console.log('got response');
          setModalVisible(false);
        })
        .catch((error) =>
        {
          console.log('Error =====>', error);
          console.log('failed response');
          setModalVisible(false);
        });

    */}

    //2. API call with Async await
    {
      /*
      const fetchDisneyCharList = async() => {

        try {
            setModalVisible(true);
            let response = await fetch(URL);
            let jsonResponse = await response.json();
            setResponse(jsonResponse.data);
            setModalVisible(false);
        }
        catch(error) {
            console.log('Error ===> ', error);
            setModalVisible(false);
        }
      }
      */
    }
