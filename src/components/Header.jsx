import calculatorLogo from "../assets/investment-calculator-logo.png";

const Header = ({ children }) => {
  return (
    <header id="header">
      <img src={calculatorLogo} alt="Logo show ing a money bag" />
      <h1>{children}</h1>
    </header>
  );
};

export default Header;
