import { useContext } from "react";
import { AppContext } from "../../AppContext";
import { Card, Divider, IconButton, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import PersonIcon from "@mui/icons-material/Person";
import DeleteIcon from "@mui/icons-material/Delete";

export const UserCard = ({ comment, index }) => {
  const { onCommentDelete } = useContext(AppContext);

  const formatedDate = new Date(comment.createdAt).toLocaleDateString("ru-Ru");

  return (
    <Card sx={{ minHeight: "110px" }}>
      <Box
        sx={{
          p: 2,
          display: "flex",
          gap: "15px",
        }}>
        <PersonIcon sx={{ alignSelf: "center" }} />
        <Stack>
          <Typography fontWeight={700}>{comment.fullName}</Typography>
          <Typography fontWeight={500}>{comment.text}</Typography>
        </Stack>
        <IconButton
          aria-label="delete"
          sx={{
            ml: "auto",
          }}
          onClick={() => onCommentDelete(index)}>
          <DeleteIcon />
        </IconButton>
      </Box>
      <Divider light />
      <Typography
        fontWeight={300}
        fontSize={"12px"}
        sx={{
          color: "lightgray",
          pt: "5px",
          pl: "5px",
        }}>
        {formatedDate}
      </Typography>
    </Card>
  );
};
