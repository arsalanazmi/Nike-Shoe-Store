import React from "react";
import { Link } from "react-router-dom";
import Shoes from "../../Json/KidsShoes.json";
import {
  makeStyles,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  heading: {
    color: "#869ba0",
    textAlign: "center",
    textDecoration: "underline",
    marginTop: "3%",
    [theme.breakpoints.down("sm")]: {
      fontSize: "35px",
    },
  },
  root: {
    padding: "3% 10% 0 10%",
    [theme.breakpoints.down("sm")]: {
      padding: "3% 2%",
    },
    [theme.breakpoints.down("md")]: {
      padding: "3% 4%",
    },
  },
  card: {
    margin: "3%",
    [theme.breakpoints.between(0, 350)]: {
      margin: "2%",
    },
  },
  media: {
    height: 300,
    [theme.breakpoints.down("sm")]: {
      height: 130,
    },
    [theme.breakpoints.down("md")]: {
      height: 170,
    },
  },
  cardContent: {
    textAlign: "center",
    "&:hover": {
      color:'#8e8b8b'
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "19px",
      height: 50,
      marginTop: -10,
    },
  },
  link: {
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

const KidsShoes = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h3" className={classes.heading}>
        Kids Shoes
      </Typography>

      <Grid className={classes.root} container>
        {Object.keys(Shoes).map((keyName) => {
          const shoe = Shoes[keyName];
          return (
            <Grid key={keyName} item xs={6} sm={4} md={4}>
              <Link to={`/kids_shoes/${keyName}`} className={classes.link}>
                <Card className={classes.card} elevation={4}>
                  <CardMedia
                    className={classes.media}
                    image={shoe.img}
                    title={shoe.name}
                  />
                  <CardContent>
                    <Typography
                      className={classes.cardContent}
                      variant="h6"
                      component="h2"
                    >
                      {shoe.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default KidsShoes;