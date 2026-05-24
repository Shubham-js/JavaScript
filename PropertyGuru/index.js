// Round 1  -> Codility test :

// Question 1: Infinite Scrolling Country List (React Native Web)
// Problem Statement

// Implement an infinitely scrolling list of country names in JavaScript using React Native Web.

// Requirements
// 1. Display Countries in a List
// Use FlatList to display countries.
// Each item should render a single country name.
// The provided styling (container, list, listItem) must not be modified.
// 2. Initial State
// Initially, the list should be empty.
// 3. Fetch Initial Data

// On component load:

// Fetch data from:

// https://example.com/countries

// Initially fetch exactly:

// 20 countries

// Use query parameters:

// limit → number of items
// offset → starting index

// Example:

// https://example.com/countries?offset=5&limit=5

// Example response:

// {
//   "results": [
//     { "name": "Brazil" },
//     { "name": "Nigeria" },
//     { "name": "Bangladesh" },
//     { "name": "Russia" },
//     { "name": "Mexico" }
//   ],
//   "count": 100
// }

// Where:

// results → current fetched countries
// count → total available countries
// 4. Infinite Scroll

// When user scrolls near the bottom:

// Fetch the next 20 items
// Append them to the list

// Fetch should trigger when approximately:

// 10% content remains
// 5. Stop Fetching

// When all countries are fetched:

// Do not call API again
// Do not show loader
// 6. Show Loader

// Use:

// ActivityIndicator

// Behavior:

// Show only while fetching
// Hide when fetch completes
// Functional Component Solution


import React, { useEffect, useState, useCallback } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  ActivityIndicator,
} from "react-native";

const LIMIT = 20;

export default function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

  const fetchCountries = useCallback(async () => {
    if (loading) return;

    if (totalCount > 0 && countries.length >= totalCount) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `https://example.com/countries?offset=${countries.length}&limit=${LIMIT}`
      );

      const data = await response.json();

      setCountries((prevCountries) => [
        ...prevCountries,
        ...data.results,
      ]);

      setTotalCount(data.count);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [countries.length, loading, totalCount]);

  useEffect(() => {
    fetchCountries();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={countries}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        onEndReached={fetchCountries}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          loading ? <ActivityIndicator size="small" /> : null
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    width: "100%",
    height: "100%",
  },
  listItem: {
    width: "100%",
    height: "40px",
    padding: "8px",
    alignItems: "flexStart",
  },
});




// Q2 : Question 2: Product List Component (React Native)
// Problem Statement

// Implement a Product List Component in React Native that:

// Displays products
// Filters products by name
// Sorts products by price
// Requirements
// 1. Component Props

// The component receives:

// products

// Each product:

// {
//   id: number,
//   name: string,
//   price: number
// }
// 2. Display Products
// Initially display products in original order
// Each product inside Text
// Each product must have:
// testID={`id-${product.id}`}

// Format:

// Product Name: {name}, Price: {price}

// Example:

// Product Name: Grey Hoodie, Price: 100

// If no products:

// No products
// 3. Add Search Input
// Filter by product name
// Case-insensitive
// Empty input → show all products
// No matches → show "No products"
// 4. Add “PRICE DESC” Button

// Requirements:

// Title:
// PRICE DESC
// testID:
// btn-desc-id

// Behavior:

// Sort by descending price
// 5. Add “PRICE ASC” Button

// Requirements:

// Title:
// PRICE ASC
// testID:
// btn-asc-id

// Behavior:

// Sort by ascending price
// 6. Disable Active Sort Button
// Clicking a button disables it
// Clicking another button enables previous one



// Solution : 

import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
} from "react-native";

//Do not modify the way the component is exported
export default function ProductList({ products = [] }) {
  const [searchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState(null);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter products
    if (searchText.trim() !== "") {
      result = result.filter((product) =>
        product.name
          .toLowerCase()
          .includes(searchText.toLowerCase())
      );
    }

    // Preserve original order when prices are same
    result = result.map((product, index) => ({
      ...product,
      originalIndex: index,
    }));

    if (sortOrder === "asc") {
      result.sort((a, b) => {
        if (a.price === b.price) {
          return a.originalIndex - b.originalIndex;
        }
        return a.price - b.price;
      });
    }

    if (sortOrder === "desc") {
      result.sort((a, b) => {
        if (a.price === b.price) {
          return a.originalIndex - b.originalIndex;
        }
        return b.price - a.price;
      });
    }

    return result;
  }, [products, searchText, sortOrder]);

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginBottom: 10,
        }}
      >
        <TextInput
          value={searchText}
          onChangeText={setSearchText}
          placeholder="Search products"
          style={{
            borderWidth: 1,
            padding: 8,
            flex: 1,
          }}
        />

        <Button
          title="PRICE DESC"
          testID="btn-desc-id"
          onPress={() => setSortOrder("desc")}
          disabled={sortOrder === "desc"}
        />

        <Button
          title="PRICE ASC"
          testID="btn-asc-id"
          onPress={() => setSortOrder("asc")}
          disabled={sortOrder === "asc"}
        />
      </View>

      {filteredProducts.length === 0 ? (
        <Text>No products</Text>
      ) : (
        filteredProducts.map((product) => (
          <Text
            key={product.id}
            testID={`id-${product.id}`}
          >
            Product Name: {product.name}, Price: {product.price}
          </Text>
        ))
      )}
    </View>
  );
}