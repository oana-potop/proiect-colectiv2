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
  FormControlLabel,
  Checkbox,
  ListItem,
  List,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { DeleteOutlined } from "@mui/icons-material";
import { useStyles } from "./styles";
import { Divider } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import CircleIcon from '@mui/icons-material/Circle';
import StarIcon from '@mui/icons-material/Star';
const CharacterOverview2 = ({character, openDialog, onCloseDialog}) => {

  const firstSavingThrows = character?.savingThrows?.filter(element => element.type === "Strength" || element.type === "Dexterity" || element.type === "Constitution");
  const secondSavingThrows = character?.savingThrows?.filter(element => element.type === "Intelligence" || element.type === "Wisdom" || element.type === "Charisma");
  
  const [openImage, setOpenImage] = useState(false);

  const handleClickOpenImage = () => {
    setOpenImage(true);
  };

  const handleCloseImage = () => {
    setOpenImage(false);
  };

  return (
    <div>
    <div>
      <Dialog open={openDialog} onClose={onCloseDialog} fullWidth maxWidth='md'>
      <Container>
        
        <Grid container spacing={12} justifyContent="space-between" alignItems="center" style={{marginBottom: "20px", marginTop: "20px", marginLeft: "20px"}}>
          <Grid item>
            <Typography variant="h4">
              {character?.name} 
            </Typography>
          </Grid>
          <Grid item style={{marginRight: "40px"}}>
            <Typography variant="h5">
              <b>Level: </b> {character?.level}
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={10} justifyContent="space-evenly" alignItems="center" style={{marginBottom: '15px', marginTop: '10px'}} >
          <Paper variant="outlined" style={{backgroundColor: "#ffcdd2"}}>
            <Typography style={{textAlign: 'center', color: "secondary", lineHeight: '40px', width: '100px',}}><b>HP</b></Typography>
            <Typography style={{textAlign: 'center', color: "secondary", lineHeight: '40px', width: '100px'}}>{character.hp}</Typography>
          </Paper>
          <Paper variant="outlined" style={{backgroundColor: "#ffcdd2"}}>
            <Typography style={{textAlign: 'center', color: "secondary", lineHeight: '40px', width: '100px'}}><b>Initiative</b></Typography>
            <Typography style={{textAlign: 'center', color: "secondary", lineHeight: '40px', width: '100px'}}>{character.initiative}</Typography>
          </Paper>
          <Paper variant="outlined" style={{backgroundColor: "#ffcdd2"}}>
            <Typography style={{textAlign: 'center', color: "secondary", lineHeight: '40px', width: '100px'}}><b>AC</b></Typography>
            <Typography style={{textAlign: 'center', color: "secondary", lineHeight: '40px', width: '100px'}}>{character.ac}</Typography>
          </Paper>
        </Grid>

        <Divider variant="middle" />


        <Container style={{display: 'flex', marginTop: "10px"}}>
          <Container style={{flexGrow: 1, marginBottom: "10px"}}>
          <Box
            sx={{
            display: "flex",
            flexDirection: "column",
            }}
          >
          {character?.baseStats?.map((stat) => (
            <StatBox statName={stat.type} statValue={stat.value} flexItem />
          ))}
          </Box>
          </Container>
          <Divider orientation="vertical" flexItem style={{marginRight: "70px", marginLeft: "-170px"}}>
          </Divider>
          <Container style={{flexGrow: 1, marginLeft: "-100px"}}>
            <Container>
              <Typography variant="h6">
                <b>Race: </b> {character?.race?.name}
              </Typography>
              <Typography variant="h6">
                <b>Class: </b> {character?.characterClass?.name}
              </Typography>
              <Typography variant="h6">
                <b>Background: </b> {character?.background?.name}
              </Typography>
            </Container>
            <Container style={{marginTop: "10px"}}>
              <Typography variant="subtitle1"><b>Skill Proficiencies</b></Typography>
              <Container style={{marginLeft: "-25px"}}>
                <List dense="true">
                  {character?.skillProficiencies?.map((skill) => (
                    <ListItem>
                      <ListItemIcon>
                        <StarIcon color="primary" />
                      </ListItemIcon>
                       <ListItemText primary={skill} />
                    </ListItem>
                  ))}
                </List>
              </Container>
            </Container>
            
            
          </Container>
          <Container>
          <Container>
              <Typography variant="h6">
                <b>Saving Throws</b>
              </Typography>
              <Container style={{display: "flex", marginLeft: "-35px"}}>
                <Container style={{flexGrow: 1, marginleft: "-20px"}}>
                  {firstSavingThrows.map((element) => (
                    <Typography>
                      <b>{element.type.substring(0,3)}:</b> {element.value}
                    </Typography>
                  ))}
                </Container>
                <Container style={{flexGrow: 1, marginLeft: "-10px"}}>
                  {secondSavingThrows.map((element) => (
                    <Typography>
                      <b>{element.type.substring(0,3)}:</b> {element.value}
                    </Typography>
                  ))}
                </Container>
              </Container>
            </Container>
            <Container style={{marginTop: "30px"}}>
                <AttributeRating character={character} />
            </Container>
            <Button onClick={handleClickOpenImage} style={{marginTop: "10px"}}>
              See image
            </Button>
            <Dialog  open={openImage} onClose={handleCloseImage}>
              <img src={character?.image} />
            </Dialog>
          </Container>
        </Container>
        
      </Container>
      </Dialog>
    </div>
  </div>
  )

}

export default CharacterOverview2;