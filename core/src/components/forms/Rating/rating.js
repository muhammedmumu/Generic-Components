import Rating from "@mui/material/Rating";
export default function RatingComp({ value, OnChange, ...rest }) {
  return (
    <Rating
      value={value}
      size="small"
      style={{ fontWeight: "Bold" }}
      onChange={OnChange}
      {...rest}
    />
  );
}
