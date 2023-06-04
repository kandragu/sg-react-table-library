import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Table from './Table';
import { columns, dataCustomCell, columnsForCustomCell, data } from './Table.data';

export default {
  title: 'Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => (
  <Table variant={args.variant} data={data} columns={columns} checkbox={args.checkbox} radio={args.radio} />
);

const TemplateForCustomCell: ComponentStory<typeof Table> = (args) => (
  <Table
    variant={args.variant}
    data={dataCustomCell}
    columns={columnsForCustomCell}
    checkbox={args.checkbox}
    radio={args.radio}
  />
);

export const Default = Template.bind({});
Default.args = {
  variant: 'primary',
  columns: columns,
  data: data,
  checkbox: true,
  radio: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  columns: columns,
  data: data,
  checkbox: false,
  radio: true,
};

export const CustomCell = TemplateForCustomCell.bind({});

CustomCell.args = {
  variant: 'secondary',
  columns: columnsForCustomCell,
  data: dataCustomCell,
  checkbox: false,
  radio: true,
};
