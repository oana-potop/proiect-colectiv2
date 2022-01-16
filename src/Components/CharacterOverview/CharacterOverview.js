import * as React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import StatBox from "../StatBox/StatBox";
import AttributeRating from "../AttributeRating/AttributeRating";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {
  Avatar,
  Button,
  CardMedia,
  Container,
  SvgIcon,
  Typography,
  IconButton,
  CardActionArea,
  Grid,
} from "@material-ui/core";
import { DeleteOutlined } from "@mui/icons-material";
import { useStyles } from "./styles";
import { Divider } from "@mui/material";
import Dialog from '@mui/material/Dialog';

const CharacterOverview = ({character, openDialog, onCloseDialog}) => {
  //-------------------------------------------MAKING CHARACTER----------------------------------------------------------

  const [classes, setClasses] = useState([]);
  const [races, setRaces] = useState([]);
  const [backgrounds, setBackgrounds] = useState([]);

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

  const savingThrows = [
    ({ type: "Strength", value: 1 },
    { type: "Dexterity", value: 2 },
    { type: "Constitution", value: 3 },
    { type: "Intelligence", value: 4 },
    { type: "Wisdom", value: 5 },
    { type: "Charisma", value: 0 }),
  ];

  console.log("CLASSES: " + classes);

  const userID = 69420;
  const name = "Petrica";
  const image = "https://i.imgur.com/wMPJ9QO.jpeg";
  const level = 69;
  const proficiencyBonus = 3;
  const baseStats = [
    { type: "Strength", value: 18, modifier: 4 },
    { type: "Dexterity", value: 13, modifier: 1 },
    { type: "Constitution", value: 14, modifier: 2 },
    { type: "Intelligence", value: 12, modifier: 1 },
    { type: "Wisdom", value: 13, modifier: 1 },
    { type: "Charisma", value: 8, modifier: -1 },
  ];
  const characterClass = classes[0];
  const race = races[0];
  const background = backgrounds[0];
  const skills = ["Animal Handling", "Perception"];
  const ac = 13;
  const initiative = 2;
  const speed = 35;
  const hitDie = {
    minValue: 1,
    maxValue: 12,
  };
  const hp = 12;
  const passiveWisdom = 13;
  const jackOfAllTrades = false;

  const charchar = {
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
    skills,
    ac,
    initiative,
    speed,
    hp,
    hitDie,
    passiveWisdom,
    jackOfAllTrades,
  };

  return (
    <div>
      <div>
        <Dialog open={openDialog} onClose={onCloseDialog} fullWidth>
        <Container>
          
          <Grid container spacing={12} justifyContent="space-between" alignItems="center" style={{marginBottom: "20px"}}>
            <Grid item>
              <Typography variant="h4">
                {character?.name} 
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">
                <b>Level: </b> {character?.level}
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={10} justifyContent="space-evenly" alignItems="center" style={{marginBottom: '15px', marginTop: '10px'}} >
            {/* <Grid item> <StatBox statName={"HP"} statValue={hp}> </StatBox> </Grid>
            <Grid item> <StatBox statName={"Initiative"} statValue={initiative}> </StatBox> </Grid>
            <Grid item> <StatBox statName={"AC"} statValue={ac}> </StatBox> </Grid> */}
            <Paper variant="outlined" style={{backgroundColor: "#ffcdd2"}}>
              <Typography style={{textAlign: 'center', color: "secondary", lineHeight: '50px', width: '100px',}}><b>HP</b></Typography>
              <Typography style={{textAlign: 'center', color: "secondary", lineHeight: '50px', width: '100px'}}>50</Typography>
            </Paper>
            <Paper variant="outlined" style={{backgroundColor: "#ffcdd2"}}>
              <Typography style={{textAlign: 'center', color: "secondary", lineHeight: '50px', width: '100px'}}><b>Initiative</b></Typography>
              <Typography style={{textAlign: 'center', color: "secondary", lineHeight: '50px', width: '100px'}}>4</Typography>
            </Paper>
            <Paper variant="outlined" style={{backgroundColor: "#ffcdd2"}}>
              <Typography style={{textAlign: 'center', color: "secondary", lineHeight: '50px', width: '100px'}}><b>AC</b></Typography>
              <Typography style={{textAlign: 'center', color: "secondary", lineHeight: '50px', width: '100px'}}>20</Typography>
            </Paper>
          </Grid>

          <Divider variant="middle" />




          <Grid container spacing={10} justifyContent="space-evenly" alignItems="center" style={{marginBottom: "20px"}}>
            {character?.baseStats?.map((stat) => (
              <Grid item xs={2}> <StatBox statName={stat.type} statValue={stat.value} /> </Grid>
            ))}
          </Grid>

        
          <Grid container>
              <Grid container item xs={6} direction="column" justifyContent="flex-end">
                <Grid item xs={5}>
                    <Typography variant="h6">
                        <b>Race: </b> {character?.race?.name}
                    </Typography>
                    <Typography variant="h6">
                        <b>Class: </b> {character?.characterClass?.name}
                    </Typography>
                    <Typography variant="h6">
                        <b>Background: </b> {character?.background?.name}
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="subtitle1"><b>Skill Proficiencies</b></Typography>
                    {skills.map((skill) => (
                        <Typography> {skill} </Typography>
                    ))}
                </Grid>
                <Grid item xs={4}>       
                    <AttributeRating character={character}/>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                  <img src={character?.image}/>
              </Grid>
          </Grid>

          
        </Container>
        </Dialog>
      </div>
    </div>
  );
};

export default CharacterOverview;
