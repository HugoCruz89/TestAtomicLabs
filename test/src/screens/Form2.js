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
const Form2 = (props) => {
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
                source={require('./../assets/Images/Group4023.png')}
              />
            </View>
            <View style={{width: '70%'}}>
              <Text style={styles.text}>
                VALIDA TU
                <Text style={styles.TextRed(Colors.primary)}>
                  {'\n'}CELULAR
                </Text>
              </Text>
            </View>
          </View>
        </View>
        <View style={{marginHorizontal: 20, marginTop: 15}}>
          <Text style={styles.TextDescription}>
            Necesitamos validar tu número para continuar
          </Text>
          <Text style={styles.TextDescription}>
            Ingresa tu número a 10 dígitos y te enviaremos un codigo SMS.
          </Text>
          <View style={{marginVertical: 20}}>
            <Text style={styles.TextDescription}>Numero de celular</Text>
            <TextInput
              keyboardType="number-pad"
              value={props.cellphone}
              onChangeText={(text) => props.onChangeCellphone(text)}
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
    marginBottom: 15,

    textAlign: 'left',
    backgroundColor: 'transparent',
  },
});
export default Form2;
