import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import { AppContext } from "./AppContext";
import Form from "./components/Form";
import UserList from "./components/UserList";

const App = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const localStoredComments = JSON.parse(localStorage.getItem("comments")) || [];

    if (isNotEmptyArr(localStoredComments)) {
      setComments(localStoredComments);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const isNotEmptyArr = (arr) => Boolean(arr && arr.length);

  const onCommentDelete = (index) => {
    const res = comments.filter((_, i) => index !== i);
    setComments(res);
  };

  const onFormSubmit = (comment) => {
    comment.createdAt = new Date();
    setComments([...comments, comment]);
  };

  return (
    <Container
      sx={{
        my: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        maxWidth: "450px",
      }}>
      <AppContext.Provider value={{ onCommentDelete, onFormSubmit }}>
        <UserList comments={comments} />
        <Form />
      </AppContext.Provider>
    </Container>
  );
};

export default App;
