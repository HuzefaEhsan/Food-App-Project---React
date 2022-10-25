import styles from './Footer.module.css';

const Footer = function () {
  return (
    <section className={styles.footer}>
      <p class="copyright">
        &copy; Copyright - Use for learning, don't claim as your own.
      </p>
    </section>
  );
};

export default Footer;
