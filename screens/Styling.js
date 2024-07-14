import React from "react";
import { StyleSheet, useWindowDimensions} from 'react-native';



export const Styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    
    
  },

  h1: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 47,
    elevation: 5,

  },

  h2: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 34,
    elevation: 5,

  },

  h3: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    elevation: 5,

  },

  moneyText: {
    backgroundColor: "#E9E08F",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 50,
    paddingRight: 50,
    marginTop: 15,
    borderRadius: 15,
  },

  rowList: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: "row",
  },

  listText: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",

  },

  linkButtons: {
    backgroundColor: "white",
    elevation: 10,
    borderRadius: 10,
    width: 180,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 15,
  },

  linkText: {
    fontFamily: "InterExtraBold",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
  },

  shadow: {
    shadowColor: "black",
    shadowOffset: { height: 2},
    shadowOpacity: 0.3,
  },

  aboutTouchables: {
    justifyContent: "center", 
    alignItems: "center", 
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 15,
    paddingBottom: 15,
    marginTop: 10,
    marginBottom: 15,
    borderRadius: 20,
    backgroundColor: "white",
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
  }

});




