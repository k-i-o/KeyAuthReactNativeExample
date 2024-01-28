import { Pressable, Text } from "react-native";
import { styles } from "../../styles";

export default CustomButton = ({ title, onPress, style }) => {
  return (
    <Pressable style={{...styles.button, ...style}} onPress={onPress} >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};
