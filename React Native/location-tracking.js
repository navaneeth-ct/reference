/*
  Installation
  ------------
  - expo install expo-location
  - expo install react-native-maps
*/

const { useEffect } = require('react');

/*
  Components from `react-native-maps`
  -----------------------------------
  - Circle, MapView (default export), Polyline
*/
<MapView {...props}>
  <Circle
    center={(latitude, longitude)}
    fillColor='rgba(0, 0, 0, 1)'
    radius='25'
    strokeColor='rgba(0, 0, 0, 1)'
  />
</MapView>;
<MapView
  initialRegion={{
    latitude: 30,
    latitudeDelta: 0.01,
    longitude: -120,
    logitudeDelta: 0.01
  }}
  region={{ latitude, latitudeDelta, longitude, longitudeDelta }}
/>;
<MapView {...props}>
  <Polyline
    coordinates={[
      { latitude: 30, longitude: -120 },
      { latitude: 40, longitude: -110 },
      { latitude: 50, longitude: -100 }
    ]}
  />
</MapView>;

/*
  Functions from `expo-location`
  ------------------------------
  - requestPermissionsAsync, watchPositionAsync
*/
requestPermissionsAsync();
watchPositionAsync({ accuracy, distanceInterval, timeInterval }, location =>
  console.log(location)
);

/*
  Tracking location in a screen
  -----------------------------
  - Run `subscriber.remove()` to stop watching position
*/
useEffect(() => {
  (async () => {
    try {
      const { granted } = await requestPermissionsAsync();
      if (!granted) throw new Error('Permission not granted');
      const subscriber = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          distanceInterval: 10,
          timeInterval: 1000
        },
        location => {
          pushLocation(location);
        }
      );
    } catch (error) {
      setError(error);
    }
  })();
}, []);

/*
  Mocking location change
  -----------------------
  - Run this temporarily for testing
*/
import * as Location from 'expo-location';
const getChangedLocation = (increment, timestamp) => ({
  coords: {
    accuracy: 5,
    altitude: 5,
    heading: 0,
    latitude: 30 + increment * 0.0001,
    longitude: -120 + increment * 0.0001,
    speed: 0
  },
  timestamp
});
let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit('Expo.locationChanged', {
    location: getChangedLocation(counter, Date.now()),
    watchId: Location._getCurrentWatchId()
  });
  counter++;
}, 1000);
