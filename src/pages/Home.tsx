import { useHistory } from "react-router-dom";
import Navbar from "../components/Navbar";
import { auth } from "../firebase/config";

function Home() {
  const history = useHistory();
  const handleLogout = () => {
    auth.signOut().then(() => {
      history.replace("/");
    });
  };
  return (
    <div>
      <Navbar></Navbar>
      <button onClick={handleLogout}>LogOut</button>
      <div style={{ height: "100vh", backgroundColor: "red", width: "100%" }}>
        a
      </div>
    </div>
  );
}

export default Home;
