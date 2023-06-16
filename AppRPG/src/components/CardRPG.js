import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function CardRPG(props){
    return(
        <View style={styles.container}>
            <View style={styles.viewImagem}>
                <Image style={styles.imagem} source={{
                    uri: props.item.urlImagem
                }}/>
            </View>
            <View style={styles.viewDados}>
                <Text style={styles.nome}>{props.item.nome}</Text>
                <Text style={styles.descricao}>{props.item.ataque}</Text>
                <Text style={styles.descricao}>{props.item.defesa}</Text>
                <TouchableOpacity style={styles.button} title="Trocar">
                    <Text style ={styles.buttonText}>Trocar</Text>
                </TouchableOpacity>

            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '95%',
        height: 180,
        backgroundColor: 'crimson',
        borderRadius: 20,
        margin: 5,
    },
    viewImagem: {
        width: '30%',
        padding: 10
    },
    viewDados: {
        width: '70%',
        padding: 10
    },
    imagem: {
        width: '100%',
        height: '100%'
    },
    nome:{
        fontSize:  25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    descricao: {
        marginBottom: 5,
        fontSize: 20
    },
    button: {
        height: 40,
        width: 120,
        backgroundColor: 'lime',
        borderWidth: 2,
        borderRadius: 10,
        alignItems :'center',
        justifyContent: 'center',
        marginTop: 20
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});