import Footer from "./Footer/Footer";
import Header from "./Header/Header";

import styles from "./Layout.module.scss";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
