import Logo from "../../assets/Logoblue.svg";
import styles from "./style.module.scss";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className={styles.flexBox}>
          <img src={Logo} alt="Logo Books Azul" />
        </div>
      </div>
    </header>
  );
};
