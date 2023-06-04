import React from 'react';

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'mobile', label: 'Mobile' },
  { key: 'expiry', label: 'Expiry' },
  { key: 'penalty', label: 'Penalty' },
];

const data: Record<string, string | number>[] = [
  {
    id: 1,
    name: 'Mavis Chen',
    mobile: '8899 7654',
    expiry: 'Dec 2022',
    penalty: '$600',
  },
  {
    id: 2,
    name: 'Rodney Artichoke',
    mobile: '9988 7676',
    expiry: 'Dec 2022',
    penalty: '$300',
  },
  {
    id: 3,
    name: 'Valentino Morose',
    mobile: '8900 7654',
    expiry: 'Dec 2022',
    penalty: '$300',
  },
  {
    id: 4,
    name: 'Eric Widget',
    mobile: '8900 7654',
    expiry: 'Dec 2022',
    penalty: '$300',
  },
];

const columnsForCustomCell = [
  { key: 'name', label: 'Name' },
  { key: 'mobile', label: 'Mobile' },
  { key: 'expiry', label: 'Expiry' },
  { key: 'penalty', label: 'Penalty' },
  {
    key: 'search',
    label: 'Search',
    type: 'search' as 'radio' | 'checkbox' | 'search' | undefined,
    render: (value: string, row: any, type: string | undefined) =>
      type === 'search' ? (
        <span style={{ display: 'flex', flexDirection: 'row' }}>
          <input type="search" id="site-search" name="search" />
          <button>{value}</button>
        </span>
      ) : null,
  },
];

const dataCustomCell = [
  {
    id: 1,
    name: 'Mavis Chen',
    mobile: '8899 7654',
    expiry: 'Dec 2022',
    penalty: '$600',
    search: 'Go',
  },
  {
    id: 2,
    name: 'Rodney Artichoke',
    mobile: '9988 7676',
    expiry: 'Dec 2022',
    penalty: '$300',
  },
  {
    id: 3,
    name: 'Valentino Morose',
    mobile: '8900 7654',
    expiry: 'Dec 2022',
    penalty: '$300',
  },
  {
    id: 4,
    name: 'Eric Widget',
    mobile: '8900 7654',
    expiry: 'Dec 2022',
    penalty: '$300',
  },
];

export { columns, columnsForCustomCell, data, dataCustomCell };
