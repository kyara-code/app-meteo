import React, { ReactElement } from "react";
import { Button } from "@mui/material";
import FormCap from "../form-cap/form-cap";
import styles from "./Header.module.css";

type MyProps = {};
type MyState = { form: ReactElement; buttonText: string; closedForm: boolean };

class Header extends React.Component<MyProps, MyState> {
  constructor(props) {
    super(props);
    this.state = {
      form: <div></div>,
      buttonText: "Click here to start",
      closedForm: true,
    };
  }

  changeButtonText = () => {
    let newButtonText = this.state.closedForm
      ? "Close form"
      : "Click here to start";
    let newClosedForm = !this.state.closedForm;
    this.setState({ buttonText: newButtonText, closedForm: newClosedForm });
  };

  renderForm = () => {
    var newForm;
    if (this.state.closedForm) {
      newForm = (
        <div>
          <FormCap onClose={this.renderForm}></FormCap>
        </div>
      );
    } else {
      newForm = <div></div>;
    }

    this.changeButtonText();
    this.setState({ form: newForm });
  };

  render() {
    return (
      <div className={styles.Header}>
        <img
          src={require("../../assets/img/stacked-steps-haikei (1).png")}
          alt=""
          className={styles.image}
        />
        <div className={styles.titleHorizontal}>
          <div className={styles.titleVertical}>
            <div className={styles.title}>
              <h1>Discover your Weather</h1>
              <Button variant="outlined" onClick={this.renderForm}>
                {this.state.buttonText}
              </Button>
            </div>
          </div>
        </div>
        {this.state.form}
      </div>
    );
  }
}

export default Header;
