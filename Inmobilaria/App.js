import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import data from './places.json'
import placesImages from './placesImages'

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView vertical={true} horizontal={false}>
        {data.map((place) => {
          return (
            <View style={styles.cardContainer} key={place.id}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.imgPlace}
                  source={placesImages[place.imagePath]}
                />
              </View>
              <View>
                <Text>{place.name}</Text>
                <Text>{place.address}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: '10%',
    paddingHorizontal: '5%',
    paddingBottom: '5%',
    backgroundColor: 'red',
  },
  cardContainer: {
    width: 340,
    height: 160,
    backgroundColor: 'blue',
    margin: '3%',
    borderRadius: 20,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    widht: 200,
    height: 105,
    backgroundColor: 'green',
    position: 'relative',
    marginRight: 18,
  },
  imgPlace: {
    width: 105,
    height: 105,
    borderRadius: 10,
  }
});
