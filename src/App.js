import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyCharacters from "./Screens/MyCharacters/MyCharacters";
import "./App.css";
import { Provider } from "react-redux";
import { CharacterStore } from "./Stores/CharacterStore";
import ClassSelection from "./Screens/ClassSelection/ClassSelection";
import CharacterCreation from "./Screens/CharacterCreation/CharacterCreation";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import ClassPreviewCard from "./Components/ClassPreviewCard/ClassPreviewCard";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CharacterPreviewCard from "./Components/CharacterPreviewCard/CharacterPreviewCard";
import { green } from "@material-ui/core/colors";
import { ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { AppBar } from "@material-ui/core";
import theme from "./UI/Theme";
import Header from "./Components/Header/Header";

const App = () => {

  return (
    <Provider store={CharacterStore}>
      <ThemeProvider theme={theme}>
        <Header />
        <Router>
          <div>
            <Switch>
              <Route exact path="/">
                <LoginScreen />
              </Route>
              <Route exact path="/characters">
                <MyCharacters />
              </Route>
              <Route exact path="/creation">
                <CharacterCreation />
              </Route>
              <Route exact path="/classSelection">
                <ClassSelection />
              </Route>
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
