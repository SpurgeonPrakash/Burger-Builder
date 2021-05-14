import React from "react";
import Aux from "../../../hoc/Auxilary/Auxilary";
import Button from "../../UI/Button/Button";
const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>Delicious Burger with the following ingredients: </p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>total Price: {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout</p>
      <Button clicked={props.cancelHandler} btnType="Danger">
        CANCEL
      </Button>
      <Button clicked={props.continueHandler} btnType="Success">
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;
