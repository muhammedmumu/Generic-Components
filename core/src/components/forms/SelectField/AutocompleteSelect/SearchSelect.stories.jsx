import React, { useState } from "react";
import SelectComponent from "./index";

export default {
  title: "Components/Select",
  component: SelectComponent,
  argTypes: {
    options: { control: "" },
    labelName: "",
    placeHolder: "",
    color: "",
  },
};
const Template = (args) => {
  return <SelectComponent onChange={() => {}} {...args} />;
};

export const SearchSelect = Template.bind({});

SearchSelect.args = {
  options: [
    {
      value: "all",
      label: "All",
      color: "",
    },
    {
      value: "Apartments",
      label: "Apartments",
      color: "#c5302a",
    },
    {
      value: "apartmentguvaluee",
      label: "Apartment Guvaluee",
      color: "#201a2d",
    },
    {
      value: "apartmentratings",
      label: "Apartment Ratings",
      color: "#339fe0",
    },
    {
      value: "facebook",
      label: "Facebook",
      color: "#fbb03a",
    },
    {
      value: "google",
      label: "Google",
      color: "#6e6883",
    },
    {
      value: "modernmessage",
      label: "Modern Message",
      color: "#324296",
    },
    {
      value: "rent",
      label: "Rent",
      color: "#f7e634",
    },
    {
      value: "yellowpages",
      label: "Yellow Pages",
      color: "#65c72b",
    },
    {
      value: "yelp",
      label: "Yelp",
      color: "#9f2729",
    },
  ],
  labelName: "Multiple Select",
  placeHolder: "Select any option",
  color: "#e95883",
};
