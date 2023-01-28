import styles from "../common/Common.module.sass";

interface props {
  children: string;
}

const Button = ({ children }: props): JSX.Element => {
  return (
    <>
      <button className={styles.Button}>
        <span>{children}</span>
      </button>
    </>
  );
};

export default Button;
