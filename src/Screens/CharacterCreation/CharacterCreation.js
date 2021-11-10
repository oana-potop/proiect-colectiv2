import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CharacterPreviewCard from "../../Components/CharacterPreviewCard/CharacterPreviewCard";
import { Box, Button, TextField, Typography } from "@material-ui/core";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "../../Components/Header/Header";
import GenericSelect from "../../Components/GenericSelect/GenericSelect";
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const CharacterCreation = () => {
  const history = useHistory();
  const [classes, setClasses] = useState([]);
  const [races, setRaces] = useState([]);
  const [backgrounds, setBackgrounds] = useState([]);
  const [level, setLevel] = useState("1");
  const [name, setName] = useState("");
  const [characterClass, setCharacterClass] = useState();
  const [race, setRace] = useState();
  const [background, setBackground] = useState();
  const [isPending, setIsPending] = useState(false);
  useEffect(() => {
    fetch("http://localhost:8000/classes", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((myJson) => {
        setClasses(myJson);
      })
      .then(
        fetch("http://localhost:8000/races", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
          .then((res) => res.json())
          .then((myJson) => {
            setRaces(myJson);
          })
      )
      .then(
        fetch("http://localhost:8000/backgrounds", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
          .then((res) => res.json())
          .then((myJson) => {
            setBackgrounds(myJson);
          })
      );
  }, []);

  useEffect(() => {
    console.log(characterClass);
    console.log(race);
    console.log(background);
  }, [characterClass, race, background]);

  const handleCreate = (e) => {
    e.preventDefault();
    const proficiencyBonus = 3;
    const baseStats = [
      { type: "Strength", value: 1, modifier: 1 },
      { type: "Dexterity", value: 1, modifier: 1 },
      { type: "Constitution", value: 1, modifier: 1 },
      { type: "Intelligence", value: 1, modifier: 1 },
      { type: "Wisdom", value: 1, modifier: 1 },
      { type: "Charisma", value: 1, modifier: 1 },
    ];
    const savingThrows = [
      ({ type: "Strength", value: 1 },
      { type: "Dexterity", value: 1 },
      { type: "Constitution", value: 1 },
      { type: "Intelligence", value: 1 },
      { type: "Wisdom", value: 1 },
      { type: "Charisma", value: 1 }),
    ];

    const skills = [];
    const ac = 10;
    const initiative = baseStats[1].modifier;
    const speed = race.speed;
    const hitDie = characterClass.hitDie;
    const hp = hitDie.maxValue;
    const passiveWisdom = 10;
    const jackOfAllTrades = false;
    const userID = 1;

    const character = {
      userID,
      name,
      level,
      proficiencyBonus,
      baseStats,
      characterClass,
      race,
      background,
      savingThrows,
      skills,
      ac,
      initiative,
      speed,
      hp,
      hitDie,
      passiveWisdom,
      jackOfAllTrades,
    };

    setIsPending(true);
    fetch("http://localhost:8000/characters", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(character),
    })
      .then(() => {
        setIsPending(false);
        console.log(character);
      })
      .then(() => {
        history.push("/characters");
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography gutterBottom variant="h4" component="h4">
          Create a character!
        </Typography>
        <Box component="form" sx={{ mt: 1 }}>
          <TextField
            id="outlines-basic"
            label="Level"
            type="text"
            variant="outlined"
            fullWidth
            margin="normal"
            autoFocus
            value={level}
            required
            onChange={(e) => setLevel(e.target.value)}
          />
          <TextField
            id="outlines-basic"
            label="Name"
            type="text"
            variant="outlined"
            fullWidth
            margin="normal"
            autoFocus
            required
            onChange={(e) => setName(e.target.value)}
          />
          <Box
            sx={{ minWidth: 120 }}
            style={{ marginTop: 10, marginBottom: 20 }}
          >
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label1">Class</InputLabel>
              <Select
                required
                labelId="demo-simple-select-label1"
                id="demo-simple-select1"
                value={characterClass}
                label="Class"
                onChange={(e) => {
                  setCharacterClass(e.target.value);
                }}
              >
                {classes.map((element) => (
                  <MenuItem value={element}>{element.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box
            sx={{ minWidth: 120 }}
            style={{ marginTop: 10, marginBottom: 20 }}
          >
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label2">Races</InputLabel>
              <Select
                required
                labelId="demo-simple-select-label2"
                id="demo-simple-select2"
                value={race}
                label="Race"
                onChange={(e) => {
                  setRace(e.target.value);
                }}
              >
                {races.map((element) => (
                  <MenuItem value={element}>{element.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box
            sx={{ minWidth: 120 }}
            style={{ marginTop: 10, marginBottom: 20 }}
          >
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label3">Background</InputLabel>
              <Select
                required
                labelId="demo-simple-select-label3"
                id="demo-simple-select3"
                value={background}
                label="Background"
                onChange={(e) => {
                  setBackground(e.target.value);
                }}
              >
                {backgrounds.map((element) => (
                  <MenuItem value={element}>{element.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          onClick={(e) => {
            handleCreate(e);
          }}
        >
          Create
        </Button>
      </Box>
    </Container>
  );
};

export default CharacterCreation;
