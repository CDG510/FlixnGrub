import React, {StyleSheet, Dimensions} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "*": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "container": {
        "paddingBottom": 20
    },
    "topImg": {
        "maxHeight": 100,
        "verticalAlign": "bottom"
    },
    "banner": {
        "maxHeight": 200
    },
    "body": {
        "backgroundColor": "black",
        "color": "white"
    },
    "h1": {
        "color": "white"
    },
    "h2": {
        "color": "white"
    },
    "h3": {
        "color": "white"
    },
    "h4": {
        "color": "white"
    },
    "h5": {
        "color": "white"
    },
    "foundImg": {
        "width": 100,
        "marginTop": 80
    },
    "yelpLogo": {
        "marginBottom": 20
    },
    "a": {
        "fontSize": 24
    },
    "movieResults": {
        "verticalAlign": "top"
    }
});