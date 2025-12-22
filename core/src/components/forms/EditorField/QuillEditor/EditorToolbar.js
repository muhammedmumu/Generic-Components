import React from "react";
import { Quill } from "react-quill";
import setAlertMessage from "view/Snackbar/actions";
import { imageFormats, imageSize } from "./constant";

// Custom Undo button icon component for Quill editor.
const CustomUndo = () => (
  <svg viewBox="0 0 18 18">
    <polygon className="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10" />
    <path
      className="ql-stroke"
      d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"
    />
  </svg>
);

// Redo button icon component for Quill editor
const CustomRedo = () => (
  <svg viewBox="0 0 18 18">
    <polygon className="ql-fill ql-stroke" points="12 10 14 12 16 10 12 10" />
    <path
      className="ql-stroke"
      d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"
    />
  </svg>
);

// Undo and redo functions for Custom Toolbar
function undoChange() {
  this.quill.history.undo();
}
function redoChange() {
  this.quill.history.redo();
}

// Add sizes to whitelist and register them
const Size = Quill.import("formats/size");
Size.whitelist = ["extra-small", "small", "medium", "large"];
Quill.register(Size, true);

// Add fonts to whitelist and register them
const Font = Quill.import("formats/font");
Font.whitelist = [
  "arial",
  "comic-sans",
  "courier-new",
  "georgia",
  "helvetica",
  "lucida",
];
Quill.register(Font, true);

// create and customise the error message
function alertErrorPopUp() {
  const errorContainer = document.createElement('p'); // Create a div for the error message
  const editorWrapper =  document.querySelector(".ql-tooltip.ql-editing");

  errorContainer.className = 'link-error-message';
  errorContainer.textContent = 'Please enter a valid URL'; // Set the error message text

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
  const errorContainer = document.querySelector('.link-error-message');
  if (errorContainer) {
    errorContainer.remove();
  }
}

// for link to be customised and validation
const SnowTheme = Quill.import("themes/snow");
SnowTheme.DEFAULTS.modules.toolbar.handlers.link = function newLink(value) {
  if (value) {
    const range = this.quill.getSelection();
    if (range == null || range.length === 0) return;

    let preview = this.quill.getText(range);

    // Keep the preview empty at first
    preview = "";

    const tooltip = this.quill.theme.tooltip;

    let urlPattern = /^(https:\/\/|http:\/\/)([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(:[0-9]+)?(\/[a-zA-Z0-9-_.?=%&]*)*$/;

    // Override save functionality for validation
    tooltip.save = function () {
      let value = this.textbox.value;
      if (urlPattern.test(value)) {
        this.quill.formatText(
          range.index,
          range.length,
          { link: value },
          "user"
        );
        this.hide(); // Hide the tooltip after saving
        removeErrorMessage();
      } else {
        if (!document.querySelector('.link-error-message')) {
          alertErrorPopUp();
        }
      }
    };

    // For edit
    const link = this.quill.getFormat(range.index, range.length).link;
    tooltip.edit("link", link);

    // Listen for selection changes, if user clicks outside the pop up
    this.quill.on('selection-change', (range, oldRange, source) => {
      if (tooltip.root.style.display !== 'none' && source === 'user') {
        // remove error message if user clicks outside the box without saving
        removeErrorMessage();

        // remove text if user clicks outside the box without saving
        if (tooltip) {
          tooltip.textbox.value = '';
        }
        //this.hide();
      }
    });

  } else {
    this.quill.format("link", false);
  }
};
// for link to be customised and validation ends

// handle image function
SnowTheme.DEFAULTS.modules.toolbar.handlers.image = function newLink() {
  const input = document.createElement('input');
  input.setAttribute('type', 'file');
  input.setAttribute('accept', 'image/*');
  input.click();

  // handle the validation of image
  input.onchange = async () => {
    let file = input.files[0];
    if (!imageFormats.includes(file.type)) {
      setAlertMessage({
        message: "Only JPEG and PNG formats are allowed.",
        severity: "error",
      });
      return;
    } 
    if (file.size > imageSize) {
      setAlertMessage({
        message: "File size too large. File size must be equal or less than 2.5MB.",
        severity: "error",
      });
      return;
    } 
    else {
      try {
        // Convert blob URL to data URL
        const imageUrl = await convertBlobToDataURL(file);

        // Upload the image using Quill's built-in image handler
        const range = this.quill.getSelection(true);
        this.quill.insertEmbed(range.index, 'image', imageUrl, 'user');
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  // convert blob object to dataUrl
  async function convertBlobToDataURL(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }
}

// handle image function ends

// Modules object for setting up the Quill editor
export const modules = {
  toolbar: {
    container: "#toolbar",
    handlers: {
      undo: undoChange,
      redo: redoChange,
    },
  },
  history: {
    delay: 500,
    maxStack: 100,
    userOnly: true,
  },
};

// Formats objects for setting up the Quill editor
export const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "align",
  "strike",
  "script",
  "blockquote",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "color",
  "code-block",
];

// Quill Toolbar component
export const QuillToolbar = () => (
  <div id="toolbar">
    <span className="ql-formats">
      <button className="ql-bold" />
      <button className="ql-italic" />
      <button className="ql-underline" />
      <button className="ql-strike" />
    </span>
    <span className="ql-formats">
      <button className="ql-list" value="ordered" />
      <button className="ql-list" value="bullet" />
    </span>
    <span className="ql-formats">
      <button className="ql-blockquote" />
    </span>
    <span className="ql-formats">
      <select className="ql-align" />
    </span>
    <span className="ql-formats">
      <button className="ql-link" />
      <button className="ql-image"/>
    </span>
    <span className="ql-formats">
      <button className="ql-undo">
        <CustomUndo />
      </button>
      <button className="ql-redo">
        <CustomRedo />
      </button>
    </span>
  </div>
);

export default QuillToolbar;
