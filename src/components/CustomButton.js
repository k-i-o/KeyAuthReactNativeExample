import { ActivityIndicator, Pressable, Text } from "react-native";
import { styles } from "../../styles";

export default CustomButton = ({ title, onPress, style, loading = false }) => {
  return (
    <Pressable style={{...styles.button, ...style}} onPress={onPress} >
      {loading ? 
        <ActivityIndicator size="large" color="#fff"/> : <Text style={styles.text}>{title}</Text>
      }
    </Pressable>
  );
};
