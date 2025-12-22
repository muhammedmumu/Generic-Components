import { IS_MODAL_OPEN, SELECTED_FORM } from "./queries";
import { gql, useQuery, useMutation } from "@apollo/client";
import {
  ShowModalVar,
  FormInitialVar,
  IsEditMode,
  FormName,
  CompProps,
} from "./reactive";
import moment from "moment";

export function IsModalOpen() {
  const { data } = useQuery(IS_MODAL_OPEN);
  return data.showModal;
}

export function ShowModalAction(bool) {
  ShowModalVar(bool);
}

export function SelectCurrentForm() {
  const { data } = useQuery(SELECTED_FORM);
  const initialValues = data ? data.selectedFormInitial : {};
  const isEdit = data ? data.isFormEditMode : false;
  const compProps = data ? data.compProps : {};
  const formName = data ? data.formName : null;

  return { initialValues, isEdit, compProps, formName };
}

export function SetFormInitialAction(values) {
  FormInitialVar(values);
}

export function SetFormEditModeAction(bool) {
  IsEditMode(bool);
}

export function CloseModalFormAction() {
  //closeModal
  ShowModalAction(false);
  // FormInitialVar({});
  // IsEditMode(false);
  // FormName(null);
  // CompProps({});
}

export function createFormAction({ formName, compProps }) {
  ShowModalAction(true);
  IsEditMode(false);
  SetFormInitialAction({});
  FormName(formName);
  CompProps(compProps);
}

export function editFormAction({ item, formName, compProps }) {
  SetFormInitialAction(item);
  SetFormEditModeAction(true);
  ShowModalAction(true);
  FormName(formName);
  CompProps(compProps);
}

// export function EditMutationModal(MUTATION_QUERY, {refetch}) {

//   const [updatePlan, { data, loading }] = useMutation(MUTATION_QUERY, {
//     update : () => {
//       CloseModalFormAction();
//       refetch && refetch();

//     },

//   });

//   function editPlan(values) {
//     updatePlan({ variables: values });
//   }

//   return { action: editPlan, loading };
// }
// To Be verified
export function EditMutationModal(MUTATION_QUERY, { refetch, returnData }) {
  const onUpdate = (cache, { data, loading }) => {
    refetch && refetch();
    returnData && returnData(data);
    CloseModalFormAction();
  };
  const [editPlan, { data, loading }] = useMutation(MUTATION_QUERY, {
    update: onUpdate,
  });

  function EditPlan(values) {
    editPlan({ variables: values });
  }
  return { action: EditPlan, loading: loading };
}

export function RestMutationModal(
  MUTATION_QUERY,
  path,
  endPoint,
  clientType,
  { refetch, returnData, fetchClient }
) {
  const onUpdate = (cache, { data, loading }) => {
    refetch && refetch();
    returnData && returnData(data);
    CloseModalFormAction();
    fetchClient && fetchClient(client);
  };
  const [handleMutation, { data, loading, client }] = useMutation(
    MUTATION_QUERY,
    {
      update: onUpdate, //() => onUpdate({ data: data, client: client }),
      variables: {
        path: path,
        endpoints: endPoint,
      },
      context: { link: "rest", client: clientType },
    }
  );

  function HandleMutation(values) {
    if (values.date && values.formateDate == "true") {
      const formattedDate = moment(values.completionDate).format("YYYY-MM-DD");
      values.date = formattedDate;
    }
    if (values.time && values.formateDate == "true") {
      const formattedTime = moment(values.time).format("HH:mm:ss");
      values.time = formattedTime;
    }
    const variables = { ...values };

    handleMutation({ variables: variables });
  }
  return {
    action: HandleMutation,
    loading: loading,
  };
}
