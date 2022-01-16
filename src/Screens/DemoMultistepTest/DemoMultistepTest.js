import React from "react";
import { useState, useEffect, wrapper } from "react";
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
import { auth } from "../../firebasestuff/firebase-config";
import { Formik } from "formik";
import ReactTestUtils from "react-dom/test-utils";
import { miniSerializeError } from "@reduxjs/toolkit";
import ClassSelection from "../ClassSelection/ClassSelection";
import ClassPreviewCard from "../../Components/ClassPreviewCard/ClassPreviewCard";
import RaceSelection from "../RaceSelection/RaceSelection";
import BackgroundSelection from "../BackgroundSelection/BackgroundSelection";
import MyCharacters from "../MyCharacters/MyCharacters";
import ChooseName from "../../Components/ChooseAName/ChooseName";
import ChooseImage from "../../Components/ChooseImage/ChooseImage";
import ChooseProficiencies from "../../Components/ChooseProficiencies/ChooseProficiencies";

const DemoMultistepTest = () => {
  const history = useHistory();
  const [classes, setClasses] = useState([]);
  const [races, setRaces] = useState([]);
  const [backgrounds, setBackgrounds] = useState([]);
  const [skills, setSkills] = useState([]);
  const [level, setLevel] = useState("1");
  const [name, setName] = useState("");
  const [characterClass, setCharacterClass] = useState();
  const [race, setRace] = useState();
  const [background, setBackground] = useState();
  const [image, setImage] = useState();
  const [isPending, setIsPending] = useState(false);
  const [skillProficiencies, setSkillProficiencies] = useState([]);
  const [text1, setText1] = useState("Roll");
  const [text2, setText2] = useState("Roll");
  const [text3, setText3] = useState("Roll");
  const [text4, setText4] = useState("Roll");
  const [text5, setText5] = useState("Roll");
  const [text6, setText6] = useState("Roll");
  const [str, setStr] = useState(1);
  const [dex, setDex] = useState(1);
  const [con, setCon] = useState(1);
  const [int, setInt] = useState(1);
  const [wis, setWis] = useState(1);
  const [cha, setCha] = useState(1);
  const [step, setStep] = useState(1);

  const user = auth.currentUser;

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
      )
      .then(
        fetch("http://localhost:8000/skills", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
          .then((res) => res.json())
          .then((myJson) => {
            setSkills(myJson);
          })
      );
  }, []);

  const handleCreate = (e) => {
    e.preventDefault();
    const proficiencyBonus = 3;
    const baseStats = [
      { type: "Strength", value: str, modifier: 1 },
      { type: "Dexterity", value: dex, modifier: 1 },
      { type: "Constitution", value: con, modifier: 1 },
      { type: "Intelligence", value: int, modifier: 1 },
      { type: "Wisdom", value: wis, modifier: 1 },
      { type: "Charisma", value: cha, modifier: 1 },
    ];
    const savingThrows = [
      ({ type: "Strength", value: 1 },
      { type: "Dexterity", value: 1 },
      { type: "Constitution", value: 1 },
      { type: "Intelligence", value: 1 },
      { type: "Wisdom", value: 1 },
      { type: "Charisma", value: 1 }),
    ];

    const ac = 10;
    const initiative = baseStats[1].modifier;
    const speed = race.speed;
    const hitDie = characterClass.hitDie;
    const hp = hitDie.maxValue;
    const passiveWisdom = 10;
    const jackOfAllTrades = false;
    const userID = user.uid;

    const character = {
      userID,
      name,
      image,
      level,
      proficiencyBonus,
      baseStats,
      characterClass,
      race,
      background,
      savingThrows,
      skillProficiencies,
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

  const computeStat = () => {
    const val1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    const val2 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    const val3 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    const val4 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    return val1 + val2 + val3 + val4 - Math.min(val1, val2, val3, val4);
  };


  return (
    <Container>

      {step === 1 && (
        <div>
          <Typography style={{ textAlign: "center" }} variant="h4">
            Roll your stats!
          </Typography>
          <div style={{ marginLeft: "250px", marginTop: "30px" }}>
            <Button
              variant="outlined"
              color="secondary"
              style={{ marginLeft: "20px", marginRight: "20px" }}
              onClick={(e) => {
                setText1(computeStat());
              }}
            >
              {text1}
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              style={{ marginLeft: "20px", marginRight: "20px" }}
              onClick={(e) => {
                setText2(computeStat());
              }}
            >
              {text2}
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              style={{ marginLeft: "20px", marginRight: "20px" }}
              onClick={(e) => {
                setText3(computeStat());
              }}
            >
              {text3}
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              style={{ marginLeft: "20px", marginRight: "20px" }}
              onClick={(e) => {
                setText4(computeStat());
              }}
            >
              {text4}
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              style={{ marginLeft: "20px", marginRight: "20px" }}
              onClick={(e) => {
                setText5(computeStat());
              }}
            >
              {text5}
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              style={{ marginLeft: "20px", marginRight: "20px" }}
              onClick={(e) => {
                setText6(computeStat());
              }}
            >
              {text6}
            </Button>
          </div>
          <div>
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box component="form" sx={{ width: 500, height: 500 }}>
                <Typography style={{ marginTop: "20px" }}>
                  <b>Strength: </b>
                </Typography>
                <TextField
                  id="outlines-basic"
                  label="Add one of the numbers obtained in the array"
                  variant="standard"
                  type="text"
                  fullWidth
                  style={{ marginBottom: "10px" }}
                  required
                  onChange={(e) => {
                    setStr(e.target.value);
                  }}
                />
                <Typography style={{ marginTop: "20px" }}>
                  <b>Dexterity: </b>
                </Typography>
                <TextField
                  id="outlines-basic"
                  label="Add one of the numbers obtained in the array"
                  variant="standard"
                  type="text"
                  fullWidth
                  style={{ marginBottom: "10px" }}
                  required
                  onChange={(e) => {
                    setDex(e.target.value);
                  }}
                />
                <Typography style={{ marginTop: "20px" }}>
                  <b>Constitution: </b>
                </Typography>
                <TextField
                  id="outlines-basic"
                  label="Add one of the numbers obtained in the array"
                  variant="standard"
                  type="text"
                  fullWidth
                  style={{ marginBottom: "10px" }}
                  required
                  onChange={(e) => {
                    setCon(e.target.value);
                  }}
                />
                <Typography style={{ marginTop: "20px" }}>
                  <b>Intelligence: </b>
                </Typography>
                <TextField
                  id="outlines-basic"
                  label="Add one of the numbers obtained in the array"
                  variant="standard"
                  type="text"
                  fullWidth
                  style={{ marginBottom: "10px" }}
                  required
                  onChange={(e) => {
                    setInt(e.target.value);
                  }}
                />
                <Typography style={{ marginTop: "20px" }}>
                  <b>Wisdom: </b>
                </Typography>
                <TextField
                  id="outlines-basic"
                  label="Add one of the numbers obtained in the array"
                  variant="standard"
                  type="text"
                  fullWidth
                  style={{ marginBottom: "10px" }}
                  required
                  onChange={(e) => {
                    setWis(e.target.value);
                  }}
                />
                <Typography style={{ marginTop: "20px" }}>
                  <b>Charisma: </b>
                </Typography>
                <TextField
                  id="outlines-basic"
                  label="Add one of the numbers obtained in the array"
                  variant="standard"
                  type="text"
                  fullWidth
                  style={{ marginBottom: "50px" }}
                  required
                  onChange={(e) => {
                    setCha(e.target.value);
                  }}
                />
              </Box>
            </Box>
          </div>
        </div>
      )}

      {step === 2 && (
        <ClassSelection changeableClass={characterClass} action={setCharacterClass} step={step} setStep={setStep}/>
      )}
      {step === 3 && (
        <RaceSelection changeableRace={race} action={setRace} step={step} setStep={setStep}/>
        
      )}
      {step === 4 && (
        <BackgroundSelection changeableBackground={background} action={setBackground} step={step} setStep={setStep} />
      )}
      {step === 5 && (
        <ChooseName changeableName={name} action={setName} step={step} setStep={setStep} />
      )}
      {step === 6 && (
        <ChooseImage changeableName={image} action={setImage} step={step} setStep={setStep} />
      )}
      {step === 7 && (
        <ChooseProficiencies changeableSkills={characterClass.skillProficiencies} backgroundSkills={background.skillProficiencies} skillNumber={characterClass.skillNumber} action={setSkillProficiencies} step={step} setStep={setStep} />
      )}
      {step === 8 && (
        <Button
        onClick={(e) => {
            handleCreate(e);
        }}
      >
        Create Character!
      </Button>
      )}

      {step !== 1 && (
        <Button
          onClick={(e) => {
            setStep(step - 1);
          }}
        >
          Previous
        </Button>
      )}
      {step < 4 && (
        <Button
          onClick={(e) => {
            setStep(step + 1);
          }}
        >
          Next
        </Button>
      )}
    </Container>
  );
};

export default DemoMultistepTest;
