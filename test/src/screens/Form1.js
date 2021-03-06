import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {TextInput} from 'components';
import Colors from './../constants/Colors';
const Form1 = (props) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={{height: '75%'}}>
        <View style={{marginHorizontal: 50}}>
          <View style={styles.Header}>
            <View style={{width: 80, marginTop: 20}}>
              <Image
                style={styles.Numbers}
                source={require('./../assets/Images/Group4015.png')}
              />
            </View>
            <Text style={styles.text}>
              TE QUEREMOS{' '}
              <Text style={styles.TextRed(Colors.primary)}>{'\n'}CONOCER</Text>
            </Text>
          </View>
        </View>
        <View style={{marginHorizontal: 20, marginTop: 15}}>
          <Text style={styles.TextDescription}>
            Queremos saber que eres tu , por favor ingresa los siguientes datos:
          </Text>
          <View style={{marginVertical: 30}}>
            <Text style={styles.TextDescription}>Nombres (s)</Text>
            <TextInput
              value={props.firstname}
              onChangeText={(text) => props.onChangeFirstName(text)}
            />
            <Text style={styles.TextDescription}>Apellidos</Text>
            <TextInput
              value={props.lastname}
              onChangeText={(text) => props.onChangeLastName(text)}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  Numbers: {
    width: 40,
    height: 40,
  },
  TextRed: (color) => ({
    color: color,
  }),
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    backgroundColor: 'transparent',
  },
  TextDescription: {
    color: 'white',
    fontSize: 20,

    textAlign: 'left',
    backgroundColor: 'transparent',
  },
});
export default Form1;
