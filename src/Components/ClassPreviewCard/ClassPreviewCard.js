import * as React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import {
  Avatar,
  CardMedia,
  Container,
  SvgIcon,
  Typography,
} from "@material-ui/core";
import { useStyles } from "./styles";

const ClassPreviewCard = ({ characterClass }) => {
  const styles = useStyles();
  return (
    <div>
      <div>
        <Card>
          <div>
            <CardHeader title={characterClass.name} className={styles.name} />
          </div>
          <CardContent>
            <Typography>
              <b>Hit Die: </b> {characterClass.hitDie.minValue}d
              {characterClass.hitDie.maxValue}
            </Typography>
            <Typography>
              <b>Primary Ability: </b>{" "}
              {characterClass.primaryAbility.map((element) => `${element} `)}
            </Typography>
            <Typography>
              <b>Saving Throws: </b>
              {characterClass.savingThrows.map((element) => `${element} `)}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ClassPreviewCard;
