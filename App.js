import React, {useEffect, useState} from 'react';
import { StatusBar }  from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5'); //tarea1
      const json = await response.json();//tarea 2
      setData(json);
      console.log (data);
    }catch (error) {
      console.error(error);
    }
  }

    useEffect(() => {
      getMovies();
    }, []);  
     
  return (
    <View style={styles.container}>
     
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <>
            <Text>{item.title}</Text>
            <Image source={{uri: item.url}}
       style={{width: 100, height: 100}} />
            </>
          )}
        /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
   
});