import { Component } from "react";
import Main from "./Main";
import SettingUser from "./SettingUser";

class Home extends Component {
  state = {
    visibility: false,
  };

  render() {
    return (
      <>
        <Main className='d-none' />
        <SettingUser />
      </>
    );
  }
}

export default Home;
