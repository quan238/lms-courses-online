import React from "react";
import Chat from "../../../components/LiveStream/Chat/Chat";
import LiveStream from "../../../components/LiveStream/LiveStream";
import Streaming from "../../../components/LiveStream/Streaming/Streaming";
import { settings2 } from "../../../config/js/config";

export default function Live_output(props) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-8 col-lg-8">
          <Streaming></Streaming>
        </div>
        <div className="col-xl-4 col-lg-4">
          <Chat></Chat>
        </div>
        <div className="col-md-12">
          <LiveStream setting={settings2}></LiveStream>
        </div>
      </div>
    </div>
  );
}
