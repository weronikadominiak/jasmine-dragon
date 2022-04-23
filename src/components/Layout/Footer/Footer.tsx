import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.wrapper}>
      Built with ❤️ by{" "}
      <a href="https://weronika.dev/" target="_blank">
        weronika.dev
      </a>
    </footer>
  );
}

export default Footer;
