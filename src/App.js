import { Provider } from "react-redux";
import AppRouters from "./AppRouters";
import estadoGlobal from "./redux/store";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID} >
      <Provider store={estadoGlobal}>
        <AppRouters></AppRouters>
      </Provider>
    </GoogleOAuthProvider>
  );
}

export default App;
