import React from "react";
import ContainedButton from "./base";
import FileDownloadIcon from '@mui/icons-material/FileDownload';

export default {
  title: "Components/ContainedButton",
  component: ContainedButton,
  argTypes: {
    color: {
      control: { type: "select" },
      options: ["primary", "secondary", "success", "error", "info", "warning"],
    },
    variant: {
      control: { type: "select" },
      options: ["contained", "outlined", "text"],
    },
    startIcon: { control: false },
    endIcon: { control: false },
  },
};

const Template = (args) => (
  <ContainedButton
    {...args}
    startIcon={args.startIcon ? <FileDownloadIcon /> : undefined}
  />
);

export const Default = Template.bind({});
Default.args = {
  label: "Click Me",
  variant: "contained",
  color: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary",
  variant: "contained",
  color: "secondary",
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: "Outlined",
  variant: "outlined",
  color: "primary",
};

export const WithStartIcon = Template.bind({});
WithStartIcon.args = {
  label: "With Icon",
  startIcon: true,
  variant: "contained",
  color: "primary",
};
