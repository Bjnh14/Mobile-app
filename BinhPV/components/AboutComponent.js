import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-elements';

class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Card>
          <Card.Title style={styles.title}>Our History</Card.Title>
          <Card.Divider style={styles.underline} />
          <Text style={styles.content}>
            Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong. Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.
          </Text>
          <Text style={styles.content}>
            The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.
          </Text>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  underline: {
    height: 1,
    backgroundColor: 'black',
  },
  content: {
    fontSize: 16,
    marginVertical: 4,
    color: 'black',
  },
});

export default About;