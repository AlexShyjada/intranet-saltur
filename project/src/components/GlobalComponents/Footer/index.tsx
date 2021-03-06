import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={`container ${styles.gridFooter}`}>
        <img
          className={styles.logoSalturFooter}
          src="/assets/logosaltur2.svg"
          alt="Logo Saltur"
        />
        <img
          className={styles.logoNTI}
          src="/assets/logonti2.svg"
          alt="Logo NTI"
        />
        <div className={`${styles.colunaDeLinks} ${styles.one}`}>
          <a
            className={styles.linkFooter}
            href="http://177.20.6.123/SIGP/portal/"
            target="_blank"
            rel="noreferrer"
          >
            Contracheque
          </a>
          <a
            className={styles.linkFooter}
            href="http://www.dom.salvador.ba.gov.br/"
            target="_blank"
            rel="noreferrer"
          >
            Diario Oficial
          </a>
          <a
            className={styles.linkFooter}
            href="https://www.esalvador.salvador.ba.gov.br/login"
            target="_blank"
            rel="noreferrer"
          >
            eSalvador
          </a>
          <a
            className={styles.linkFooter}
            href="https://www.tcm.ba.gov.br"
            target="_blank"
            rel="noreferrer"
          >
            TCM
          </a>
        </div>

        <div className={`${styles.colunaDeLinks} ${styles.two}`}>
          <a
            className={styles.linkFooter}
            href="http://curtacarnaval.com.br/"
            target="_blank"
            rel="noreferrer"
          >
            Carnaval de Salvador
          </a>
          <a
            className={styles.linkFooter}
            href="http://www.salvadorvaidebike.salvador.ba.gov.br/"
            target="_blank"
            rel="noreferrer"
          >
            SSA Vai de Bike
          </a>
          <a
            className={styles.linkFooter}
            href="http://www.festivaldacidade.salvador.ba.gov.br/"
            target="_blank"
            rel="noreferrer"
          >
            Festival da Cidade
          </a>
          <a
            className={styles.linkFooter}
            href="http://reveillon.salvador.ba.gov.br/"
            target="_blank"
            rel="noreferrer"
          >
            Virada Salvador
          </a>
        </div>
      </div>
      <div className={styles.copy}>
        <p className={`${styles.textCopy} container`}>
          Copyright &copy; 2021 - Desenvolvido por NTI - Empresa Salvador
          Turismo SALTUR
        </p>
      </div>
    </footer>
  );
}
