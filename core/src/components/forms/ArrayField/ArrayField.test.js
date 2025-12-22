import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import ArrayField from './index';
import { Form, Field } from 'react-final-form';
import arrayMutators from 'final-form-arrays';

const MockComponent = ({ name, fields, index, remove, disabled }) => (
  <div>
    {fields.map((field, i) => (
      <div key={i}>
        <Field name={`${name}.${field.name}`} component="input" />
      </div>
    ))}
    <button onClick={() => remove(index)} disabled={disabled}>
      Remove
    </button>
  </div>
);


const renderDynamicArray = (props = {}) => {
  const defaultProps = {
    label: 'Test Array',
    description: 'Test Description',
    fields: [{ name: 'testField' }],
    defaultItem: { testField: '' },
    minItems: 1,
    maxItems: 3,
    noItemsMessage: 'No items added',
    buttonLabels: { add: 'Add Item', remove: 'Remove Item' },
    Component: MockComponent,
  };

  return render(
    <Form
      onSubmit={() => {}}
      initialValues={{ testArray: [] }}
      mutators={{ ...arrayMutators }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} role='form'>
          <ArrayField name="testArray" {...defaultProps} {...props} />
        </form>
      )}
    />
  );
};


describe('Array Field Component', () => {
  it('renders the component with initial state', () => {
    renderDynamicArray();
    expect(screen.getByText('Test Array')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('No items added')).toBeInTheDocument();
    expect(screen.getByText('Add Item')).toBeInTheDocument();
  });

  it('adds an item when the add button is clicked', () => {
    renderDynamicArray();
    fireEvent.click(screen.getByText('Add Item'));
    expect(screen.queryByText('No items added')).not.toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('removes an item when the remove button is clicked', async () => {
    renderDynamicArray({ minItems: 0 }); 
    fireEvent.click(screen.getByText('Add Item'));
    const removeButton = screen.getByRole('button', { name: 'Remove' });
    expect(removeButton).not.toBeDisabled();
    fireEvent.click(removeButton);
    await waitFor(() => {
      expect(screen.getByText('No items added')).toBeInTheDocument();
    });
  });
  
  
  it('disables the remove button when the minimum number of items is reached', () => {
    renderDynamicArray({ minItems: 1 });
    fireEvent.click(screen.getByText('Add Item'));
    expect(screen.getByText('Remove')).toBeDisabled();
  });

  it('disables the add button when the maximum number of items is reached', () => {
    renderDynamicArray({ maxItems: 1 });
    fireEvent.click(screen.getByText('Add Item'));
    expect(screen.getByText('Add Item')).toBeDisabled();
  });

  it('displays an error message when the form is submitted with an error', () => {
    const arrayValidator = (value) => (value.length < 1 ? 'At least one item is required' : undefined);
    renderDynamicArray({ arrayValidator });
    const form = screen.getByRole('form');
    fireEvent.submit(form);
    expect(screen.getByText('At least one item is required')).toBeInTheDocument();
  });
});