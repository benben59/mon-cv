import "./App.css";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="cv">
      <Sidebar />
      <div className="content">
        <Header />
        <MainContent />
      </div>
    </div>
  );
}

export default App;