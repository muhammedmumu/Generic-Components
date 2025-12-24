import React from 'react';
import AllinOne from './AllinOne';
import Tables from '../Tables/GridTable';
import { rows, columns } from '../../Mock/mock.js';

export default {
  title: 'Components/AllinOne',
  component: AllinOne,
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => <AllinOne {...args} />;

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  title: 'Sample Table Card',
  titleIcons: true,
  button: ['Download', 'Print', 'Share'],
  children: (
    <Tables
      rows={rows.slice(0, 5)}
      columns={columns}
      fields={['id', 'hospital_name', 'job_title']}
      paginationMode={true}
      checkBox={true}
      filtering={true}
      sorting={true}
    />
  ),
};

export const SimpleCard = Template.bind({});
SimpleCard.args = {
  title: 'Simple Card',
  titleIcons: false,
  button: ['Download'],
  children: (
    <Tables
      rows={rows.slice(0, 5)}
      columns={columns}
      fields={['id', 'gender', 'race']}
      paginationMode={false}
      checkBox={false}
      filtering={false}
      sorting={true}
    />
  ),
};