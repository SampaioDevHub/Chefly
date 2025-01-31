import { useNavigation } from "@react-navigation/native";
import {  Text, SafeAreaView, ScrollView, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function WelcomePage() {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Image
                    source={{ uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0d65bc9e-a13d-437a-90c3-b94a28d5408c" }}
                    resizeMode={"stretch"}
                    style={styles.image}
                />
                <Text style={styles.text}>
                    {"Crie uma conta"}
                </Text>
                <Text style={styles.text2}>
                    {"Ganhe 3 aulas de culinária grátis todos os dias!"}
                </Text>
                <TouchableOpacity style={styles.buttonRow} onPress={() => alert('Apple!')}>
                    <Image
                        source={{ uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/32610e03-3d7f-4654-bcb5-e0c83a4d579b" }}
                        resizeMode={"stretch"}
                        style={styles.image2}
                    />
                    <Text style={styles.text3}>
                        {"Continuar com a Apple"}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonRow2} onPress={() => alert('Google!')}>
                    <Image
                        source={{ uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a9162955-4962-43ab-9377-9712806e522b" }}
                        resizeMode={"stretch"}
                        style={styles.image2}
                    />
                    <Text style={styles.text4}>
                        {"Continuar com o Google"}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonRow3} onPress={() => navigation.navigate('SignUp')}>
                    <Image
                        source={{ uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4ee34a16-dcf8-4c76-9e58-d6101e0b36af" }}
                        resizeMode={"stretch"}
                        style={styles.image2}
                    />
                    <Text style={styles.text3}>
                        {"Continuar com e-mail"}
                    </Text>
                </TouchableOpacity>
                <Text style={styles.text5}>
                    {"Já tem uma conta? Entrar"}
                </Text>
                
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    box: {
        width: 134,
        height: 5,
        backgroundColor: "#000000",
        borderRadius: 100,
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1A1A1A",
        borderRadius: 48,
        paddingVertical: 21,
        marginBottom: 12,
        marginHorizontal: 24,
    },
    buttonRow2: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F0F4F8",
        borderRadius: 48,
        paddingVertical: 21,
        marginBottom: 12,
        marginHorizontal: 24,
    },
    buttonRow3: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FF6E40",
        borderRadius: 48,
        paddingVertical: 21,
        marginBottom: 45,
        marginHorizontal: 24,
    },
    image: {
        height: 353,
        marginBottom: 46,
    },
    image2: {
        width: 16,
        height: 15,
        marginRight: 7,
    },
    scrollView: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        borderRadius: 30,
    },
    text: {
        color: "#1A1A1A",
        fontSize: 24,
        textAlign: "center",
        marginBottom: 16,
    },
    text2: {
        color: "#808080",
        fontSize: 14,
        textAlign: "center",
        marginBottom: 35,
    },
    text3: {
        color: "#FFFFFF",
        fontSize: 16,
    },
    text4: {
        color: "#1A1A1A",
        fontSize: 16,
    },
    text5: {
        fontSize: 16,
        textAlign: "center",
        marginBottom: 57,
    },
    view: {
        alignItems: "center",
    },
});