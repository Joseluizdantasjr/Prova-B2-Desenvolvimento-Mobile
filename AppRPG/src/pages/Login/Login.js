import { Link } from "@react-navigation/native";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login(){
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Faça seu login:</Text>
            <TextInput style={styles.digitacao} placeholder={"Nome de usuário"}/>
            <TextInput style={styles.digitacao} placeholder={"Senha"}/>
            <Link to={{screen: "EsqueciSenha"}}><Text>Esqueci Minha senha</Text></Link>            
            <TouchableOpacity style={styles.button}>
                <Link to={{screen: "CatalogoRPG"}}>
                    <Text style ={styles.buttonText}>Logar</Text>
                </Link>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Link to={{screen: "Cadastro"}}>
                    <Text style ={styles.buttonText}>Cadastrar</Text>
                </Link>
            </TouchableOpacity>
        </View>
        
    )
}
const styles = StyleSheet.create({
    container: {
        width: '95%',
        height: '95%',
        backgroundColor: 'crimson',
        borderRadius: 20,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center'
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
    digitacao: {
        width: 200,
        marginTop: 10,
        fontSize: 15,
        backgroundColor: 'white',
        color: 'grey',
        borderRadius: 10,
        padding: 10,
        borderWidth: 2
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    texto: {
        marginBottom: 90,
        fontSize: 40,
        fontWeight: 'bold'
    }
});