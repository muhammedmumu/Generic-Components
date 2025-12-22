import React, { useState } from "react";
import SimpleSelectComponent from "./simpleSelect";

export default {
  title: "Components/Select",
  component: SimpleSelectComponent,
  argTypes: {
    options: { control: "" },
    labelName: "",
    placeHolder: "",
    preSelected: {
      control: {
        type: "number",
      },
    },
    color: "",
  },
};
const Template = (args) => {
  const [valueSelected, setValueSelected] = useState([]);
  const handleChange = (event) => {
    setValueSelected(event.target.value);
  };
  return (
    <SimpleSelectComponent
      preSelected={valueSelected}
      onChange={handleChange}
      {...args}
    />
  );
};

export const SimpleSelect = Template.bind({});

SimpleSelect.args = {
  options: [
    {
      id: 1,
      value: "January",
    },
    {
      id: 2,
      value: "February",
    },
    {
      id: 3,
      value: "March",
    },
    {
      id: 4,
      value: "April",
    },
    {
      id: 5,
      value: "May",
    },
    {
      id: 6,
      value: "June",
    },
    {
      id: 7,
      value: "July",
    },
    {
      id: 8,
      value: "August",
    },
    {
      id: 9,
      value: "September",
    },
    {
      id: 10,
      value: "October",
    },
    {
      id: 11,
      value: "November",
    },
    {
      id: 12,
      value: "December",
    },
  ],
  labelName: "Simple Select",
  placeHolder: "Select any month",
  // preSelected: 2,
  color: "#e95433",
};
