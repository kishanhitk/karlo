import { useHistory } from "react-router-dom";
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
      Home
      <button onClick={handleLogout}>LogOut</button>
    </div>
  );
}

export default Home;
