/*
  Using React Native CLI
  ----------------------
  - npm i -g react-native-cli
  - react-native init project
  - cd project
  - react-native run-android
  - react-native run-ios
*/

ReactNative.AppRegistry('AppName', () => App);

ReactNative.LayoutAnimation.spring();

ReactNative.Linking.openURL(url);

const styles = StyleSheet.create({
  component: {
    elevation: 3,
    shadowColor: 'gray',
    shadowOffset: { height: 3, width: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 1
  }
});
