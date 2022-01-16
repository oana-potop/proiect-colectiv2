import React, { useEffect, useState } from "react";
import { Container, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";

const Wtf = ({ changeableSkillProficiencies, action, step, setStep }) => {
  const [proficienciesList, setProficienciesList] = useState(changeableSkillProficiencies);
  const [acrobatics, setAcrobatics] = useState(false);
  const [animalHandling, setAnimalHandling] = useState(false);
  const [arcana, setArcana] = useState(false);
  const [athletics, setAthletics] = useState(false);
  const [deception, setDeception] = useState(false);
  const [history, setHistory] = useState(false);
  const [insight, setInsight] = useState(false);
  const [intimidation, setIntimidation] = useState(false);
  const [investigation, setInvestigation] = useState(false);
  const [medicine, setMedicine] = useState(false);
  const [nature, setNature] = useState(false);
  const [perception, setPerception] = useState(false);
  const [performance, setPerformance] = useState(false);
  const [persuasion, setPersuasion] = useState(false);
  const [religion, setReligion] = useState(false);
  const [sleightOfHand, setSleightOfHand] = useState(false);
  const [stealth, setStealth] = useState(false);
  const [survival, setSurvival] = useState(false);

  const color1 = "#f73378";
  const color2 = "#d500f9";

  return (
    <Container>
        <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
        }}
      >
      <Button
        variant="outlined"
        style={{ backgroundColor: acrobatics ? color2 : color1 }}
        onClick={(e) => {
          setAcrobatics(!acrobatics);
        }}
      >
        Acrobatics
      </Button>
      <Button
        variant="outlined"
        style={{ backgroundColor: animalHandling ? color2 : color1 }}
        onClick={(e) => {
            setAnimalHandling(!animalHandling);
        }}
      >
        Animal Handling
      </Button>
      <Button
        variant="outlined"
        style={{ backgroundColor: arcana ? color2 : color1 }}
        onClick={(e) => {
          setArcana(!arcana);
        }}
      >
        Arcana
      </Button>
      <Button
        variant="outlined"
        style={{ backgroundColor: athletics ? color2 : color1 }}
        onClick={(e) => {
          setAthletics(!athletics);
        }}
      >
        Athletics
      </Button>
      <Button
        variant="outlined"
        style={{ backgroundColor: deception ? color2 : color1 }}
        onClick={(e) => {
          setDeception(!deception);
        }}
      >
        Deception
      </Button>
      <Button
        variant="outlined"
        style={{ backgroundColor: history ? color2 : color1 }}
        onClick={(e) => {
          setHistory(!history);
        }}
      >
        History
      </Button>
      <Button
        variant="outlined"
        style={{ backgroundColor: insight ? color2 : color1 }}
        onClick={(e) => {
          setInsight(!insight);
        }}
      >
        Insight
      </Button>
      <Button
        variant="outlined"
        style={{ backgroundColor: intimidation ? color2 : color1 }}
        onClick={(e) => {
          setIntimidation(!intimidation);
        }}
      >
        Intimidation
      </Button>
      <Button
        variant="outlined"
        style={{ backgroundColor: investigation ? color2 : color1 }}
        onClick={(e) => {
          setInvestigation(!investigation);
        }}
      >
        Investigation
      </Button>
      <Button
        variant="outlined"
        style={{ backgroundColor: medicine ? color2 : color1 }}
        onClick={(e) => {
          setMedicine(!medicine);
        }}
      >
        Medicine
      </Button>
      <Button
        variant="outlined"
        style={{ backgroundColor: nature ? color2 : color1 }}
        onClick={(e) => {
          setNature(!nature);
        }}
      >
        Nature
      </Button>
      <Button
        variant="outlined"
        style={{ backgroundColor: perception ? color2 : color1 }}
        onClick={(e) => {
          setPerception(!perception);
        }}
      >
        Perception
      </Button>
      <Button
        variant="outlined"
        style={{ backgroundColor: performance ? color2 : color1 }}
        onClick={(e) => {
          setPerformance(!performance);
        }}
      >
        Performance
      </Button>
      <Button
        variant="outlined"
        style={{ backgroundColor: persuasion ? color2 : color1 }}
        onClick={(e) => {
          setPersuasion(!persuasion);
        }}
      >
        Persuasion
      </Button>
      <Button
        variant="outlined"
        style={{ backgroundColor: religion ? color2 : color1 }}
        onClick={(e) => {
          setReligion(!religion);
        }}
      >
        Religion
      </Button>
      <Button
        variant="outlined"
        style={{ backgroundColor: sleightOfHand ? color2 : color1 }}
        onClick={(e) => {
          setSleightOfHand(!sleightOfHand);
        }}
      >
        Sleight of Hand
      </Button>
      <Button
        variant="outlined"
        style={{ backgroundColor: stealth ? color2 : color1 }}
        onClick={(e) => {
          setStealth(!stealth);
        }}
      >
        Stealth
      </Button>
      <Button
        variant="outlined"
        style={{ backgroundColor: survival ? color2 : color1 }}
        onClick={(e) => {
          setSurvival(!survival);
        }}
      >
        Survival
      </Button>
      </Box>
    </Container>
  );
};

export default Wtf;
