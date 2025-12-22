import React, { useState, useRef, useEffect } from "react";
import Editor from "@draft-js-plugins/editor";
import { convertFromHTML, convertToHTML } from "draft-convert";
import { EditorState, convertToRaw } from "draft-js";
import { makeStyles } from "@mui/styles";
import Toolbar, { toolbarPlugin } from "./toolbar";
import PortalContainer from "../portal";

const plugins = [toolbarPlugin];

const useStyles = makeStyles({
  editor: {
    background: "#f5f5f5",
    padding: "8px",
    borderRadius: "4px",
    cursor: "text",
    color: "#3E4953",
    minHeight: "60px",
  },
  editorError: {
    "&:after": {
      content: '""',
      transform: "scaleX(1)",
      borderBottomColor: "#f44336",
      borderBottom: "2px solid",
      display: "block",
    },
  },
});

export default function MyEditor({
  input = {},
  defaultHtmlValue,
  element,
  error,
  placeholder,
}) {
  const classes = useStyles();
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const editor = useRef(null);

  function focusEditor() {
    editor.current.focus();
  }

  useEffect(() => {
    if (defaultHtmlValue) {
      const draftstate = EditorState.createWithContent(
        convertFromHTML(defaultHtmlValue)
      );
      setEditorState(draftstate);
      setTimeout(focusEditor, 500);
    }
  }, [defaultHtmlValue]);

  return (
    <div className={error && classes.editorError} onClick={() => focusEditor()}>
      <div className={classes.editor}>
        <Editor
          ref={editor}
          editorState={editorState}
          {...input}
          onChange={(value) => {
            setEditorState(value);
            input.onChange(
              editorState.getCurrentContent().hasText()
                ? convertToHTML(editorState.getCurrentContent())
                : null
            );
          }}
          placeholder={placeholder}
          plugins={plugins}
        />
        {element && (
          <PortalContainer element={element}>
            <Toolbar />
          </PortalContainer>
        )}
      </div>
    </div>
  );
}
