import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function LaptopScreen() {
  interface Product {
    id:number,
    title:string,
    description:string,
  }
  interface Data {
    products: Product[];
  }
  let [data, setData] = useState<Data | null>(null);
  let limit = 5;
  let [skip,setSkip] = useState(0);
  let [loading,setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://dummyjson.com/products?limit=5&skip=${skip}`);
      setSkip((prev)=>prev+=limit);
      setData(prev => ({
        products: [...(prev?.products || []), ...response.data.products]
      }));
    } catch (error) {
      console.error(error);
    }
    finally {
      setLoading(false);
    }
  };
  const renderFooter = () => {
    if (!loading) return null;
    return <ActivityIndicator size="small" color="green" />;
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      <FlatList
        data={data?.products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.header}>
              <Text style={{color:"black"}}>{item.title}</Text>
            </View>
            <View style={styles.body}>
              <Text style={{color:"black"}}>{item.description}</Text>
            </View>
          </View>
        )} 
        ListFooterComponent={renderFooter}
        onEndReached={fetchData}
        onEndReachedThreshold={0.5}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  card: {
    flex:1,
    margin:30,
    backgroundColor:"rgb(255, 233, 168)",
  },
  header: {
    backgroundColor:"rgb(205, 133, 0)",
    padding:20,
  },
  body: {
    padding:20,
  }
})