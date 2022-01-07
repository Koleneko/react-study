import React from "react";
import { Box, Typography } from "@mui/material";
import { UserCard } from "../UserCard";

const UserList = ({ comments }) => {
  return (
    <Box
      minWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        minHeight: "300px",
        maxHeight: "300px",
        border: "1px solid lightgrey",
        borderRadius: "6px",
        p: "15px",
        overflow: "auto",
      }}>
      {comments && comments.length ? (
        comments.map((comment, index) => (
          <UserCard
            key={`${comment.createdAt}_${comment.fullName}`}
            comment={comment}
            index={index}
          />
        ))
      ) : (
        <Typography variant={"h5"}>
          Комментариев пока нет. Будьте первыми!
        </Typography>
      )}
    </Box>
  );
};

export default UserList;
