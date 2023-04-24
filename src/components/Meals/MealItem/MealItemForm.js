import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const amountRef = useRef();
  const [amountisValid, setAmountisValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = +amountRef.current.value;

    if (enteredAmount < 1 || enteredAmount > 5) {
      setAmountisValid(false);
      return;
    }

    props.onAddToCart(enteredAmount);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountisValid && <p>Please enter a valid amount</p>}
    </form>
  );
};

export default MealItemForm;
