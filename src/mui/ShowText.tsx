import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useState } from "react";

const ShowText = () => {
  const [name, setName] = useState("");
  const [show, setShow] = useState(true);

  return (
    <>
      <Stack spacing={2} direction="column">
        {show ? (
          <Typography
            variant="h2"
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "red",
              },
              borderRadius: "5px",
              backgroundColor: "lightgreen",
              border: "3px",
            }}
          >
            {name}
          </Typography>
        ) : null}
        <TextField
          label="enter your name"
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "red",
            },
            borderRadius: "5px",
            backgroundColor: "lightblue",
            border: "3px",
          }}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        {/* <Button
        variant="outlined"
        color="info"
        endIcon={<VisibilityIcon />}
        onClick={() => setShow(true)}
      >
        Show info
      </Button>
      <Button
        variant="outlined"
        color="info"
        endIcon={<VisibilityOffIcon />}
        onClick={() => setShow(false)}
      >
        Hide info
      </Button> */}
        <Button
          variant="outlined"
          color="info"
          endIcon={<ToggleOffIcon />}
          onClick={() => setShow(!show)}
        >
          Toggle info
        </Button>
      </Stack>
    </>
  );
};

export default ShowText;
