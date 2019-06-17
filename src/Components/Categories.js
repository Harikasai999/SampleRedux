/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

export default class Categories extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      adding: false,
      quantity: 1
    };
  }
  onAdd(item) {
    this.setState({
      adding: true
    });
  }
  onIncreaseQuantity(item) {
    var qty = parseInt(item.quantity);
    if (qty <= 20) {
      item.quantity = parseInt(item.quantity) + this.state.quantity;
      this.setState({
        quantity: 1
      });
    } else {
    }
  }

  onDecreaseQuantity(item) {
    var qty = parseInt(item.quantity);
    if (qty > 1) {
      item.quantity = parseInt(item.quantity) - this.state.quantity;
      this.setState({
        quantity: 1
      });
    } else {
    }
  }
  componentWillReceiveProps(nextProps) {
    alert(JSON.stringify(nextProps));
  }
  render() {
    const {
      item
      // onDecreaseQuantity,
      // onIncreaseQuantity,
      // onAdd,
      // adding
    } = this.props;
    return (
      <View style={styles.rowDataContainer}>
        <View style={styles.rowLeftView}>
          <View style={styles.rowLeftData}>
            <Text style={styles.rowLeftText}>N</Text>
          </View>
          <View style={styles.rowLeftData}>
            <Text style={styles.rowLeftText}>D</Text>
          </View>
        </View>
        <View style={styles.rowMiddleView}>
          <Text style={styles.rowHeaderText}>{item.itemName}</Text>
          <Text style={styles.rowDataText} numberOfLines={1}>
            {item.itemDescription}
          </Text>
          <Text style={styles.priceText}>€{item.price}</Text>
        </View>
        <View style={styles.rowRightContainer}>
          {this.state.adding ? (
            <View style={styles.quantityView}>
              <TouchableOpacity
                onPress={this.onDecreaseQuantity.bind(this, item)}
              >
                <Text style={styles.iconSize}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{item.quantity}</Text>
              <TouchableOpacity
                onPress={this.onIncreaseQuantity.bind(this, item)}
              >
                <Text style={styles.iconSize}>+</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity onPress={this.onAdd.bind(this, item)}>
              <View style={styles.addButtonStyle}>
                <Text>ADD</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rowDataContainer: { flex: 1, flexDirection: "row", marginTop: 20 },
  rowLeftView: {
    flex: 0.1,
    alignItems: "center"
  },
  rowLeftData: {
    height: 20,
    width: 18,
    borderWidth: 1,
    borderColor: "grey",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  rowLeftText: { fontSize: 14 },
  rowMiddleView: { flex: 0.6 },
  rowHeaderText: { fontSize: 16 },
  rowDataText: { marginTop: 5 },
  priceText: { marginTop: 5, color: "#e9b67c", fontSize: 16 },
  rowRightContainer: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  quantityView: {
    height: 30,
    width: 80,
    borderWidth: 1,
    borderColor: "#e9b67c",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  iconSize: { fontSize: 16, fontWeight: "600" },
  quantityText: { marginLeft: 20, marginRight: 20, fontSize: 16 },
  addButtonStyle: {
    backgroundColor: "#e9b67c",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    width: 60,
    borderRadius: 5
  }
});
