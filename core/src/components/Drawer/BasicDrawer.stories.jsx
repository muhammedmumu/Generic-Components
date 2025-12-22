import DrawerComponent from "./BasicDrawer";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ListItemButton from "@mui/material/ListItemButton";

export default {
  title: "Components/Drawer",
  component: DrawerComponent,
  argTypes: {
    direction: {
      options: ["left", "right", "top", "bottom"],
      control: { type: "select" },
    },
  },
};
const Child = () => {
  const anchor = "left";
  return (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItemButton key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItemButton key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

const Template = (args) => (
  <DrawerComponent direction="left" label="Open Drawer" {...args}>
    {({}) => {
      return <Child />;
    }}
  </DrawerComponent>
);

export const BaicDrawer = Template.bind({});
BaicDrawer.args = {};
