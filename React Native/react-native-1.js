/*
  Initialize and run a new project
  --------------------------------
  - npx expo-cli init project
  - cd project
  - npm start
  - Click on `Run on Android device/emulator` or `Run on iOS simulator` to run on your PC
  - Install `Expo` on Android or `Expo Client` on iOS and scan the QR code to run on your mobile phone
*/

/*
  Imports
  -------
  - react-native, @expo/vector-icons, @react-native-community/async-storage
*/
import { Button, Picker } from 'react-native';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';

/*
  Components
  ----------
  - ActivityIndicator, Button, FlatList, Image, Modal, Picker, ScrollView, Text, TextInput, TouchableOpacity, View
*/
<ActivityIndicator size='large' />;
<Button onPress={handlePress} title='Submit' />;
<FlatList
  data={array}
  horizontal
  keyExtractor={item => String(item.id)}
  renderItem={({ item }) => <Text>{item.name}</Text>}
  showsHorizontalScrollIndicator={false}
/>;
<Image source={require('./assets/images/default.png')} source={{ uri }} />;
<Modal animationType='slide' onRequestClose={() => {}} transparent visile></Modal>
<Picker onValueChange={setValue} selectedValue={value}>
  <Picker.Item label='Monday' value='monday' />
</Picker>;
<ScrollView></ScrollView>;
<Text></Text>;
<TextInput
  autoCapitalize='none'
  autoCorrect={false}
  onChangeText={value => setText(value)}
  onEndEditing={handleEndEditing}
  placeholder='Text'
  secureTextEntry
  value={text}
/>;
<TouchableOpacity onPress={handlePress}></TouchableOpacity>;
<View></View>;

/*
  StyleSheet
  ----------
    - absoluteFillObject, create
*/
StyleSheet.absoluteFillObject;
StyleSheet.create(styles);

/*
  Style props
  -----------
  - flex, marginHorizontal, marginVertical, paddingHorizontal, paddingVertical
*/
const styles = {
  flex: 1,
  marginHorizontal: 10,
  marginVertical: 10,
  paddingHorizontal: 10,
  paddingVertical: 10
};

/*
  Third-party components
  ----------------------
*/
<Feather name='search' size={30} />;

/*
  AsyncStorage
  ------------
  - getItem, removeItem, setItem
*/
AsyncStorage.getItem('token');
AsyncStorage.removeItem('token');
AsyncStorage.setItem('token', token);
