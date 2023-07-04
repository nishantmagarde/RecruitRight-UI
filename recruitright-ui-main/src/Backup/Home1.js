import React, { Component } from "react";
import Layout from "./Home";

class Home1 extends Component {
  state = {};
  render() {
    return (
    <Layout>
        <div>
          
        <h1>This is Your Homepage</h1>
        <p>
          React has the concept of controlled and uncontrolled components. Our
          stateful components self manage their state out of the box, without
          wiring. Dropdowns open on click without wiring onClick to the open
          prop. The value is also stored internally, without wiring onChange to
          value. If you add a value prop or an open prop, the Dropdown delegates
          control for that one prop to your value. The other props remain auto
          controlled. Mix and match any number of controlled and uncontrolled
          props. Add and remove control at any time by adding or removing props.
          Everything just works.
        </p>
      </div>
    </Layout>
    );
  }
}

export default Home1;
