import React from "react";
import createToolbarPlugin, {
  Separator,
} from "@draft-js-plugins/static-toolbar";
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  CodeButton,
  HeadlineOneButton,
  HeadlineTwoButton,
  HeadlineThreeButton,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton,
  CodeBlockButton,
} from "@draft-js-plugins/buttons";

// import "./toolbar.module.css";# importing at global level

export const toolbarPlugin = createToolbarPlugin();
const { Toolbar } = toolbarPlugin;

export default function ToolbarRender() {
  return (
    <Toolbar>
      {
        // may be use React.Fragment instead of div to improve perfomance after React 16
        (externalProps) => (
          <>
            <BoldButton {...externalProps} />
            <ItalicButton {...externalProps} />
            <UnderlineButton {...externalProps} />
            {/* <CodeButton {...externalProps} /> */}
            {/* <Separator {...externalProps} /> */}
            <UnorderedListButton {...externalProps} />
            <OrderedListButton {...externalProps} />
            {/* <BlockquoteButton {...externalProps} /> */}
          </>
        )
      }
    </Toolbar>
  );
}
