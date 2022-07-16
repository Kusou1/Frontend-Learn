import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  "@global": {
    a: {
      textDecoration: "none",
    },
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
  },
}));

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Lorem Ipsum
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting,remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={4} justify="center">
                <Grid item>
                  <Link to="/pricing">
                    <Button variant="contained" color="primary">
                      Price
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/dashboard">
                    <Button variant="contained" color="primary">
                      Dashboard
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          The Notorious B.I.G.
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          SkyLimit
        </Typography>
      </footer>
    </React.Fragment>
  );
}
