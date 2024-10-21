import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import useGet from '@/hooks/useGet';
import DataDisplay from '@/components/DataDisplay';

export default function Home() {
  const { data } = useGet('https://simple-grocery-store-api.online/products');

  return (
    <View style={styles.container}>
      <DataDisplay />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
});
