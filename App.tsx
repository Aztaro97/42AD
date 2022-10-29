import AppContainer from "./components/container";
import AuthRoutes from "./routes/auth.routes";

import "react-native-gesture-handler";
import "react-native-reanimated";

export default function App() {
  return (
    <AppContainer>
      <AuthRoutes />
    </AppContainer>
  );
}
