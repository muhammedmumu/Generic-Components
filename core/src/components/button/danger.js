import BaseButton from "./base";
export default function DangerButton(props) {
  const { ...rest } = props;

  return <BaseButton variant="danger" {...rest} />;
}

