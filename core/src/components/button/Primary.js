import BaseButton from "./base";
export default function PrimaryButton(props) {
  const { ...rest } = props;

  return <BaseButton variant="contained" {...rest} />;
}

