import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../persistance/types';

type Log2ScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Log2'>;

const Log2: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userExists, setUserExists] = useState(false);
  const navigation = useNavigation<Log2ScreenNavigationProp>();

  useEffect(() => {
    const db = SQLite.openDatabase(
      { name: 'ciberguard' },
      () => { console.log('Database opened'); },
      (error) => { console.error('Error opening database:', error); }
    );

    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM cuenta WHERE id = 1',
        [],
        (tx, results) => {
          if (results.rows.length > 0) {
            setUserExists(true);
          }
        },
        (error) => {
          console.error('Error executing SELECT query:', error);
        }
      );
    });
  }, []);

  const handleRegister = () => {
    const db = SQLite.openDatabase(
      { name: 'ciberguard' },
      () => { console.log('Database opened'); },
      (error) => { console.error('Error opening database:', error); }
    );

    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO cuenta (correo, contraseña) VALUES (?, ?)',
        [email, password],
        (tx, results) => {
          if (results.rowsAffected > 0) {
            Alert.alert('Success', 'Cuenta registrada exitosamente.');
            navigation.navigate('Log');
          } else {
            Alert.alert('Error', 'Hubo un problema al registrar tu cuenta.');
          }
        },
        (error) => {
          console.error('Error executing INSERT query:', error);
          Alert.alert('Error', 'Hubo un problema al registrar tu cuenta.');
        }
      );
    });
  };

  const handleBackToLog = () => {
    navigation.navigate('Log');
  };

  if (userExists) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Ya existe un usuario registrado.</Text>
        <TouchableOpacity style={styles.RegistrarseButtonText} onPress={handleBackToLog}>
          <Text style={styles.buttonText}>Regeresar</Text>
        </TouchableOpacity>
      </View>
    );
  }

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
