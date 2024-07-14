import React from "react";
import { StyleSheet, useWindowDimensions} from 'react-native';



export const Styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',  
  },

  h1: {
    fontFamily: "InterExtraBold",
    fontSize: 50,
    marginBottom: 10,
  },

  rowContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  yellowContainer: {
    backgroundColor: "#E7C366",
    borderRadius: 20,
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 5,
    paddingBottom: 5,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
  },

  violetContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#C79FEF",
    borderRadius: 20,
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 15,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
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
  },

  aboutLinks: {
    marginLeft: 10,
    fontFamily: "InterExtraBold",
    fontSize: 17,
  }

});




