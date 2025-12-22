import { render, screen, fireEvent } from "@testing-library/react";
import FileField from "./index";
import { Form } from "react-final-form";
import userEvent from "@testing-library/user-event";

// Mock required components
jest.mock("../../button", () => ({
  PrimaryButton: ({ label, startIcon, sx, ...props }) => (
    <button {...props}>
      {startIcon} {label}
    </button>
  ),
}));

describe("FileField Component", () => {
  // Test if component renders correctly
  it("should render the file upload button and label", () => {
    render(
      <Form
        onSubmit={jest.fn()}
        render={() => (
          <FileField
            name="file"
            label="Upload File"
            placeholder="Select a file"
          />
        )}
      />
    );

    // Check if the button and label are rendered correctly
    expect(screen.getByText("Select a file")).toBeInTheDocument();
    expect(screen.getByLabelText("Upload File")).toBeInTheDocument();
  });

  // Test if file selection is handled correctly
  it("should show the selected file name", async () => {
    const file = new File(["file content"], "test-file.txt", {
      type: "text/plain",
    });

    render(
      <Form
        onSubmit={jest.fn()}
        render={() => (
          <FileField
            name="file"
            label="Upload File"
            placeholder="Select a file"
          />
        )}
      />
    );

    const fileInput = screen.getByLabelText("Upload File");

    // Simulate file selection
    userEvent.upload(fileInput, file);

    // Wait for the file name to appear
    await screen.findByText("test-file.txt");

    // Check if the file name is displayed
    expect(screen.getByText("test-file.txt")).toBeInTheDocument();
  });

  // Test validation error message
  it("should display an error message when validation fails", async () => {
    const mockOnSubmit = jest.fn();

    render(
      <Form
        onSubmit={mockOnSubmit}
        validate={(values) => {
          const errors = {};
          if (!values.file) {
            errors.file = "This field is required";
          }
          return errors;
        }}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <FileField
              name="file"
              label="Upload File"
              placeholder="Select a file"
            />
            <button type="submit">Submit</button>
          </form>
        )}
      />
    );

    // Submit the form without selecting a file
    fireEvent.click(screen.getByText("Submit"));

    // Wait for error message
    await screen.findByText("This field is required");

    // Check if the error message is displayed
    expect(screen.getByText("This field is required")).toBeInTheDocument();
  });

  //   should trigger file input when the button is clicked
  it("should trigger file input when the button is clicked", async () => {
    const file = new File(["file content"], "test-file.txt", {
      type: "text/plain",
    });

    render(
      <Form
        onSubmit={jest.fn()}
        render={() => (
          <FileField
            name="file"
            label="Upload File"
            placeholder="Select a file"
          />
        )}
      />
    );

    const fileInput = screen.getByLabelText("Upload File");
    const uploadButton = screen.getByText("Select a file");

    // Simulate clicking the upload button to open the file input dialog
    userEvent.click(uploadButton);

    // Simulate selecting a file
    fireEvent.change(fileInput, { target: { files: [file] } });

    // Wait for the file name to appear in the document
    await screen.findByText("test-file.txt");

    // Check if the file name is displayed correctly
    expect(screen.getByText("test-file.txt")).toBeInTheDocument();
  });
});
