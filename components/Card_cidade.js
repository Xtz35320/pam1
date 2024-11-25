import { StyleSheet, Text, View } from 'react-native';

const CardCidade =  ({ nome, uf }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.cidade}>{nome}</Text>
            <Text> - </Text>
            <Text style={styles.uf}>{uf}</Text>

        </View>
    );
};


export default CardCidade;

const styles = StyleSheet.create({
    card: {
        width: 'auto',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#d3d3d3',
        borderStyle: "solid",
        borderWidth: 0.3,
        borderColor: '#1c1c1c',
        marginTop: 5,
        borderRadius: 10
    },
    cidade: {
        fontSize: 18,
        color: '#000000',
        fontWeight: '600'
    },
    uf: {
        fontSize: 18,
        color: '#8B0000',
        fontWeight: '900',
        marginRight: 20,
        
    }


});