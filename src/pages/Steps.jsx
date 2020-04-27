import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Players } from "./Players";
import { Instrumental } from "./Instrumental";
import { Logo } from "../component/Logo";
import { Grow } from "@material-ui/core";
import { CountDown } from "../component/CountDown";
import { Footer } from "../component/Footer";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
  },
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "70px",
  },
  activeRoot: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return [
    "Choisir le blase des joueurs",
    "Choisir l'instru",
    "Commencer a jouer",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Players></Players>;
    case 1:
      return <Instrumental />;
    case 2:
      return <CountDown />;
    default:
      return false;
  }
}

export const VerticalLinearStepper = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(5);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(4);
  };

  const setActiveStepOrDie = (index) => {
    if (activeStep === index) {
      handleReset();
    } else setActiveStep(index);
  };

  return (
    <div className={classes.container}>
      {!getStepContent(activeStep) && <Logo></Logo>}
      <div
        className={
          !getStepContent(activeStep) ? classes.root : classes.activeRoot
        }
      >
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>
                <span
                  onClick={() => setActiveStepOrDie(index)}
                  style={{ fontFamily: "Barlow" }}
                  class="font-weight-bold"
                >
                  {label}
                </span>
              </StepLabel>
              <StepContent style={{ maxWidth: "80%" }}>
                <Typography>{getStepContent(index)}</Typography>
                <div className={classes.actionsContainer}> </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </div>
      {activeStep === 2 && <Footer></Footer>}
    </div>
  );
};
