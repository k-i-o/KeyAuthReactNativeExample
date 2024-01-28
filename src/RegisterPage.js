import { Image, Pressable, Text, View } from 'react-native';
import { styles } from '../styles';
import { useState } from 'react';
import CustomInput from './components/CustomInput';
import CustomButton from './components/CustomButton';
import KeyAuth from '../KeyAuth';
import BackBtn from './icons/BackBtn';

export default function RegisterPage({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [license, setLicense] = useState('');
    const [password1, setPassword1] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordError1, setPasswordError1] = useState('');
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
                        <Text style={{color: "white"}}>Register status:</Text>
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
                <CustomInput
                    placeholder={'License key'}
                    onChangeText={setLicense}
                />
                <CustomInput
                    placeholder={'Password'}
                    onChangeText={setPassword}
                    error={passwordError}
                    secureTextEntry
                />
                <CustomInput
                    placeholder={'Repeat the password'}
                    onChangeText={setPassword1}
                    error={passwordError1}
                    secureTextEntry
                />
                <CustomButton title="Register" onPress={() => register(username, email, license, password, password1, setPasswordError, setPasswordError1, setResult, setResultMessage, navigation)} />
            </View>
        </View>
    );
}

const register = async (username, email, license, password, password1, setPasswordError, setPasswordError1, setResult, setResultMessage, navigation) => {
    if (password.length < 6) { // Is an example, you can change this to your own password requirements
        setPasswordError('The password is to short');
        return;
    } else {
        setPasswordError('');
    }

    if (password !== password1) {
        setPasswordError1('The passwords do not match');
        return;
    } else {
        setPasswordError1('');
    }

    const keyAuthApp = new KeyAuth(
        "ReactNativeExample", // Application Name
        "GwyFD8gTdq", // OwnerID
        "1b7cf70afacd549f67756174eafab569e89db9929a2208440d8a27874366882c", // Application Secret
        "1.0" // Application Version
    );

    await keyAuthApp.Initialize();
      
    try {
        const result = await keyAuthApp.register(username, password, license, email);
        console.log(result);
        setResult(false);
        setResultMessage('');
        navigation.navigate('Menu', { message: result });
    } catch (error) {
        console.log("error", error);
        setResult(true);
        setResultMessage(error);
    }
    
}