import { useContext, useState } from "react";
import { AppContext } from "../../AppContext";
import { Box, Button, TextField, Typography } from "@mui/material";

function Form() {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    createdAt: "",
    text: "",
  });

  const { onFormSubmit } = useContext(AppContext);

  const handleFormChange = (event) => {
    setData((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  const onFormSubmitWrapper = () => {
    onFormSubmit(data);
    setData({ fullName: "", email: "", createdAt: "", text: "" });
  };

  return (
    <Box
      sx={{
        minHeight: "300px",
        border: "1px solid lightgrey",
        borderRadius: "6px",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "space-around",
        gap: "15px",
        p: "16px",
      }}>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Обратная связь:
      </Typography>
      <TextField
        label={"Имя"}
        name="fullName"
        value={data.fullName}
        onChange={handleFormChange}
      />
      <TextField
        label={"Почта"}
        name="email"
        value={data.email}
        onChange={handleFormChange}
      />
      <TextField
        value={data.text}
        onChange={handleFormChange}
        name="text"
        label={"Текст..."}
        multiline
        minRows={5}
      />
      <Button variant="contained" onClick={onFormSubmitWrapper}>
        Отправить
      </Button>
    </Box>
  );
}

export default Form;
