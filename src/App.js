import { Provider } from "react-redux";
import AppRouters from "./AppRouters";
import estadoGlobal from "./redux/store/store";

function App() {

  return (
    <Provider store={estadoGlobal}>
      <AppRouters></AppRouters>
    </Provider>
  );
}

export default App;
