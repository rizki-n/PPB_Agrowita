import React from 'react';
import { View, StyleSheet, Text, Image, FlatList } from 'react-native';

const Kuliner = () => {
  const dataFasilitas = [
    { id: '1', image: require('../../assets/fasilitas1.png'), description: 'Makanan1' },
    { id: '2', image: require('../../assets/fasilitas2.png'), description: 'Makanan2' },
    { id: '3', image: require('../../assets/fasilitas3.png'), description: 'Makanan3' },
    { id: '4', image: require('../../assets/fasilitas4.png'), description: 'Makanan Item 4' }
  ];

  const renderImageItem = ({ item }) => {
    return (
      <View style={styles.imageContainer}>
        <Image source={item.image} style={[styles.image]} />
        {/*<Text style={styles.imageDescription}>{item.description}</Text>*/}
      </View>
    );
  };

  return (
    <View style={{ paddingVertical: 30 }}>
      <Text style={styles.heading}>Fasilitas</Text>
      
      {['Makanan', 'Minuman'].map((category) => (
        <View key={category}>
          <FlatList
            horizontal
            data={dataFasilitas.filter((item) => item.description.includes(category))}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={true}
            renderItem={renderImageItem}
            contentContainerStyle={styles.flatListContainer}
          />
        </View>
      ))}

      {/* <FlatList
        data={dataFasilitas}
        renderItem={({ item }) => (

        )}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    marginTop: 20,
  },
  heading: {
    fontSize: 20,
    color: 'green',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoryTitle: {
    fontSize: 12,
    fontStyle: 'italic',
    marginBottom: 10,
  },
  flatListContainer: {
    marginTop: 1,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginRight: 20,
  },
  image: {
    borderRadius: 20,
    width: 300,
    height: 200,
  },
  imageDescription: {
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bottomText: {
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Kuliner;