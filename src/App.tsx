import "./App.css";
import MyCheckbox from "./mui/Checkbox";
import MyRadio from "./mui/Radio";
import MySelect from "./mui/Select";
import ShowText from "./mui/ShowText";
import Stack from "@mui/material/Stack";

function App() {
  return (
    <>
      <ShowText />
      <Stack spacing={2} direction="row" margin={5}>
        <MyRadio />
        <MyCheckbox />
        <MySelect />
      </Stack>
    </>
  );
}

export default App;
