import styles from '../styles/Container.module.css';

import Header from './Header';
import Footer from './Footer';

export default function Container({ children }) {
  return (
    <>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  );
}
