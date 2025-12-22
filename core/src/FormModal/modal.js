import { useMemo, useState } from "react";
import { FormDilog } from "@turner/core";

import {
  IsModalOpen,
  ShowModalAction,
  CloseModalFormAction,
  SelectCurrentForm,
} from "./actions.js";

import FormConfig from "./config";
import useModalFormHook from "./hooks";
import { AlertDialog } from "@turner/core";
export default function ModalForm({ ...rest }) {
  const openModal = IsModalOpen();
  const { initialValues, isEdit, formName, compProps } = SelectCurrentForm();
  const [isOpen, setIsOpen] = useState(false); //change 3

  const config = FormConfig[formName] ? FormConfig[formName] : {};

  const {
    EditSubmitLabel,
    SubmitLabel,
    width,
    editTitle,
    title,
    Component,
    MUTATION_EDIT,
    ButtonType,
    ShowCancelDialog = true,
    Icon,
    titleColor,
    cancelLabel,
    hideSubmitButtons,
    isRest,
    path,
    iconBackgroundColor,
    titleStyles,
    dilogContentStyles,
    SuccessButtonStyles,
    disableBackdropClose,
    clientType
  } = config(compProps);

  const { onSubmit, loading, data } = useModalFormHook({
    formName,
    compProps,
    isEdit,
    MUTATION: MUTATION_EDIT,
    isRest,
    path,
    clientType,
    ...rest,
  });

  return (
    <FormDilog
      initialValues={initialValues}
      title={isEdit ? editTitle : title}
      helpText=""
      submitLabel={isEdit ? EditSubmitLabel : SubmitLabel}
      handleSubmit={(data) => {
        onSubmit(data);
      }}
      handleCancel={() => {
        CloseModalFormAction();
      }}
      open={openModal}
      width={width}
      loading={loading}
      ButtonType={ButtonType}
      Icon={Icon}
      titleColor={titleColor}
      cancelLabel={cancelLabel}
      hideSubmitButtons={hideSubmitButtons}
      iconBackgroundColor={iconBackgroundColor}
      titleStyles={titleStyles}
      dilogContentStyles={dilogContentStyles}
      SuccessButtonStyles={SuccessButtonStyles}
      disableBackdropClose={disableBackdropClose}
    >
      {/* //   Code|| Need Review || On Develop !  Total Changes : 3
      //change 2 */}
      {/* <AlertDialog
        isOpen={isOpen}
        title="Cancel"
        description="Are you sure you want to cancel? All unsaved changes will be lost"
        ButtonType="Danger"
        AgreeTitle="Yes, Cancel"
        DisAgreeTitle="Go Back"
        onAccept={() => CloseModalFormAction()}
        onReject={() => setIsOpen(false)}
      /> */}
      <Component {...compProps} {...rest} />
    </FormDilog>
  );
}
