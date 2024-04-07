import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-elements';

class Contact extends Component {
  render() {
    return (
        <View style={styles.container}>
            <Card>
            <Card.Title style={styles.title}>Contact Information </Card.Title>
            <Card.Divider style={styles.underline} />
                <Text style={styles.content}>
                    121, Clear Water Bay Road
                    {/* Clear Water Bay, Kowloon{'\n'}
                    HONG KONG{'\n'}
                    Tel: +852 1234 5678{'\n'}
                    Fax: +852 8765 4321{'\n'}
                    Email: confusion@food.net */}
                </Text>
                <Text style={styles.content}> Clear Water Bay, Kowloon </Text>
                <Text style={styles.content}> HONG KONG </Text>
                <Text style={styles.content}> Tel: +852 1234 5678 </Text>
                <Text style={styles.content}> Fax: +852 8765 4321 </Text>
                <Text style={styles.content}> Email: confusion@food.net </Text>
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
    padding: 10,
  },
});

export default Contact;