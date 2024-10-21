import { View, Text, StyleSheet, FlatList } from 'react-native';
import useGet from '@/hooks/useGet';

export default function DataDisplay() {
    const { data } = useGet('https://simple-grocery-store-api.online/products');
  
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.title}>{item.name}</Text>
              <Text>Category: {item.category}</Text>
              <Text>In Stock: {item.inStock ? 'Yes' : 'No'}</Text>
            </View>
          )}
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: '#fff',
    },
    itemContainer: {
      padding: 20,
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },
    title: {
      fontWeight: 'bold',
      fontSize: 18,
    },
  });
  