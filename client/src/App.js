import React from 'react';
import "./App.scss";
import Hero from "./pages/Hero/Hero";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";

//Configuración de redux
import {Provider} from "react-redux";
import {createStore, compose, applyMiddleware} from "redux";
import reducers from "./redux/reducers";
import thunk from "redux-thunk";
import WebProjects from './pages/WebProjects/WebProjects';
const middlewares = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)));

function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <Hero />
        <About />
        <Skills />
        <WebProjects />
        <Projects />
        <Gallery />
        <Contact />
        <Footer />
      </React.Fragment>
    </Provider>
  );
}

export default App;
