import DrawerComponent from "./DrawerWithIcons";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { ListItemButton } from "@mui/material";
export default {
  title: "Components/Drawer",
  component: DrawerComponent,
  argTypes: {},
};
const Child = () => {
  const open = true;
  return (
    <List>
      <Divider />
      {["All mail", "Trash", "Spam"].map((text, index) => (
        <ListItemButton
          key={text}
          sx={[{
            minHeight: 48,
            px: 2.5
          }, open ? {
            justifyContent: "initial"
          } : {
            justifyContent: "center"
          }]}
        >
          <ListItemIcon
            sx={[{
              minWidth: 0,
              justifyContent: "center"
            }, open ? {
              mr: 3
            } : {
              mr: "auto"
            }]}
          >
            {index % 2 === 0 ? (
              <InboxIcon
                style={{
                  color: "white",
                }}
              />
            ) : (
              <MailIcon
                style={{
                  color: "white",
                }}
              />
            )}
          </ListItemIcon>
          <ListItemText
            primary={text}
            sx={[{
              color: "white"
            }, open ? {
              opacity: 1
            } : {
              opacity: 0
            }]}
          />
        </ListItemButton>
      ))}
    </List>
  );
};
const Template = (args) => (
  <DrawerComponent {...args}>
    {({ close }) => {
      return <Child />;
    }}
  </DrawerComponent>
);

export const Drawer = Template.bind({});
Drawer.args = {
  logoUrl:
    "https://www.tailorbrands.com/wp-content/uploads/2020/07/twitter-logo.jpg",
  logoWidth: 90,
  logoHeight: 80,
};
