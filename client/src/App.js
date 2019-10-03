import React from 'react';
import "./App.scss";
import Hero from "./pages/Hero/Hero";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Gallery from "./pages/Gallery/Gallery";

//Configuración de redux
import {Provider} from "react-redux";
import {createStore, compose} from "redux";
import reducers from "./redux/reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers());


function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Gallery />
      </React.Fragment>
    </Provider>
  );
}

export default App;
