import React from "react";
import { makeStyles } from "@material-ui/core";
import { pink } from "@material-ui/core/colors";

export const useStyles = makeStyles({
  textContainer: {
    backgroundColor: "pink",
  },
  headerXmedia: {
    display: "flex",
    justifyContent: "space-between",
  },
  media: {
    justifyContent: "flex-end",
  },
  name: {
    justifyContent: "flex-start",
  },
});
