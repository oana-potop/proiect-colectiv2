import * as React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import StatBox from "../StatBox/StatBox";
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
import { Rating } from "@mui/material";
import { styled } from '@mui/material/styles';
import SquareOutlinedIcon from '@mui/icons-material/SquareOutlined';
import SquareIcon from '@mui/icons-material/Square';

const AtributeRating = ( {character} ) => {

  let combatValue = 0;
  let socialValue = 0;
  let utilityValue = 0;

  const computeCombatValue = () => {
    if(character.characterClass?.name === "Fighter")
      combatValue =(combatValue + 1);
    if(character.characterClass?.name === "Barbarian")
      combatValue =(combatValue + 1);
    if(character.characterClass?.name === "Paladin")
      combatValue =(combatValue + 1);
    if(character.characterClass?.name === "Ranger")
      combatValue =(combatValue + 0.5);
    if(character.ac > 14)
    combatValue =(combatValue + 0.5);
    if(character.ac > 12)
    combatValue =(combatValue + 0.5);
    if(character.hp > 13)
    combatValue =(combatValue + 0.5);
    if(character.hp > 8)
    combatValue =(combatValue + 0.5);
    if(character.skills.includes("Athletics"))
    combatValue =(combatValue + 1);
    if(character.skills.includes("Acrobatics"))
    combatValue =(combatValue + 0.5);
    if(character.initiative > 2)
    combatValue =(combatValue + 0.5);
    if(character.characterClass?.savingThrows.includes("Dexterity"))
    combatValue =(combatValue + 0.5);
    if(character.characterClass?.savingThrows.includes("Wisdom"))
    combatValue =(combatValue + 0.5);
    if(character.baseStats[0].value > 16)
    combatValue =(combatValue + 0.5);
    if(character.baseStats[0].value > 14)
    combatValue =(combatValue + 0.5);
    if(character.baseStats[1].value > 16)
    combatValue =(combatValue + 0.5);
    if(character.baseStats[1].value > 14)
    combatValue =(combatValue + 0.5);
    if(combatValue > 5)
    combatValue = 5
  }
  const computeSocialValue = () => {
    if(character.characterClass?.name === "Sorcerer")
      socialValue =(socialValue + 1);
    if(character.characterClass?.name === "Warlock")
      socialValue =(socialValue + 1);
    if(character.race?.name === "Human")
      socialValue =(socialValue + 0.5);
    if(character.race?.name === "Half-Elf")
      socialValue =(socialValue + 0.5);
    if(character.baseStats[5].value > 13)
      socialValue =(socialValue + 0.5);
    if(character.baseStats[5].value > 15)
      socialValue =(socialValue + 0.5);
    if(character.baseStats[5].value > 17)
      socialValue =(socialValue + 0.5);
    if(character.skills.includes("Performance"))
      socialValue =(socialValue + 0.5);
    if(character.skills.includes("Persuasion"))
      socialValue =(socialValue + 1);
    if(character.skills.includes("Deception"))
      socialValue =(socialValue + 1);
    if(character.skills.includes("Intimidation"))
      socialValue =(socialValue + 0.5);
    if(character.skills.includes("Insight"))
      socialValue =(socialValue + 1);
    if(socialValue > 5)
      socialValue = 5;
  }
  const computeUtilitylValue = () => {
    if(character.characterClass?.name === "Wizard")
      utilityValue =(utilityValue + 1);
    if(character.characterClass?.name === "Rogue")
      utilityValue =(utilityValue + 0.5);
    if(character.characterClass?.name === "Druid")
      utilityValue =(utilityValue + 1);
    if(character.characterClass?.name === "Cleric")
      utilityValue =(utilityValue + 1);
    if(character.characterClass?.name === "Ranger")
      utilityValue =(utilityValue + 0.5);  
    if(character.baseStats[0].value > 15)
      utilityValue =(utilityValue + 0.5);
    if(character.baseStats[3].value > 13)
      utilityValue =(utilityValue + 0.5);
    if(character.baseStats[3].value > 15)
      utilityValue =(utilityValue + 0.5);
    if(character.baseStats[4].value > 13)
      utilityValue =(utilityValue + 0.5);
    if(character.baseStats[4].value > 15)
      utilityValue =(utilityValue + 0.5);
    if(character.skills.includes("History"))
      utilityValue =(utilityValue + 0.5);
    if(character.skills.includes("Perception"))
      utilityValue =(utilityValue + 0.5);
    if(character.skills.includes("Survival"))
      utilityValue =(utilityValue + 0.5);
    if(character.skills.includes("Nature"))
      utilityValue =(utilityValue + 0.5);
    if(character.skills.includes("Arcana"))
      utilityValue =(utilityValue + 0.5);
    if(character.skills.includes("Medicine"))
      utilityValue =(utilityValue + 0.5);
    if(utilityValue > 5)
      utilityValue =  5;
  }

  computeCombatValue();
  computeSocialValue();
  computeUtilitylValue();



  return (
    <div>
        <Typography>Combat: </Typography> 
        <Rating value={combatValue} readOnly precision={0.5} />
        <Typography>Social: </Typography> 
        <Rating value={socialValue} readOnly precision={0.5} />
        <Typography>Utility: </Typography> 
        <Rating value={utilityValue} readOnly precision={0.5} />
    </div>
  );
};

export default AtributeRating;
