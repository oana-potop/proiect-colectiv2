import * as React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import {
  Avatar,
  Button,
  CardMedia,
  Container,
  SvgIcon,
  Typography,
  IconButton,
  CardActionArea,
} from "@material-ui/core";
import { DeleteOutlined } from "@mui/icons-material";
import { useStyles } from "./styles";

const CharacterPreviewCard = ({ charchar, handleDelete }) => {
  return (
    <div>
      <div>
        <Card>
          <CardActionArea>
            <div>
              <CardHeader
                action={
                  <IconButton
                    color="secondary"
                    onClick={() => handleDelete(charchar.id)}
                  >
                    <DeleteOutlined />
                  </IconButton>
                }
                title={charchar.name}
              />
            </div>
            <CardContent>
              <Typography>
                <b>Level: </b> {charchar.level}
              </Typography>
              <Typography>
                <b>Class: </b> {charchar.characterClass.name}
              </Typography>
              <Typography>
                <b>Race: </b> {charchar.race.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default CharacterPreviewCard;
