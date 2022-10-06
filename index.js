import { AppRegistry, Platform } from "react-native";
import { registerRootComponent } from "expo";
import App from "./App";
import { name as Olengines } from "./app.json";


if (Platform.OS == "iOS" || Platform.OS == "Android") {
  registerRootComponent(App);
} else {
  AppRegistry.registerComponent(Olengines, () => 
    <App />
  );
}