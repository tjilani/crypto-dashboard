import "./App.css";
import Welcome from "./Welcome";
import AppLayout from "./AppLayout";
import AppBar from "./AppBar";
import AppProvider from "./AppProvider";

function App() {
  return (
    <AppLayout>
      <AppProvider>
        <AppBar />
        <Welcome />
      </AppProvider>
    </AppLayout>
  );
}

export default App;
