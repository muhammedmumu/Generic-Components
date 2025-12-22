import { useMemo } from "react";
import { EditMutationModal, RestMutationModal } from "./actions";

export default function useModalFormHook({
  formName,
  compProps,
  isEdit,
  MUTATION,
  isRest,
  path,
  endPoint,
  clientType,
  ...rest
}) {
  const { action, loading, data } = isRest
    ? RestMutationModal(MUTATION, path, endPoint, clientType, { ...compProps })
    : EditMutationModal(MUTATION, { ...compProps });
  // const loading = useMemo(() => {
  //   return true;
  // }, []);

  // const onSubmit = useMemo(() => {
  //   return () =>
  // }, [isEdit, formName]);

  return { onSubmit: action, loading, data };
}
