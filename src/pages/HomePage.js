import React, { Component } from "react";
import { handleConsumer } from "../AppContext";
import TopBar from "../components/TopBar";
import Layout from "./Layout";

const HandleConsumer = handleConsumer(HomeHandle);

export default class HomePage extends Component {
  render() {
    console.log("home", this.props);
    return (
      <Layout showTopBar={true} title="首页">
        {/* <div>
          <h3>HomePage</h3>
          <HandleConsumer />
        </div> */}

        {{
          btn: <button>提交</button>,
          txt: "内容"
        }}
      </Layout>
    );
  }
}

function HomeHandle(props) {
  return <div>{props.user.name}</div>;
}
