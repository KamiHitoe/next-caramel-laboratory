import { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from "@mui/material/Button";

const Form = () => {
  const defaultValues = {
    name: "",
    mail: "",
    message: "",
  };
  const [formValues, setFormValues] = useState(defaultValues);

  // event handler
  const handleInputChange = (e) => {
    // get e.target.name, e.target.value
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      // variable key
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        alignItems="center"
        justify="center"
        direction="column"
      >
        <Grid item>
          <TextField
            id="name"
            name="name"
            label="お名前"
            type="text"
            value={formValues.name}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item>
          <TextField
            id="mail"
            name="mail"
            label="メールアドレス"
            type="text"
            value={formValues.mail}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item>
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-amount">お問い合わせ内容</InputLabel>
            <OutlinedInput
              id="message"
              value={formValues.message}
              onChange={handleInputChange}
              label="お問い合わせ内容"
            />
          </FormControl>
        </Grid>

        <br />
        <Button type="submit">show result</Button>
      </Grid>
    </form>
  );
};

const Contact = () => {
  return (
    <div>
      <h1 className="subtitle">お問い合わせ</h1>
      <Form />
    </div>
  );
};

export default Contact;


