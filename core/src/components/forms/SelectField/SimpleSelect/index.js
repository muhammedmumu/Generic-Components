import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect({ label, data, selectedValue,defaultValue, styles }) {
  const classes = useStyles();
  const [value, setvalue] = React.useState(defaultValue);

  const handleChange = (event) => {
    setvalue(event.target.value);
    selectedValue(event.target.value);
  };
  return (
    <div>
      <Select labelId={label} id="select" value={value} onChange={handleChange} style={{ ...styles }}>
        {data?.map((item) => (
          <MenuItem value={item.id}>{item.value}</MenuItem>
        ))}
      </Select>
    </div>
  );
}
