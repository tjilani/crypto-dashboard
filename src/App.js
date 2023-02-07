import "./App.css";
import Welcome from "./Welcome";
import AppLayout from "./AppLayout";
import AppBar from "./AppBar";

function App() {
  return (
    <AppLayout>
      <AppBar />
      <Welcome />
    </AppLayout>
  );
}

export default App;
