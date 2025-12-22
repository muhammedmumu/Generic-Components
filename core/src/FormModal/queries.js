import { gql } from "@apollo/client";

export const IS_MODAL_OPEN = gql`
  query IsModalOpen {
    showModal @client
  }
`;

export const SELECTED_FORM = gql`
  query FormQuery {
    selectedFormInitial @client
    isFormEditMode @client
    compProps @client
    formName @client
  }
`;
