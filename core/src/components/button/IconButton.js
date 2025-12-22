import IconButtonBase from "./IconButtonBase";
export default function IconButton(props) {
  const { ...rest } = props;

  return <IconButtonBase variant="primary" {...rest} />;
}

