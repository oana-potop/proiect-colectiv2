import * as React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import {
  Avatar,
  CardActionArea,
  CardMedia,
  Container,
  Grid,
  SvgIcon,
  Typography,
} from "@material-ui/core";
import { useStyles } from "./styles";
import RacialFeat from "./RacialFeat";

const RacePreviewCard = ({
  characterRace,
  changeableRace,
  action,
  step,
  setStep,
  raceBonuses,
  setRaceBonuses
}) => {
  const styles = useStyles();
  let bonuses = [0,0,0,0,0,0]
  const addRaceStats = () => {
    for(let i = 0; i < 6; i++)
      if(characterRace.increasedStats[i]?.value !== undefined){
        if(characterRace.increasedStats[i].stat === "Strength")
          bonuses[0] += characterRace.increasedStats[i].value
        else if(characterRace.increasedStats[i].stat === "Dexterity")
          bonuses[1] += characterRace.increasedStats[i].value
        else if(characterRace.increasedStats[i].stat === "Constitution")
          bonuses[2] += characterRace.increasedStats[i].value
        else if(characterRace.increasedStats[i].stat === "Intelligence")
          bonuses[3] += characterRace.increasedStats[i].value
        else if(characterRace.increasedStats[i].stat === "Wisdom")
          bonuses[4] += characterRace.increasedStats[i].value
        else if(characterRace.increasedStats[i].stat === "Charisma")
          bonuses[5] += characterRace.increasedStats[i].value
      }
    console.log("BONUSES: " + bonuses);
    setRaceBonuses(bonuses);
  }

  return (
    <div
      onClick={(event) => {
        action(characterRace);
        addRaceStats()
        console.log(changeableRace);
        setStep(step + 1);

      }}
    >
      <div>
        <Card>
          <CardActionArea>
            <div>
              <CardHeader title={characterRace.name} className={styles.name} />
            </div>
            <CardContent>
              <Typography>
                <b>ASI: </b>{" "}
                {characterRace.increasedStats
                  .map((stats) => stats.stat)
                  .map((stat) => `${stat} `)}
              </Typography>
              <Typography>
                <b>Size: </b> {characterRace.size}
              </Typography>
              <Typography>
                <b>Speed: </b> {characterRace.speed}
              </Typography>
              <Typography>
                <b>Darkvision: </b>
                {characterRace.darkvision
                  ? characterRace.darkvision + " feet"
                  : "no"}
              </Typography>
              <div>
                {characterRace.extraFeats
                  ?.map((feat) => feat.name)
                  .map((featName) => RacialFeat(featName))}
              </div>
              {characterRace.subraces && (
                <Typography>
                  <b>Subraces:</b>
                  {characterRace.subraces
                    ?.map((subrace) => ` ${subrace.name}`)
                    .toString()}
                </Typography>
              )}
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default RacePreviewCard;
