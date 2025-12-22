import React, { useState } from "react";
import MultipleSelectComponent from "./MultiSelect";

export default {
  title: "Components/Select",
    component: MultipleSelectComponent,
  argTypes: {
    options: { control: "" },
    labelName: "",
    placeHolder: "",
    color: "",
  },
};
const Template = (args) => {
  const [valueSelected, setValueSelected] = useState([]);
  const handleChange = (event) => {
    setValueSelected(event.target.value);
  };
  return (
    <MultipleSelectComponent
      preSelected={valueSelected}
      onChange={handleChange}
      {...args}
    />
  );
};

export const MultiSelect = Template.bind({});

MultiSelect.args = {
  options: [
    {
      id: "all",
      value: "All",
      color: "",
    },
    {
      id: "Apartments",
      value: "Apartments",
      color: "#c5302a",
    },
    {
      id: "apartmentguide",
      value: "Apartment Guide",
      color: "#201a2d",
    },
    {
      id: "apartmentratings",
      value: "Apartment Ratings",
      color: "#339fe0",
    },
    {
      id: "facebook",
      value: "Facebook",
      color: "#fbb03a",
    },
    {
      id: "google",
      value: "Google",
      color: "#6e6883",
    },
    {
      id: "modernmessage",
      value: "Modern Message",
      color: "#324296",
    },
    {
      id: "rent",
      value: "Rent",
      color: "#f7e634",
    },
    {
      id: "yellowpages",
      value: "Yellow Pages",
      color: "#65c72b",
    },
    {
      id: "yelp",
      value: "Yelp",
      color: "#9f2729",
    },
  ],
  labelName: "Multiple Select",
  placeHolder: "Select any option",
  color: "#e95883",
};
