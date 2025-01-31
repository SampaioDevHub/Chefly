
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ImageBackground, Dimensions, ScrollView } from "react-native";
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');


export default function WelcomeScreen() {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <ImageBackground
                    source={{ uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a396b9ce-5b84-4eb9-88c7-155e1c800019" }}
                    resizeMode={'contain'}
                    style={styles.imageBackground}
                >
                    <Text style={styles.title}>
                        {"Chefly"}
                    </Text>
                    <Text style={styles.subtitle}>
                        {"Comida saborosa para sua família"}
                    </Text>
                </ImageBackground>
                <Text style={styles.prompt}>
                    {"Pronto para servir comida saborosa?"}
                </Text>
                <Text style={styles.description}>
                    {"BeautyFood fornece um tutorial de explicação clara com as melhores práticas de culinária completas apenas para você."}
                </Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate('Welcome-inicial')}>
                        <Text style={styles.buttonText}>
                            {"Comece a cozinhar"}
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    startButton: {
        backgroundColor: "#FF6E40",
        borderRadius: 48,
        paddingVertical: 22,
        paddingHorizontal: 26,
    },
    imageBackground: {
        height: height * 0.75, // Ajuste para 45% da altura da tela
        width: width, // A largura ocupará 100% da tela
        paddingTop: 10,
        paddingBottom: 20,
        marginBottom: 25,
    },
    scrollView: {
        flex: 1,
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'space-between',  // Distribui o conteúdo para deixar o botão mais alto
        paddingVertical: 20, // Adiciona um pouco de espaçamento superior e inferior
    },
    title: {
        color: "#FF6E40",
        fontSize: 40,
        marginBottom: 10,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 76
    },
    subtitle: {
        color: "#1F1C05",
        fontSize: 16,
        textAlign: "center",
    },
    prompt: {
        color: "#1A1A1A",
        fontSize: 20,
        textAlign: "center",
        marginBottom: 22,
    },
    description: {
        color: "#808080",
        fontSize: 16,
        marginBottom: 13,
        marginHorizontal: 49,
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 16,
    },
    buttonContainer: {
        alignItems: "center",
        marginTop: 20, // Ajuste para posicionar o botão mais para cima
        marginBottom: 30, // Espaço inferior para não colar no fundo
    },
});
