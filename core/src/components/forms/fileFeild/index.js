import { Box, FormLabel, Grid, Stack, Typography } from "@mui/material";
import { Field } from "react-final-form";
import { PrimaryButton } from "../../button";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import PropTypes from "prop-types";
import { required } from "../validation";

const InternalFeild = ({
  name,
  label,
  buttonViewStyles,
  placeholder,
  inputProps,
  isMultiple,
  isDisabled,
  ...props
}) => (
  <Field name={name} {...props}>
    {({ input: { value, onChange, style, ...input }, meta }) => {
      return (
        <Stack>
          <FormLabel
            sx={{
              fontSize: 12,
              fontWeight: 500,
              mb: 0.3,
            }}
          >
            {label}
          </FormLabel>
          <input
            {...input}
            style={{ ...style }}
            hidden
            type="file"
            onChange={({ target }) => {
              onChange(target.files);
            }}
            multiple={isMultiple}
            disabled={isDisabled}
            {...props}
          />
          <Grid>
            <PrimaryButton
              label={placeholder}
              component="span"
              startIcon={<UploadFileIcon />}
              disabled={isDisabled}
              sx={theme => ({
                color: theme.palette.black[1000],
                backgroundColor: theme.palette.purple[100],
                borderRadius: 0.2,
                fontSize: 12,
                marginRight: 3,
                // maxWidth: "30%",
                ...buttonViewStyles
              })}
            />
            {isMultiple ? value && value.length > 0 && [...value]?.map((item,index)=><Box key={index} display={"flex"} alignItems={"center"} gap={1} mt={1} onClick={(e) => e.stopPropagation()} >
                    <Typography variant="subtitle3">{item?.name}</Typography>
              </Box>
              ) :
              value && value.length > 0 && (
              <Typography variant="subtitle3" sx={{pointerEvents:"none"}}>{value[0].name}</Typography>
            )}
          </Grid>
          <Typography fontSize={"11px"} mt={0.8} color={"red"}>{meta?.error && meta?.error}</Typography>
        </Stack>
      );
    }}
  </Field>
);

const FileField = (props) => {
  return (
    <label htmlFor={props.id ? props?.id : "file"}>
      <InternalFeild id={props?.id ? props?.id : "file"} isDisabled={props.isDisabled} type="file" {...props} />
    </label>
  );
};

FileField.propTypes = {
  label: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  isMultiple:PropTypes.bool,
};

FileField.defaultProps = {
  label: "Upload File",
  placeholder: "Select File",
};
export default FileField;
