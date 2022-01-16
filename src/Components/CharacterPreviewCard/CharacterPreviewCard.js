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
import { useState } from "react";
import CharacterOverview2 from "../CharacterOverview/CharacterOverview2";

const CharacterPreviewCard = ({ charchar, handleDelete }) => {

  const [openDialog, setOpenDialog] = useState(false);

  const onOpenDialog = () => {
    setOpenDialog(true);
  }
  const onCloseDialog = () => {
    setOpenDialog(false);
  }

  return (
    <div>
      <div
        onClick={() => {
          onOpenDialog();
        }}
      >
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
      <CharacterOverview2 openDialog={openDialog} character={charchar} onCloseDialog={onCloseDialog} />
    </div>
  );
};

export default CharacterPreviewCard;
