// write test cases for Table component in src/components/Table/Table.spec.tsx
import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, fireEvent, within } from '@testing-library/react';
import Table from './Table';
import { columns, data } from './Table.data';

describe('Table component', () => {
  it('should render', () => {
    const { getByText } = render(<Table data={data} columns={columns} />);
    expect(getByText('Mavis Chen')).toBeTruthy();
  });

  it('renders the correct number of rows', () => {
    const { getAllByRole } = render(<Table columns={columns} data={data} />);

    const rowElements = getAllByRole('row');
    // +1 because header row is included
    expect(rowElements.length).toBe(data.length + 1);
  });

  it('renders the column headers', () => {
    const { getByText } = render(<Table columns={columns} data={data} />);

    columns.forEach((column) => {
      const columnHeader = getByText(column.label);
      expect(columnHeader).toBeTruthy();
    });
  });

  it('handles sort on column header click', () => {
    const { getByText } = render(<Table columns={columns} data={data} />);

    const columnHeader = getByText(columns[0].label);
    fireEvent.click(columnHeader);

    const sortAsc = columnHeader.className.includes('sort-asc');
    const sortDesc = columnHeader.className.includes('sort-desc');

    // assert that column is sorted in either ascending or descending order
    expect(sortAsc || sortDesc).toBeTruthy();
  });

  it('renders a radio button when radio prop is set', () => {
    const { getAllByRole } = render(<Table columns={columns} data={data} radio />);

    const radioButtons = getAllByRole('radio');
    expect(radioButtons.length).toBe(data.length);
  });

  it('renders a checkbox when checkbox prop is set', () => {
    const { getAllByRole } = render(<Table columns={columns} data={data} checkbox />);

    const checkboxes = getAllByRole('checkbox');
    expect(checkboxes.length).toBe(data.length);
  });

  it('renders cell content correctly', () => {
    const { getAllByRole } = render(<Table columns={columns} data={data} />);

    const rows = getAllByRole('row');

    rows.forEach((row, i) => {
      // skip the header row
      if (i === 0) return;

      const cells = within(row).getAllByRole('cell');
      cells.forEach((cell, j) => {
        expect(cell.textContent).toBe(data[i - 1][columns[j].key]);
      });
    });
  });
});
