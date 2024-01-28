import { Image, Pressable, Text, View } from 'react-native';
import { styles } from '../styles';
import { useState } from 'react';
import CustomInput from './components/CustomInput';
import CustomButton from './components/CustomButton';
import KeyAuth from '../KeyAuth';
import BackBtn from './icons/BackBtn';

export default function ForgotPage({ navigation }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [result, setResult] = useState(false);
    const [resultMessage, setResultMessage] = useState('');    

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 85}} onPress={() => navigation.goBack()}>
                    <BackBtn/>
                </Pressable>
                {result && (
                    <View style={styles.wrapperSnack}>
                        <Text style={{color: "white"}}>Restore status:</Text>
                        <Text style={{color: "white"}}>{resultMessage}</Text>
                    </View>
                )}
            </View>
            <View style={styles.wrapper}>
                <Image source={require("../assets/KeyauthBanner.png")} style={{width: "100%", height: 60}} />
                <CustomInput
                    placeholder={'Username'}
                    onChangeText={setUsername}
                />
                <CustomInput
                    placeholder={'Email'}
                    onChangeText={setEmail}
                />
                <CustomButton title="Restore" onPress={() => restore(username, email, setResult, setResultMessage, navigation)} />
            </View>
        </View>
    );
}

const restore = async (username, email, setResult, setResultMessage, navigation) => {

    const keyAuthApp = new KeyAuth(
        "ReactNativeExample", // Application Name
        "GwyFD8gTdq", // OwnerID
        "1b7cf70afacd549f67756174eafab569e89db9929a2208440d8a27874366882c", // Application Secret
        "1.0" // Application Version
    );

    await keyAuthApp.Initialize();
      
    try {
        const result = await keyAuthApp.forgot(username, email);
        console.log(result);
        setResult(false);
        setResultMessage('');
        navigation.navigate('Menu', { message: result.message });
    } catch (error) {
        console.log("error", error);
        setResult(true);
        setResultMessage(error);
    }
    

}