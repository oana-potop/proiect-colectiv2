import React, { useCallback, useEffect, useMemo, useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";
import CharacterPreviewCard from "../../Components/CharacterPreviewCard/CharacterPreviewCard";
import { Button, SvgIcon, Typography } from "@material-ui/core";
import CircularProgress from "@mui/material/CircularProgress";
import { auth } from "../../firebasestuff/firebase-config";
import { onAuthStateChanged } from "@firebase/auth";
import { signOut } from "firebase/auth";
import MultistepCreation from "../MultistepCreation/MultistepCreation";
import DemoMultistep from "../DemoMultistep/DemoMultistep";

const MyCharacters = () => {
  const history = useHistory();
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const user = auth.currentUser;

  useEffect(() => {
    fetch(`http://localhost:8000/characters?userID=${user.uid}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((myJson) => {
        setCharacters(myJson);
      });
  }, []);

  useEffect(() => {
    if (characters) {
      setIsLoading(false);
    }
  }, [characters]);

  const handleDelete = async (id) => {
    await fetch(`http://localhost:8000/characters/${id}`, {
      method: "DELETE",
    });
    const newCharacters = characters.filter((element) => element.id !== id);
    setCharacters(newCharacters);
  };

  const renderCharacters = () => {
    return (
      <Grid container spacing={3}>
        {characters.map((element) => (
          <Grid item key={element.id} xs={12} md={6} lg={4}>
            <CharacterPreviewCard
              charchar={element}
              handleDelete={handleDelete}
            />
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <Container style={{ marginTop: 20 }}>
      <Typography gutterBottom variant="h4" component="h4">
        My Characters
      </Typography>
      {isLoading && <CircularProgress />}
      {renderCharacters()}
      <br />
      <Container style={{ display: "space-between" }}>
        <Button
        style={{marginRight: "10px"}}
          onClick={() => {
            history.push("/char-creation");
          }}
        >
          Create a new character
        </Button>
        <Button
          onClick={() => {
            signOut(auth)
              .then(() => {
                history.push("/");
              })
              .catch((error) => {
                // An error happened.
                console.log("nu-i ok");
              });
          }}
        >
          Sign out
        </Button>
      </Container>
    </Container>
  );
};

export default MyCharacters;
