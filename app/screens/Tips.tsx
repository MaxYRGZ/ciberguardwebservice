import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface Consejos {
  id: number;
  consejo: string;
}

const Tips: React.FC = () => {
  const [consejos, setConsejos] = useState<Consejos[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetch('http://localhost:3000/consejos')
      .then(response => response.json())
      .then(data => {
        setConsejos(data);
        console.log('Consejos fetched:', data);
      })
      .catch(error => {
        console.error('Error fetching consejos:', error);
      });
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {consejos.map((item) => (
        <View key={item.id} style={styles.consejoContainer}>
          <Text style={styles.consejoText}>{item.consejo}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  consejoContainer: {
    backgroundColor: 'rgb(46, 79, 145)',
    borderRadius: 8,
    padding: 15,
    marginVertical: 10,
    width: '100%',
  },
  consejoText: {
    fontSize: 20,
    color: 'white',
  },
  Titulo: {
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold', 
  },
});

export default Tips;
