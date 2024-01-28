import { Image, Pressable, Text, View } from 'react-native';
import { styles } from '../styles';
import { useState } from 'react';
import CustomInput from './components/CustomInput';
import CustomButton from './components/CustomButton';
import KeyAuth from '../KeyAuth';
import BackBtn from './icons/BackBtn';

export default function LoginPage({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(false);
    const [resultMessage, setResultMessage] = useState('');    

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable style={styles.back} onPress={() => navigation.goBack()}>
                    <BackBtn/>
                </Pressable>
                {result && (
                    <View style={styles.wrapperSnack}>
                        <Text style={{color: "white"}}>Login status:</Text>
                        <Text style={{color: "white"}}>{resultMessage}</Text>
                    </View>
                )}
            </View>
            <View style={styles.wrapper}>
                <Image source={require("../assets/KeyauthBanner.png")} style={styles.image} />
                <CustomInput
                    placeholder={'Username'}
                    onChangeText={setUsername}
                />
                <CustomInput
                    placeholder={'Password'}
                    onChangeText={setPassword}
                    error={passwordError}
                    secureTextEntry
                />
                <CustomButton title="Login" onPress={() => login(username, password, setPasswordError, setLoading, setResult, setResultMessage, navigation)} loading={loading} />
            </View>
        </View>
    );
}

const login = async (username, password, setPasswordError, setLoading, setResult, setResultMessage, navigation) => {
    if (password.length < 6) { // Is an example, you can change this to your own password requirements
        setPasswordError('The password is to short');
        return;
    } else {
        setPasswordError('');
    }

    const keyAuthApp = new KeyAuth(
        "ReactNativeExample", // Application Name
        "GwyFD8gTdq", // OwnerID
        "1b7cf70afacd549f67756174eafab569e89db9929a2208440d8a27874366882c", // Application Secret
        "1.0" // Application Version
    );

    await keyAuthApp.Initialize();

    setLoading(true);
    try {
        const result = await keyAuthApp.login(username, password);
        console.log(result);
        setResult(false);
        setResultMessage('');
        navigation.navigate('Menu', { message: result.message });
    } catch (error) {
        console.log("error", error);
        setResult(true);
        setResultMessage(error);
    }
    setLoading(false);

}