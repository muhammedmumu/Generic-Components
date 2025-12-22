import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the styles
import PropTypes from "prop-types";
import EditorToolBar, { modules, formats } from "./EditorToolbar";

const QuillEditor = ({
  onChange,
  value,
  defaultValue,
  height,
  editorStyles,
  ...props
}) => {
  const [val, setval] = useState("");
  const reactQuillRef = React.useRef(null);
  const [quillRef, setQuillRef] = useState(null);

  useEffect(() => {
    if (value) {
      setval(value);
    }
  }, [value]);

  useEffect(() => {
    if (defaultValue) {
      setval(defaultValue);
    }
  }, [defaultValue]);

  // create and customise the error message
  function alertErrorPopUp() {
    const errorContainer = document.createElement("p"); // Create a div for the error message
    const editorWrapper = document.querySelector(".ql-tooltip.ql-editing");

    errorContainer.className = "link-error-message";
    errorContainer.textContent = "Please enter a valid URL"; // Set the error message text

    // add styles to error message
    errorContainer.style.color = "red";
    errorContainer.style.margin = "0";
    errorContainer.style.textAlign = "center";
    errorContainer.style.fontSize = "12px";

    // append to wrapper
    editorWrapper && editorWrapper.appendChild(errorContainer);
  }

  // remove error message after link is beign validated
  function removeErrorMessage() {
    const errorContainer = document.querySelector(".link-error-message");
    if (errorContainer) {
      errorContainer.remove();
    }
  }

  useEffect(() => {
    const attachQuillRefs = () => {
      if (
        reactQuillRef.current &&
        typeof reactQuillRef.current.getEditor === "function"
      ) {
        setQuillRef(reactQuillRef.current.getEditor());
      }
    };

    attachQuillRefs();
  }, [reactQuillRef]);

  useEffect(() => {
    if (quillRef) {
      const tooltipSave = quillRef.theme.tooltip.save;

      // overide save the functionality
      quillRef.theme.tooltip.save = function () {
        const value = this.textbox.value;
        // Add your URL validation logic using a regular expression
        const urlPattern =
          /^(https:\/\/|http:\/\/)([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(:[0-9]+)?(\/[a-zA-Z0-9-_.?=%&]*)*$/;

        if (urlPattern.test(value)) {
          tooltipSave.call(this);
          removeErrorMessage();
        } else {
          if (!document.querySelector(".link-error-message")) {
            alertErrorPopUp();
          }
        }
      };

      // Listen for selection changes, if the user clicks outside the tooltip without saving
      const handleSelectionChange = (range, oldRange, source) => {
        if (
          quillRef.theme.tooltip.root.style.display !== "none" &&
          source === "user" &&
          document.querySelector(".link-error-message")
        ) {
          removeErrorMessage();
        }
      };

      // Attach the event listener if quillRef is available
      quillRef.on && quillRef.on("selection-change", handleSelectionChange);

      // Clean up the event listener when the component is unmounted
      return () => {
        quillRef.off && quillRef.off("selection-change", handleSelectionChange);
      };
    }
  }, [quillRef]);

  return (
    <Box
      sx={theme => ({
        fontFamily: "Poppins",
        height: "40vh",
        "& .ql-container": {
          fontSize: "16px",
          fontFamily: "Poppins",
        },
        "& .quill > .ql-container > .ql-editor.ql-blank::before": {
          fontStyle: "normal",
          color: theme.palette.grey[950],
        },
        "& .ql-toolbar .ql-formats": {
          border: " 1px solid #ccc",
          margin: "2px",
          padding: "4px",
        }
      })}
      data-text-editor="editor"
    >
      <div className="text-editor">
        <EditorToolBar />
        <div id="text-editor-wrapper">
          <ReactQuill
            {...props}
            theme="snow"
            ref={reactQuillRef}
            value={val}
            onChange={(value) => {
              setval(value);
              onChange(value.toString("html"));
            }}
            style={{ height: height, ...editorStyles }}
            bounds={'[data-text-editor="editor"]'} // avoides tooltip cropping
            modules={modules}
            formats={formats}
          />
        </div>
      </div>
    </Box>
  );
};

QuillEditor.defaultProps = {
  height: "35vh",
  fontFamily: "Poppins",
};

export default QuillEditor;
