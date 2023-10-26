import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import PodcastPlatforms from "./components/PodcastPlatforms";
import Sidebar from "./components/Sidebar";
import SocialMedia from "./components/SocialMedia";

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
          <SocialMedia />
          <PodcastPlatforms />
        </div>
      </main>
    </>
  );
};

export default App;
