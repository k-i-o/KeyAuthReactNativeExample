import { Image, Pressable, Text, View } from 'react-native';
import { styles } from '../styles';
import { useState } from 'react';
import CustomInput from './components/CustomInput';
import CustomButton from './components/CustomButton';
import KeyAuth from '../KeyAuth';
import BackBtn from './icons/BackBtn';

export default function UpgradePage({ navigation }) {
    const [username, setUsername] = useState('');
    const [license, setLicense] = useState('');
    const [result, setResult] = useState(false);
    const [resultMessage, setResultMessage] = useState('');    
    const [loading, setLoading] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 85}} onPress={() => navigation.goBack()}>
                    <BackBtn/>
                </Pressable>
                {result && (
                    <View style={styles.wrapperSnack}>
                        <Text style={{color: "white"}}>Upgrade status:</Text>
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
                    placeholder={'License key'}
                    onChangeText={setLicense}
                />
                <CustomButton title="Upgrade" onPress={() => upgrade(username, license, setLoading, setResult, setResultMessage, navigation)} />
            </View>
        </View>
    );
}

const upgrade = async (username, license, setLoading, setResult, setResultMessage, navigation) => {

    const keyAuthApp = new KeyAuth(
        "ReactNativeExample", // Application Name
        "GwyFD8gTdq", // OwnerID
        "1b7cf70afacd549f67756174eafab569e89db9929a2208440d8a27874366882c", // Application Secret
        "1.0" // Application Version
    );

    await keyAuthApp.Initialize();
    
    setLoading(true);

    try {
        const result = await keyAuthApp.upgrade(username, license);
        console.log(result);
        setResult(false);
        setResultMessage('');
        navigation.navigate('Menu', { message: result });
    } catch (error) {
        console.log("error", error);
        setResult(true);
        setResultMessage(error);
    }
    setLoading(false);

}