import {
  BaseButton,
  GoogleSigInButton,
  InvertedButton,
  ButtonSpinner,
} from "./button.styles";

/*

default

inverted

google sign in 

*/

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSigInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  );
};

/*
const BUTTON_TYPES_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}; 
*/

export default Button;
