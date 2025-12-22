import { common } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import RichTextEditor from "react-rte";
import DOMPurify from "dompurify";

export function HtmlContent({ text }) {
  const isImage = (html) => /<img/g.test(html);
  return (
    <>
      <div>
        <div dangerouslySetInnerHTML={{ __html: isImage(DOMPurify.sanitize(text, { ALLOWED_ATTR: ['target', 'href', 'style'] })) ? DOMPurify.sanitize(text.replace(/<img/g, '<img style="width: 150px; height: 100%"; object-fit: "contain"')) : DOMPurify.sanitize(text, { ALLOWED_ATTR: ['target', 'href', 'style'] }) }}></div>
      </div>
    </>
  );
}

export const requiredEditor = (value) => {
  if (typeof value === "string") {
    const state = RichTextEditor.createValueFromString(value, "html");
    let isEmpty = !state.getEditorState().getCurrentContent().hasText();
    let content = state
      .getEditorState()
      .getCurrentContent()
      .getPlainText()
      .split(/[\n\r]/g);
    if (isEmpty || content.every((item) => !item)) {
      return "Required";
    } else {
      return undefined;
    }
  } else if (value) {
    return undefined;
  }
  return "Required";
};

export const emptyEditor = (value) => {
  if (typeof value === "string") {
    const state = RichTextEditor.createValueFromString(value, "html");
    let isEmpty = !state.getEditorState().getCurrentContent().hasText();
    let content = state
      .getEditorState()
      .getCurrentContent()
      .getPlainText()
      .split(/[\n\r]/g);
    if (content.every((item) => !item)) {
      return "Remove Blank Spaces";
    }
  }
  return undefined;
};

export default function Editor({ onChange, value, defaultValue, ...props }) {
  const [val, setval] = useState(RichTextEditor.createEmptyValue());
  useEffect(() => {
    if (value) {
      const editorState = RichTextEditor.createValueFromString(value, "html");
      if (editorState._cache.html == val._cache.html) return;
      setval(editorState);
    }
  }, [value]);
  useEffect(() => {
    if (defaultValue) {
      const editorState = RichTextEditor.createValueFromString(
        defaultValue,
        "html"
      );
      if (editorState._cache.html == val._cache.html) return;
      setval(editorState);
    }
  }, [defaultValue]);
  return (
    <RichTextEditor
      {...props}
      value={val}
      onChange={(value) => {
        setval(value);
        onChange(value.toString("html"));
      }}
    />
  );
}
