import { useState } from "react";

const useEmailEditorHook = ({
  emailEditorRef,
  saveValues,
  initailValue,
  envUrl,
}) => {
  const onSave = (params) => {};
  const onLoad = () => {
    // emailEditorRef?.current?.editor?.addEventListener(
    //   "design:loaded",
    //   () => {}
    // );
    // emailEditorRef?.current?.editor?.loadDesign(initailValue);
  };

  const onReady = () => {
    //on Readt
    emailEditorRef?.current?.editor?.addEventListener(
      "design:loaded",
      () => {}
    );
    emailEditorRef?.current?.editor?.loadDesign(initailValue);
    emailEditorRef?.current?.editor?.registerCallback(
      "image",
      function (file, done) {
        var data = new FormData();
        data.append("image", file.attachments[0]);
        fetch(`${envUrl}/api/template_images/`, {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: data,
        })
          .then((response) => {
            if (response.status >= 200 && response.status < 300) {
              return response;
            } else {
              var error = new Error(response.statusText);
              error.response = response;
              throw error;
            }
          })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            done({ progress: 100, url: data.image_url });
          });
      }
    );
  };

  const onGetHtml = (params) => {
    //return only HTML  instance
  };
  const handleSave = (params) => {
    let htmlDesign;
    let value;
    //returns both html and value instancr
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data;
      htmlDesign = html;
      value = design;
      saveValues(data);
    });
  };
  return { onSave, onGetHtml, handleSave, onLoad, onReady };
};

export default useEmailEditorHook;
