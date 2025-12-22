import { InMemoryCache, Reference, makeVar } from "@apollo/client";
export const ShowModalVar = makeVar(false);
export const FormInitialVar = makeVar({});
export const IsEditMode = makeVar(false);
export const CompProps = makeVar({});
export const FormName = makeVar("");

const Reactive = {

  showModal: {
    read() {
      return ShowModalVar();
    },
  },
  selectedFormInitial: {
    read() {
      return FormInitialVar();
    },
  },
  isFormEditMode: {
    read() {
      return IsEditMode();
    },
  },
  compProps: {
    read() {
      return CompProps();
    },
  },
  formName: {
    read() {
      return FormName();
    },
  },
};

export default Reactive;
