import CalculatorLogo from "./assets/investment-calculator-logo.png";

const Header = ({ children }) => {
  return (
    <header id="header">
      <img src={CalculatorLogo} alt="" />
      <h1>{children}</h1>
    </header>
  );
};

export default Header;
