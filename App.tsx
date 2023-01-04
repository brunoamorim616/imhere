import { Home } from "./src/views/Home";

import { StatusBar } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar
        translucent={true}
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <Home />
    </>
  );
}
