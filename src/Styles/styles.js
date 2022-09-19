import React from 'react';

import {StyleSheet} from 'react-native';

  const styles = StyleSheet.create(
    {
      container: {
        flex: 1,
        paddingTop: 20
      },

      topHeaderStyle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 30
      },

      activityIndicator: {
        size: "small",
        color: 'White'
      },

      item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        color: 'white'
      },

      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },

      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },

      tinyLogo: {
        width: '100%',
        height: undefined,
        aspectRatio: 1
      },

      img: {
        backgroundColor: '#ccc',
        width: '100%',
        height: 350,
        justifyContent: 'flex-end',
        padding: 0
      },

        titleStyle: {
        color: 'White',
        fontSize: 15,
        fontWeight: 'bold',
        alignSelf:'center',
        marginVertical: 20
      },

      itemContainer: {
        width: '100%',
        backgroundColor: '#707F0A',
        padding: 10,
        marginHorizontal: 16,
      },

      itemStyle: {
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf:'center',
        marginVertical: 20
      },

      sectionListStyle: {
        scrollEnabled: false,
        width: '100%'
      },

      section: {
        width: '100%',
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 25,
        color: 'white',
        padding: 10,
        marginVertical: 10,
        backgroundColor: "White",
        shadowColor: 'grey',
        shadowRadius: 3,
        shadowOpacity: 0.3

      },

      row: {
        marginHorizontal: 15,
        flexDirection: "row",
        paddingVertical: 2,

      },

      rowText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
      }
    }
  )

export default styles;
