import "./App.css";
import { MusicPlayer } from "./layout/MusicPlayer";
import { SideNav } from "./layout/SideNav";

function App() {
  return (
    <div className="App">
      <SideNav></SideNav>
      <MusicPlayer></MusicPlayer>
    </div>
  );
}

export default App;
