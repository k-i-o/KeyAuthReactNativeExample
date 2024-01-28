import { ActivityIndicator, Animated, Pressable, Text } from "react-native";
import { styles } from "../../styles";

const animated = new Animated.Value(1);
export default CustomButton = ({ title, onPress, style, loading = false }) => {

  const fadeIn = () => {
    Animated.timing(animated, {
      toValue: 0.1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };
  const fadeOut = () => {
    Animated.timing(animated, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable style={{...styles.button, ...style}} onPressIn={fadeIn} onPressOut={fadeOut} onPress={onPress} >
      {loading ? 
        <ActivityIndicator size="large" color="#fff" /> : 
        <Animated.Text style={{...styles.text, opacity: animated}}>{title}</Animated.Text>
      }
    </Pressable>
  );
};
