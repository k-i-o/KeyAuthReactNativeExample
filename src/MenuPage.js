import { Image, Text, View } from 'react-native';
import { styles } from '../styles';
import CustomButton from './components/CustomButton';

export default function MenuPage({ navigation, route }) {
    
  return (
    <View style={styles.container}>
        {route && route.params && route.params.message && (
            <View style={styles.header}>
                <View style={{...styles.wrapperSnack, width: "100%"}}>
                    <Text style={{color: "white"}}>Status:</Text>
                    <Text style={{color: "white"}}>{route.params.message}</Text>
                </View>
            </View>
        )}
        <View style={styles.wrapper}>
            <Image source={require("../assets/KeyauthBanner.png")} style={{width: "100%", height: 60}} />
            <View style={styles.buttonsContainer}>
                <CustomButton title="Login" onPress={() => navigation.navigate('Login')} />
                <CustomButton title="Register" onPress={() => navigation.navigate('Register')} />
                <CustomButton title="Upgrade" onPress={() => navigation.navigate('Upgrade')} />
                <CustomButton title="License key only" onPress={() => navigation.navigate('License')} />
                <CustomButton title="Forgot password" onPress={() => navigation.navigate('Forgot')} />
            </View>
        </View>
    </View>
  );
}
