import React, { useContext } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import CartContext from "../../store/cart-context";

const Header = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <React.Fragment>
      <header className={classes["header"]}>
        <h1>Mamma Meals</h1>
        <HeaderCartButton
          totalItem={cartCtx.items.length}
          onClick={props.onShowCart}
        ></HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Image of Meals" />
      </div>
    </React.Fragment>
  );
};

export default Header;
