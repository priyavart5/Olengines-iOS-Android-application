import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AuthStack from './Navigation/AuthStack';

const App = () => {
  return (
      <NavigationContainer >
        <AuthStack style={styles.container}/>
      </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

