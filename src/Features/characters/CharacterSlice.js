import { createSlice } from "@reduxjs/toolkit";
import { BarbarianIcon } from "../../Assets/assets";
const initialState = [
  {
    id: 1,
    name: "Joe",
    level: 1,
    baseStats: [
      { type: "Strength", value: 10, modifier: 0 },
      { type: "Dexterity", value: 10, modifier: 0 },
      { type: "Constitution", value: 10, modifier: 0 },
      { type: "Intelligence", value: 10, modifier: 0 },
      { type: "Wisdom", value: 10, modifier: 0 },
      { type: "Charisma", value: 10, modifier: 0 },
    ],
    characterClass: {
      id: 1,
      name: "Barbarian",
      hitDie: { minValue: 1, maxValue: 12 },
      primaryAbility: ["Strength"],
      skillNumber: 2,
      skillProficiencies: [],
      toolProficiencies: [],
      armorProficiencies: [],
      weaponProficiencies: [],
      savingThrows: [],
      classImage: BarbarianIcon,
      castingPotential: "No",
    },
    race: {
      id: 1,
      name: "Human",
      subraces: [],
      increasedStats: [],
      size: "medium",
      speed: 30,
      darkvision: 0,
      extraFeats: [],
      skillProficiencies: [],
      armorProficiencies: [],
      weaponProficiencies: [],
      toolProficiencies: [],
      languages: ["Common"],
      acBonus: 0,
      spells: [],
    },
    background: {
      name: "Charlatan",
      skillProficiencies: ["Deception", "Pula mea"],
      languages: 0,
      items: [{ name: "o pula mare" }],
      money: { gold: 1000 },
      feat: {
        name: "kdjvndkfnv",
        description: "dvasvdfvbfvdf",
      },
    },
    savingThrows: [
      {
        type: "Strength",
        value: 0,
      },
      {
        type: "Dexterity",
        value: 0,
      },
      {
        type: "Constitution",
        value: 0,
      },
      {
        type: "Intelligence",
        value: 0,
      },
      {
        type: "Wisdom",
        value: 0,
      },
      {
        type: "Charisma",
        value: 0,
      },
    ],
    skills: [],
    ac: 10,
    initiative: 0,
    speed: 30,
    hp: 6,
    hitDie: { minValue: 1, maxValue: 6 },
    passiveWisdom: 10,
    alignment: "Neutral",
    languages: ["Common"],
    flavourAttributes: {
      personalityTraits: "",
      bonds: "",
      ideals: "",
      flaws: "",
    },
    armor: {
      id: 1,
      name: "",
      type: "",
      ac: 0,
      stealthDisadvantage: false,
      strengthRequirement: 0,
    },
    weapon: {
      id: 1,
      name: "",
      type: "",
      damage: { minValue: 1, maxValue: 4 },
      damageType: "Bludgeoning",
      finesse: false,
      heavy: false,
      light: false,
      loading: false,
      range: [5, 5],
      reach: false,
      thrown: false,
      twoHanded: false,
      versatile: false,
      ammunition: false,
      special: false,
    },
    tools: [],
    inventory: [],
    money: { copper: 0, silver: 0, electrum: 0, gold: 0, platinum: 0 },
    proficiencyBonus: 2,
    jackOfAllTrades: false,
  },
];

const CharacterSlice = createSlice({
  name: "characterList",
  initialState,
  reducers: {
    printChar(state) {
      console.log(state[0].name);
    },
  },
});

export const { printChar } = CharacterSlice.actions;
export default CharacterSlice.reducer;
