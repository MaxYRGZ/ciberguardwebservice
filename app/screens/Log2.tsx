import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../persistance/types';

type Log2ScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Log2'>;

function Log2(): React.JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<Log2ScreenNavigationProp>();

  const handleRegister = () => {
    navigation.navigate('Log');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Crear una cuenta</Text>
      <Image
        source={require('../../assets/Candado.png')}
        style={styles.imageStyle}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
    <TouchableOpacity style={styles.RegistrarseButtonText} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
    RegistrarseButtonText: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'rgb(46, 79, 145)',
        width: 150,
        height: 40,
        borderRadius: 10,
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  imageStyle: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
});

export default Log2;
