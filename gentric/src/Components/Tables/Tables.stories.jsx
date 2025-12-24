import React from 'react';
import Tables from './GridTable';

import { rows, columns } from '../../Mock/mock.js';

export default {
  title: 'Components/Tables',
  component: Tables,
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => <Tables {...args} />;

export const DefaultTable = Template.bind({});
DefaultTable.args = {
  rows: rows.slice(0, 10),
  columns: columns,
  fields: ['id', 'hospital_name', 'job_title', 'email_address'],
  paginationMode: true,
  checkBox: true,
  filtering: true,
  sorting: true,
};

export const SimpleTable = Template.bind({});
SimpleTable.args = {
  rows: rows.slice(0, 10),
  columns: columns,
  fields: ['id', 'gender', 'race', 'shirt_size'],
  paginationMode: false,
  checkBox: false,
  filtering: false,
  sorting: true,
};

export const CompactTable = Template.bind({});
CompactTable.args = {
  rows: rows.slice(0, 10),
  columns: columns,
  fields: ['id', 'color', 'shirt_size', 'race'],
  paginationMode: false,
  checkBox: true,
  filtering: true,
  sorting: false,
};