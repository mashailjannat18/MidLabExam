import React from 'react';
import { View, StyleSheet } from 'react-native';
import useGet from '@/hooks/useGet';
import DataDisplay from '@/components/DataDisplay';
import AppHeader from '@/components/AppHeader'

export default function Home() {
  const { data } = useGet('https://simple-grocery-store-api.online/products');

  return (
    <View style={styles.firstcontainer}>
      <View style={styles.appheader}>
        <AppHeader />
      </View>
      <View style={styles.container}>
        <DataDisplay />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  firstcontainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  appheader: {
    flex: 1,
    marginTop: 50
  },
  container: {
    flex: 1,
    padding: 10,
    marginTop: -400,
    backgroundColor: 'white',
  },
});
