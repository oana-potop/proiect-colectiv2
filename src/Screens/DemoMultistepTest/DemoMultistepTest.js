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
import CharacterOverview from "../../Components/CharacterOverview/CharacterOverview";

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
  const [charchar, setCharchar] = useState();

  const [raceStats, setRaceStats] = useState([0, 0, 0, 0, 0, 0]);
  const [classSavingThrows, setClassSavingThrows] = useState([
    0, 0, 0, 0, 0, 0,
  ]);

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

  const fakeCreate = (e) => {
    e.preventDefault();
    const proficiencyBonus = 1 + Math.ceil(level / 4);
    const baseStats = [
      {
        type: "Strength",
        value: str + raceStats[0],
        modifier: Math.floor((str + raceStats[0] - 10) / 2),
      },
      {
        type: "Dexterity",
        value: dex + raceStats[1],
        modifier: Math.floor((dex + raceStats[1] - 10) / 2),
      },
      {
        type: "Constitution",
        value: con + raceStats[2],
        modifier: Math.floor((con + raceStats[2] - 10) / 2),
      },
      {
        type: "Intelligence",
        value: int + raceStats[3],
        modifier: Math.floor((int + raceStats[3] - 10) / 2),
      },
      {
        type: "Wisdom",
        value: wis + raceStats[4],
        modifier: Math.floor((wis + raceStats[4] - 10) / 2),
      },
      {
        type: "Charisma",
        value: cha + raceStats[5],
        modifier: Math.floor((cha + raceStats[5] - 10) / 2),
      },
    ];
    const savingThrows = [
      {
        type: "Strength",
        value: baseStats[0].modifier + classSavingThrows[0] * proficiencyBonus,
      },
      {
        type: "Dexterity",
        value: baseStats[1].modifier + classSavingThrows[1] * proficiencyBonus,
      },
      {
        type: "Constitution",
        value: baseStats[2].modifier + classSavingThrows[2] * proficiencyBonus,
      },
      {
        type: "Intelligence",
        value: baseStats[3].modifier + classSavingThrows[3] * proficiencyBonus,
      },
      {
        type: "Wisdom",
        value: baseStats[4].modifier + classSavingThrows[4] * proficiencyBonus,
      },
      {
        type: "Charisma",
        value: baseStats[5].modifier + classSavingThrows[5] * proficiencyBonus,
      },
    ];

    console.log("SAVING THROWS:" + savingThrows);

    const ac = 10 + baseStats[1].modifier;
    const initiative = baseStats[1].modifier;
    const speed = race.speed;
    const hitDie = characterClass.hitDie;
    const hp =
      hitDie.maxValue +
      (level - 1) * Math.ceil(hitDie.maxValue / 2) +
      level * baseStats[2].modifier;
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

    setCharchar(character);
  }

  const handleCreate = (e) => {
    e.preventDefault();
    const proficiencyBonus = 1 + Math.ceil(level / 4);
    const baseStats = [
      {
        type: "Strength",
        value: str + raceStats[0],
        modifier: Math.floor((str + raceStats[0] - 10) / 2),
      },
      {
        type: "Dexterity",
        value: dex + raceStats[1],
        modifier: Math.floor((dex + raceStats[1] - 10) / 2),
      },
      {
        type: "Constitution",
        value: con + raceStats[2],
        modifier: Math.floor((con + raceStats[2] - 10) / 2),
      },
      {
        type: "Intelligence",
        value: int + raceStats[3],
        modifier: Math.floor((int + raceStats[3] - 10) / 2),
      },
      {
        type: "Wisdom",
        value: wis + raceStats[4],
        modifier: Math.floor((wis + raceStats[4] - 10) / 2),
      },
      {
        type: "Charisma",
        value: cha + raceStats[5],
        modifier: Math.floor((cha + raceStats[5] - 10) / 2),
      },
    ];
    const savingThrows = [
      {
        type: "Strength",
        value: baseStats[0].modifier + classSavingThrows[0] * proficiencyBonus,
      },
      {
        type: "Dexterity",
        value: baseStats[1].modifier + classSavingThrows[1] * proficiencyBonus,
      },
      {
        type: "Constitution",
        value: baseStats[2].modifier + classSavingThrows[2] * proficiencyBonus,
      },
      {
        type: "Intelligence",
        value: baseStats[3].modifier + classSavingThrows[3] * proficiencyBonus,
      },
      {
        type: "Wisdom",
        value: baseStats[4].modifier + classSavingThrows[4] * proficiencyBonus,
      },
      {
        type: "Charisma",
        value: baseStats[5].modifier + classSavingThrows[5] * proficiencyBonus,
      },
    ];

    console.log("SAVING THROWS:" + savingThrows);

    const ac = 10 + baseStats[1].modifier;
    const initiative = baseStats[1].modifier;
    const speed = race.speed;
    const hitDie = characterClass.hitDie;
    const hp =
      hitDie.maxValue +
      (level - 1) * Math.ceil(hitDie.maxValue / 2) +
      level * baseStats[2].modifier;
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
          <div style={{ marginLeft: "300px", marginTop: "30px" }}>
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
                    setStr(parseInt(e.target.value));
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
                    setDex(parseInt(e.target.value));
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
                    setCon(parseInt(e.target.value));
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
                    setInt(parseInt(e.target.value));
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
                    setWis(parseInt(e.target.value));
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
                    setCha(parseInt(e.target.value));
                  }}
                />
                 <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  style={{ marginRight: "20px", marginBottom: "50px"}}
                  onClick={() => {
                    setStep(step + 1);
                  }}
                >
                  Next
                </Button>
              </Box>
            </Box>
          </div>
        </div>
      )}

      {step === 2 && (
        <ClassSelection
          changeableClass={characterClass}
          action={setCharacterClass}
          step={step}
          setStep={setStep}
          classSavingThrows={classSavingThrows}
          setClassSavingThrows={setClassSavingThrows}
        />
      )}
      {step === 3 && (
        <RaceSelection
          changeableRace={race}
          action={setRace}
          step={step}
          setStep={setStep}
          raceBonuses={raceStats}
          setRaceBonuses={setRaceStats}
        />
      )}
      {step === 4 && (
        <BackgroundSelection
          changeableBackground={background}
          action={setBackground}
          step={step}
          setStep={setStep}
        />
      )}
      {step === 6 && (
        <ChooseName
          changeableName={name}
          action={setName}
          step={step}
          setStep={setStep}
        />
      )}
      {step === 7 && (
        <ChooseImage
          changeableName={image}
          action={setImage}
          step={step}
          setStep={setStep}
          fakeCreate={(e) => {fakeCreate(e)}}
        />
      )}
      {step === 5 && (
        <ChooseProficiencies
          changeableSkills={characterClass.skillProficiencies}
          backgroundSkills={background.skillProficiencies}
          skillNumber={characterClass.skillNumber}
          action={setSkillProficiencies}
          step={step}
          setStep={setStep}
        />
      )}
      {step === 8 && (
        <Container >
          <CharacterOverview character={charchar} />
          <Button
            variant="contained"
            color="secondary"
            style={{marginTop: "20px", marginLeft: "1000px"}}
            onClick={(e) => {
              handleCreate(e);
            }}
          >
            Create Character!
          </Button>
        </Container>
      )}

      {step !== 1 && (
        <Button
          style={{marginTop: "20px", marginBottom: "20px", marginLeft: "-30px"}}
          onClick={(e) => {
            setStep(step - 1);
          }}
        >
          Previous
        </Button>
      )}
    </Container>
  );
};

export default DemoMultistepTest;
