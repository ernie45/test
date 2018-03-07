import React from "react";
import {All} from "./pages/All";

import { RouteLogin } from "./utils/routeLogin"
// import Stocks from "./component/stocks";
/** Define the application usage */
const App = () =>
      /** A wrapper that encapsulates everything */
      <div className="site-wrap">
        <div className="panel-wrap animate--none">
          <RouteLogin />
        </div>
      </div>
export default App;
