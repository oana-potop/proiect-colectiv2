import * as React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import {
  Avatar,
  CardMedia,
  Container,
  Grid,
  Paper,
  SvgIcon,
  Typography,
} from "@material-ui/core";
import { useStyles } from "./styles";
import { borders } from '@mui/system';

const RacialFeat = (featName) =>{
    const styles = useStyles();
    return(
        <div>
            <Typography sx={{ border: 1, borderColor: 'black'}}>
                <b> {featName} </b>
            </Typography>
        </div>
    )
}

export default RacialFeat;