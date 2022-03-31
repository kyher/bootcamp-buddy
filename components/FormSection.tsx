type props = {
  type: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

import styles from "../styles/Home.module.css";

const FormSection = ({ type, handleChange }: props) => {
  return (
    <div className={styles.formSection}>
      <h2>{type}</h2>
      <label htmlFor={type}>{type} Number 1 </label>
      <input type="text" id={type} name={type} onChange={handleChange} />
    </div>
  );
};

export default FormSection;
