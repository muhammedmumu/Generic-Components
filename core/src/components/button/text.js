import BaseButton from "./base";
export default function TextButton(props) {
  const { ...rest } = props;
  return <BaseButton variant="text" {...rest} />;
}
