import React from "react";
import { Provider } from "react-redux";
import HomePage from "../src/components/Homepage";
import appStore from "./utils/appStore";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <Provider store={appStore}>
        <HomePage />
      </Provider>
    </div>
  );
}

export default App;
