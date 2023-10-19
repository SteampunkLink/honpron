import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <>
      <Header />
      <main className="site-container">
        <div className="main-container">
          <Outlet />
        </div>
        <div className="sidebar-container">
          <Sidebar />
        </div>
      </main>
    </>
  );
};

export default App;
