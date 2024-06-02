import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../persistance/types';

type LogScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Log'>;

const Log: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showFingerprint, setShowFingerprint] = useState(false);
  const navigation = useNavigation<LogScreenNavigationProp>();

  const handleLogin = () => {
    const db = SQLite.openDatabase(
      { name: 'ciberguard' },
      () => { console.log('Database opened'); },
      (error) => { console.error('Error opening database:', error); }
    );

    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM cuenta WHERE correo = ? AND contraseña = ?',
        [email, password],
        (tx, results) => {
          if (results.rows.length > 0) {
            navigation.navigate('Home');
          } else {
            Alert.alert('Error', 'Correo o contraseña incorrectos.');
          }
        },
        (error) => {
          console.error('Error executing SELECT query:', error);
          Alert.alert('Error', 'Hubo un problema al verificar tu cuenta.');
        }
      );
    });
  };

  const handleFingerprint = () => {
    setShowFingerprint(!showFingerprint);
  };

  const handleFingerprintLogin = () => {
    navigation.navigate('Home');
  };

  const handleRegister = () => {
    navigation.navigate('Log2');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ingresar tu usuario</Text>
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
      <TouchableOpacity style={styles.IniciarButtonText} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar sesion</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.fingerprintButton} onPress={handleFingerprint}>
        <Text style={styles.fingerprintButtonText}>Ingresar con Huella</Text>
      </TouchableOpacity>
      {showFingerprint && (
        <TouchableOpacity onPress={handleFingerprintLogin}>
          <Image
            source={require('../../assets/Huella.png')}
            style={styles.fingerprintImage}
          />
        </TouchableOpacity>
      )}
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Registrarte</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  IniciarButtonText: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(46, 79, 145)',
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
  fingerprintButton: {
    marginTop: 16,
    marginBottom: 16,
  },
  fingerprintButtonText: {
    color: 'rgb(46, 79, 145)',
    fontSize: 16,
  },
  fingerprintImage: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  registerButton: {
    position: 'absolute',
    bottom: 16,
    width: '100%',
    alignItems: 'center',
  },
  registerButtonText: {
    color: 'darkgray',
    fontSize: 16,
  },
});

export default Log;
