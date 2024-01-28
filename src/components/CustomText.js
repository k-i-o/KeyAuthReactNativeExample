import { Text } from "react-native";
import { styles } from "../../styles";

export default CustomText = ({ title, style }) => {
  return (
    <>
        <Text style={style}>{title}</Text>
    </>
  );
};
