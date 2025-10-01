import CustomTitleBar from "./components/Toolbar";
import MenuBar from "./components/CodeEditor";

export default function App() {
  return (
     <div className="app-container">
      <CustomTitleBar />
      <MenuBar />
      <div className="main-content">
        <h1>Welcome to Your Custom IDE!</h1>
        {/* All your other components and content go here */}
      </div>
    </div>
  );
}
