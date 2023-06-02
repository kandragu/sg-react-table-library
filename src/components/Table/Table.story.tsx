import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Table from './Table';
import { columns, data } from './Table.data';

export default {
  title: 'Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => (
  <Table variant={args.variant} data={data} columns={columns} checkbox={args.checkbox} radio={args.radio} />
);

export const Default = Template.bind({});
Default.args = {
  variant: 'primary',
  columns: columns,
  data: data,
  checkbox: true,
  radio: false,
};
