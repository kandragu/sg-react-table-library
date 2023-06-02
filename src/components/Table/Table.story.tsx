import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Table from './Table';
import { columns, data } from './Table.data';

export default {
  title: 'Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table data={data} columns={columns} checkbox />;

export const Default = Template.bind({});
// Default.args = {
//   data: { data },
//   columns: { columns },
// };
