import Button from '@mui/material/Button';
import styles from '../styles/Test.module.scss';
import { StyledBtn } from '../styles/components.tsx'

// const StyledBtn = styled.button`
//   background: transparent;
//   border-radius: 3px;
//   border: 2px solid palevioletred;
//   color: palevioletred;
//   margin: 0 1em;
//   padding: 0.25em 1em;
// `

const Test = () => {
  return (
    <>
      <h1 className={styles.title}>test</h1>
      <p>this is a test page</p>
      <Button className={styles.btn} variant="contained">M Button</Button>
      <StyledBtn>Btn</StyledBtn>
    </>
  )
};

export default Test;
