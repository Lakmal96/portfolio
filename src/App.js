import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./About";
import Footer from "./components/Footer";
import Jumbo from "./components/Jumbo";
import Layout from "./components/Layout";
import NavBar from "./components/NavBar";
import Home from "./Home";
import Nomatch from "./Nomatch";
import Projects from "./Projects";
import Skills from "./Skills";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Jumbo />
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
          <Route component={Nomatch} />
        </Switch>
      </Layout>
      <Footer />
    </React.Fragment>
  );
}

export default App;
