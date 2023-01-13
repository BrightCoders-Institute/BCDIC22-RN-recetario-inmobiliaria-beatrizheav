import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from "react";
import data from './places.json'
import placesImages from './placesImages'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { containers, texts, graphics } from './AppStyle.js'

export default function App() {
  const [like, setLike] = useState(false);

  return (
    <View style={containers.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {data.map((place) => {
          return (
            <View style={containers.cardContainer} key={place.id}>
              <View style={containers.imageContainer}>
                <Image
                  style={graphics.imgPlace}
                  source={placesImages[place.imagePath]}
                />
                <View style={containers.scoreContainer}>
                  <Ionicons name="star" size={15} color="#DFCC33" />
                  <Text style={texts.scoreText}>{place.score}</Text>
                </View>
              </View>
              <View style={containers.dataContainer}>
                <Text style={texts.textName}>{place.name}</Text>
                <View style={containers.addressContainer}>
                  <Ionicons name="ios-location-outline" size={20} color="black" />
                  <Text style={texts.addressText}>{place.address}</Text>
                </View>
                <View style={containers.infoContainer}>
                  <View style={containers.infoIndividualContainer}>
                    <Ionicons name="ios-bed-outline" size={22} style={graphics.iconsInfo} />
                    <Text style={texts.infoText} >{place.rooms}</Text>
                  </View>
                  <View style={containers.infoIndividualContainer}>
                    <MaterialCommunityIcons name="shower" size={22} style={graphics.iconsInfo} />
                    <Text style={texts.infoText}>{place.restrooms}</Text>
                  </View>
                  <View style={containers.infoIndividualContainer}>
                    <Ionicons name="resize-outline" size={22} style={graphics.iconsInfo} />
                    <Text style={texts.infoText}>{place.area} ft</Text>
                  </View>
                </View>
                <View style={containers.infoContainer}>
                  <Text style={texts.priceText}>${place.price}/m</Text>
                  <TouchableOpacity onPress={() => setLike(!like)}>
                    {like ? (
                      <MaterialCommunityIcons name="heart-circle" size={28} color="red" />
                    ) : (
                      <MaterialCommunityIcons name="heart-circle" size={28} color="green" />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
