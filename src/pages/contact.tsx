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
      <FormControl fullWidth sx={{ m: "0.5rem" }}>
        <InputLabel htmlFor="outlined-adornment-amount">お名前</InputLabel>
        <OutlinedInput
          id="name"
          name="name"
          value={formValues.name}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: "0.5rem" }}>
        <InputLabel htmlFor="outlined-adornment-amount">メールアドレス</InputLabel>
        <OutlinedInput
          id="mail"
          name="mail"
          value={formValues.mail}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: "0.5rem" }}>
        <InputLabel htmlFor="outlined-adornment-amount">お問い合わせ内容</InputLabel>
        <OutlinedInput
          id="message"
          name="message"
          value={formValues.message}
          onChange={handleInputChange}
        />
      </FormControl>

      <br />
      <Button type="submit">show result</Button>
      <p>name: {formValues.name}</p>
      <p>mail: {formValues.mail}</p>
      <p>message: {formValues.message}</p>
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


