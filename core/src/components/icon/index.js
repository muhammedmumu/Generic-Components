import SvgIcon from "@mui/material/SvgIcon";
const Icon = ({ Icon, ...rest }) => (
  <SvgIcon component={Icon} viewBox="0 0 35 30" {...rest} />
);
export default Icon;


