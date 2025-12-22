import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FormDialogForm from "./withForm";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme";

const mockHandleSubmit = jest.fn();
const mockReset = jest.fn();

// Mock the useFormApi hook that is used inside the component
jest.mock("../forms/hooks/use-form-api", () => () => ({
  handleSubmit: mockHandleSubmit,
  getState: () => ({ submitting: false, valid: true }),
  reset: mockReset,
}));

describe("FormDialogForm Component", () => {
  const defaultProps = {
    open: true,
    title: "Test Dialog Title",
    subTitle: "Test Subtitle",
    helpText: "This is help text",
    cancelLabel: "Cancel",
    submitLabel: "Submit",
    handleCancel: jest.fn(),
    onCloseCallback: jest.fn(),
    children: <div>Dialog Content</div>,
  };

  test("renders dialog with title, subtitle, help text, and children", () => {
    render(<ThemeProvider theme={theme}><FormDialogForm {...defaultProps} /></ThemeProvider>);

    expect(screen.getByText("Test Dialog Title")).toBeInTheDocument();
    expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
    expect(screen.getByText("This is help text")).toBeInTheDocument();
    expect(screen.getByText("Dialog Content")).toBeInTheDocument();
  });

  test("calls handleCancel and onCloseCallback when cancel button is clicked", () => {
    render(<ThemeProvider theme={theme}><FormDialogForm {...defaultProps} /></ThemeProvider>);
    const cancelButton = screen.getByText("Cancel");

    fireEvent.click(cancelButton);

    expect(defaultProps.handleCancel).toHaveBeenCalled();
    expect(defaultProps.onCloseCallback).toHaveBeenCalled();
  });

  test("calls handleSubmit when submit button is clicked", () => {
    render(<ThemeProvider theme={theme}><FormDialogForm {...defaultProps} /></ThemeProvider>);
    const submitButton = screen.getByText("Submit");

    fireEvent.click(submitButton);

    expect(mockHandleSubmit).toHaveBeenCalled();
  });

  test("calls reset when resetForm is true and submit button is clicked", () => {
   render(<ThemeProvider theme={theme}><FormDialogForm {...defaultProps} resetForm={true} /></ThemeProvider>);
    const submitButton = screen.getByText("Submit");

    fireEvent.click(submitButton)

    expect(mockReset).toHaveBeenCalled();
  });

  test("renders custom title if provided", () => {
    render(<ThemeProvider theme={theme}><FormDialogForm {...defaultProps} customTitle={<div>Custom Title</div>}/></ThemeProvider>);

    expect(screen.getByText("Custom Title")).toBeInTheDocument();
    expect(screen.queryByText("Test Dialog Title")).not.toBeInTheDocument();
  });

  test("renders loading button when loading is true", () => {
    render(<ThemeProvider theme={theme}><FormDialogForm {...defaultProps} loading={true} loadBtnText="Loading..."/></ThemeProvider>);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
    expect(screen.queryByText("Submit")).not.toBeInTheDocument();
  });
});
