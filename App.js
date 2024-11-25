import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import * as obj_DDD from './services/ddd.js';
import CardCidade from './components/Card_cidade.js';
import { FlashList } from "@shopify/flash-list";
import React, { useEffect, useState } from 'react';

export default function App() {
  const [ddd, setDDD] = useState('');
  const [uf, setUf] = useState('');
  const [cities, setCities] = useState([]);
  const [emfoco, setemfoco] = useState(false);

  useEffect(() => {
    if (ddd.length === 2) {
      obj_DDD.buscarDDDCallBack(ddd, dados => {
        console.log(dados);
        setUf(dados.state);
        setCities(dados.cities);
      });
    }
  }, [ddd]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pesquisa por DDD</Text>

      <TextInput
        style={[styles.Input, { borderColor: emfoco ? '#00BFAE' : '#D0D0D0' }]}
        placeholder='Digite o DDD'
        keyboardType='numeric'
        maxLength={2}
        value={ddd}
        onChangeText={text => setDDD(text.replace(/[^0-9]/g, ''))}
        onFocus={() => setemfoco(true)}
        onBlur={() => setemfoco(false)}
      />

      {cities.length > 0 && (
        <View style={styles.citiesListContainer}>
          <FlashList
            data={cities}
            renderItem={({ item, index }) => (
              <CardCidade
                nome={item}
                uf={uf}
                key={index}
              />
            )}
            estimatedItemSize={200}
          />
        </View>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C0C0C0',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
    marginBottom: 20,
  },
  Input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 18,
    backgroundColor: '#dcdcdc',
    color: '#000000',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  citiesListContainer: {
    flex: 1,
    width: '90%',
    paddingBottom: 30,
  },
});
