import Button from '@mui/material/Button';
import styles from '../styles/Test.module.scss';
import { StyledBtn } from '../styles/components.tsx'

const Test = () => {
  return (
    <div>
      <h1 className={styles.title}>test</h1>
      <p>this is a test page</p>
      <Button className={styles.btn} variant="contained">M Button</Button>
      <StyledBtn>Btn</StyledBtn>
    </div>
  )
};

export default Test;


