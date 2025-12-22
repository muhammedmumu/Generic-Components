import BaseButton from "./base";
export default function SuccessButton(props) {
  const { ...rest } = props;

  return <BaseButton variant="success" {...rest} />;
}
