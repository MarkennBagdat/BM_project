import MainPage from "./mainpage/NavigationBar";
import NavRail from "./mainpage/NavigationRail";

function Users() {
  return (
    <div className="App d-flex mx-5">
      <NavRail/>
      <div className="vertical_divider"></div>
      <MainPage/>
    </div>
  );
}

export default Users;