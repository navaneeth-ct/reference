/*
  Install and configure React Navigation
  --------------------------------------
  - npm i react-navigation
  - expo install react-native-gesture-handler react-native-reanimated react-native-safe-area-context react-native-screens @react-native-community/masked-view
  - npm i react-navigation-stack @react-native-community/masked-view
  - npm i react-navigation-tabs
  - expo r -c
*/

/*
  Imports
  -------
  - react-navigation, react-navigation-stack, react-navigation-tabs
*/
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

/*
  Functions
  ---------
  - createAppContainer, createSwitchNavigator, withNavigation, withNavigationFocus
*/
createAppContainer(navigator);
withNavigation(CustomComponent);
withNavigationFocus(CustomComponent);

/*
  Navigators
  ----------
  - createBottomTabNavigation, createStackNavigator
*/
createBottomTabNavigator({ Account: AccountScreen, Home: HomeScreen });
createStackNavigator(
  { Home: HomeScreen },
  { defaultNavigationOptions: { title: 'Home' }, initialRouteName: 'Home' }
);
createSwitchNavigator({ Home: HomeFlow, Account: AccountFlow });

/*
  Navigation prop methods
  -----------------------
  - addListener, getParam, navigate, pop
*/
navigation.addListener('didFocus', callback);
navigation.getParam('key');
navigation.navigate('Home', params);
navigation.pop();

/*
  Components
  -----------------
  - NavigationEvents, SafeAreaView
*/
<NavigationEvents
  onDidBlur={handleDidBlur}
  onDidFocus={handleDidFocus}
  onWillBlur={handleWillBlur}
  onWillFocus={handleWillFocus}
/>;
<SafeAreaView forceInset={{ top: 'always' }}></SafeAreaView>;

/*
  Navigation options
  ------------------
  - Can be an object or a function that takes in `navigation` and returns an object
  - header, headerRight
*/
HomeScreen.navigationOptions = ({ navigate }) => ({
  header: () => null,
  headerRight: () => <Button onPress={() => navigate('Home')} title='Home' />,
  tabBarIcon: <FontAwesome name='plus' size={21} />
});

/*
  Working with listeners
  ----------------------
  - Always remove listeners when the component unmounts to prevent memory leaks
*/
useEffect(() => {
  const listener = navigation.addListener('didFocus', () => indexPosts());
  return listener.remove();
}, []);

/*
  Using navigation in non-components
  ----------------------------------
  - Create a navigation service using a ref inside the `App` component
  - Create wrapper functions which dispatches navigation actions
*/
import { NavigationActions } from 'react-navigation';
let _navigator;
const NavigationService = {
  navigate(routeName, params) {
    _navigator.dispatch(NavigationActions.navigate({ routeName, params }));
  },
  setTopLevelNavigator(navigator) {
    _navigator = navigator;
  }
};
export default NavigationService;
