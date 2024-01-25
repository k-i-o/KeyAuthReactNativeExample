import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ClientApi } from "@keyauthjs/client";

export default function App() {
  // const clientApi = new ClientApi(
  //   {
  //     name: "ReactNativeExample", // Application Name
  //     ownerid: "GwyFD8gTdq", // Application OwnerID
  //     ver: "1.0", // Application Version
  //   }
  // );

  // let sessionsID: string;
  // const init = await clientApi.init();
  // if (init.success) {
  //   sessionsID = init.sessionid!;
  //   console.log("Init successfull: ", init);
  // }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
