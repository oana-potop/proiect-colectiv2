import * as React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@mui/material/CardActions";
import {
  Avatar,
  CardMedia,
  Container,
  SvgIcon,
  Typography,
  Button,
} from "@material-ui/core";
import { useStyles } from "./styles";
import { CardActionArea } from "@mui/material";

const ClassPreviewCard = ({ characterClass }, action) => {
  const styles = useStyles();
  return (
    <div
      onClick={action}
    >
      <div>
        <Card>
          <CardActionArea>
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
            <CardActions>
              <Button size="small">Select class</Button>
            </CardActions>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default ClassPreviewCard;
