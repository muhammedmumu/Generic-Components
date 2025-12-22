import React from "react";
import FormModal from "./modal";
import {
  IsModalOpen,
  ShowModalAction,
  CloseModalFormAction,
  SelectCurrentForm,
} from "./actions";

function ContainerForm({ ...rest }) {
  const openModal = IsModalOpen();
  return openModal && <FormModal {...rest} />;
}

export default ContainerForm;
