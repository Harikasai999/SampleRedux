/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList
} from "react-native";
import Categories from "../Components/Categories";
var { height, width } = Dimensions.get("window");
type Props = {};
var itemsArray = [
  {
    id: "_dhfpo37734",
    itemName: "Guac de la Costa",
    itemDescription: "tortillas de mais, fruit de la passion, mango",
    price: 7,
    quantity: 1
  },
  {
    id: "_pyugg69953",
    itemName: "Chicharron y Cerveza",
    itemDescription: "citron vert / Corona sauce",
    price: 5,
    quantity: 1
  },
  {
    id: "_lkfhb29383",
    itemName: "Vhilitoscan Can",
    itemDescription: "padrones tempura, gambas",
    price: 3,
    quantity: 1
  },
  {
    id: "_tytrv09387",
    itemName: "Chilli Con Carne",
    itemDescription:
      "Indulge in a steamy bowl of this spicy Mexican stew, rich with the goodness of beans",
    price: 10,
    quantity: 1
  },
  {
    id: "_bfhfg092345",
    itemName: "Guilt-Free Chilli",
    itemDescription:
      "A lip-smacking blend of kidney beans, chillies, cheese, tomatoes and chicken to go with baked bread or nachos",
    price: 9,
    quantity: 1
  },
  {
    id: "_advdv69348",
    itemName: "Do-It-Yourself Tacos",
    itemDescription:
      "taco shells with some kidney beans, scraped cheddar and hot jalapenos",
    price: 2,
    quantity: 1
  }
];
var uri =
  "https://firebasestorage.googleapis.com/v0/b/react-native-e.appspot.com/o/f18c2d27ce297526d53da71a2386d229f4b1bed4.png?alt=media&token=cf79a3a7-ce7c-4307-a874-27be6f3f1dc1";
export default class MainCategory extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      items: itemsArray,
      quantity: 1,
      adding: ""
    };
  }

  _keyExtractor = (item, index) => item.id;
  _renderItem = ({ item, index }) => {
    return (
      <Categories
        item={item}
        // adding={this.state.adding}
        // onDecreaseQuantity={this.onDecreaseQuantity.bind(this, item)}
        // onIncreaseQuantity={this.onIncreaseQuantity.bind(this, item)}
        // onAdd={this.onAdd.bind(this, item)}
      />
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 0.9 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <Image
                source={{ uri: uri }}
                style={{ height: width / 1.5, width: width }}
              />
            </View>
            <View style={styles.overlayStyle}>
              <Text style={styles.headerText}>Inka Restaurant</Text>
              <View style={[styles.subView, { marginTop: 20 }]}>
                <Image
                  source={require("../Images/star.png")}
                  style={styles.iconStyle}
                />
                <Text style={styles.subText}>
                  5.0(200+) | All days 09:00 AM - 06:00 PM
                </Text>
              </View>
              <View style={styles.subView}>
                <Image
                  source={require("../Images/phone.png")}
                  style={styles.iconStyle}
                />
                <Text style={[styles.subText, { marginLeft: 5 }]}>
                  Reach us at: 9874563214
                </Text>
              </View>
              <TouchableOpacity style={styles.bookTableButton}>
                <Text style={styles.bookText}>BOOK A TABLE</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.subContainer}>Starter</Text>
            <FlatList
              style={{ marginLeft: 15, marginBottom: 25 }}
              data={this.state.items}
              extraData={this.state}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
            />
          </ScrollView>
          <View style={styles.menuButtonContainer}>
            <TouchableOpacity style={styles.menuButtonStyle}>
              <Image
                source={require("../Images/dinner.png")}
                style={styles.menuIcon}
              />
              <Text style={styles.menuText}>MENU</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomView}>
          <Text style={styles.bottomText}>VIEW CART (5 ITEMS)</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  overlayStyle: {
    position: "absolute",
    height: width / 1.87,

    width: width / 1.1029,
    top: width / 1.87,
    // left: 15,
    backgroundColor: "white",
    alignSelf: "center",
    shadowColor: "black",
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 5,
    borderRadius: 5
    // borderBottomWidth: 0

    //"#506d80ab",
  },
  buttonView: {
    top: 200,
    alignItems: "center",
    justifyContent: "flex-end",
    overflow: "hidden"
    // marginTop: 20
  },
  cardStyle: {
    marginTop: 50,
    height: 300,
    width: width / 1.07,
    borderRadius: 5,
    backgroundColor: "pink",
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    shadowOpacity: 0.3
  },
  buttonTextColor: {
    color: "black",
    fontSize: width / 18.7,
    textAlign: "center",
    marginTop: 10
  },
  headerView: { marginTop: 10, alignItems: "center" },
  menuButtonContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    alignItems: "flex-end",
    justifyContent: "flex-end"
  },
  menuButtonStyle: {
    backgroundColor: "#e9b67c",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 35,
    width: 100,
    borderRadius: 5,
    marginBottom: 10
  },
  menuIcon: {
    height: 20,
    width: 20
  },
  menuText: {
    marginLeft: 5,
    fontWeight: "600"
  },
  headerText: {
    marginTop: width / 18.7,
    textAlign: "center",
    color: "black",
    fontSize: width / 18.7
  },
  subView: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: width / 37.5
  },
  iconStyle: { height: 15, width: 15 },
  subText: { color: "grey", marginLeft: 3 },
  bookTableButton: {
    marginTop: 20,
    backgroundColor: "black",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10
  },
  bookText: { color: "white", padding: 10 },
  subContainer: {
    marginTop: 180,
    marginLeft: 15,
    color: "black",
    fontWeight: "400",
    fontSize: 20
  },
  bottomView: {
    flex: 0.1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black"
  },
  bottomText: { color: "white" }
});
