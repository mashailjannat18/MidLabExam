import { View, Text, StyleSheet, FlatList } from 'react-native';
import useGet from '@/hooks/useGet';
import { Product, Index } from '@/typescript/datadisplay';

export default function DataDisplay() {
    const { data } = useGet('https://simple-grocery-store-api.online/products');

    const renderItem = ({ item, index }: { item: Product; index: Index }) => {
        return (
            <View style={[styles.itemContainer, index % 2 === 0 ? styles.leftItem : styles.rightItem]}>
                <Text style={styles.title}>{item.name}</Text>
                <Text>Category: {item.category}</Text>
                <Text>In Stock: {item.inStock ? 'Yes' : 'No'}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                numColumns={2}
                columnWrapperStyle={styles.row}
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
        flex: 1,
        padding: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        marginHorizontal: 5,
        backgroundColor: '#f9f9f9',
        alignItems: 'center',
    },
    leftItem: {
        marginBottom: 20,
    },
    rightItem: {
        marginBottom: -12,
        marginTop: 30,
    },
    row: {
        justifyContent: 'space-between',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    },
});
