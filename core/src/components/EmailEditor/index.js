import { Box } from "@mui/system";
import React, { useRef } from "react";
import EmailEditor from "react-email-editor";
import { DangerButton, PrimaryButton } from "../button";
import PropTypes from "prop-types";
import useEmailEditor from "./hook";
const Editor = (props) => {
  const emailEditorRef = useRef(null);
  const {
    editorStyle,
    minHeight,
    height,
    options,
    handleSubmit,
    initailValue,
    header,
    envUrl,
    onCancel,
    disabled,
  } = props;
  const saveValues = (value) => {
    handleSubmit(value);
  };
  const saveHtml = (value) => {
    handleSubmit(value);
  };
  const { handleSave, onGetHtml, onSave, onLoad, onReady, onRead } =
    useEmailEditor({
      emailEditorRef: emailEditorRef,
      saveValues: saveValues,
      saveHtml: saveHtml,
      initailValue: initailValue,
      envUrl: envUrl,
    });

  // Add this  useEffect to load template data in the editor as currently it is not getting loaded on edit
  React.useEffect(() => {
    if (initailValue && emailEditorRef.current) {
      emailEditorRef.current.editor.loadDesign(initailValue);
    }
  }, [initailValue]);

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        p={2}
        alignItems="center"
      >
        <Box>{header}</Box>
        <Box>
          {onCancel && (
            <DangerButton
              label="Cancel"
              sx={{
                borderRadius: 0.3,
                mr: 0.4,
              }}
              onClick={onCancel}
            />
          )}
          <PrimaryButton
            label="Save"
            onClick={handleSave}
            sx={{
              borderRadius: 0.3,
              mr: 0.4,
            }}
            disabled={disabled}
          />
        </Box>
      </Box>
      <Box>
        <EmailEditor
          minHeight={minHeight}
          ref={emailEditorRef}
          options={{
            ...options,
          }}
          onLoad={initailValue && onLoad}
          onReady={onReady}
          style={{
            height: height,
            ...editorStyle,
          }}
        />
      </Box>
    </Box>
  );
};

Editor.propTypes = {
  height: PropTypes.string,
  minHeight: PropTypes.string,
  handleSubmit: PropTypes.func,
  onLoad: PropTypes.func,
  onReady: PropTypes.func,
  options: PropTypes.object,
  editorStyle: PropTypes.object,
  onCancel: PropTypes.func,
  disabled: PropTypes.bool,
};

Editor.defaultProps = {
  handleSubmit: () => { },
  height: "80vh",
  disabled:false
};

export default Editor;
