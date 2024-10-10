import React, { useState } from 'react';

const DataTable = ({ data, columns, filterKey }) => {
  const [sortConfig, setSortConfig] = useState({ key: '', direction: 'ascending' });
  const [filter, setFilter] = useState('');

  // Handle sorting logic
  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  // Sort the data based on the sortConfig
  const sortedData = [...data].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  // Filter the data based on the filter value
  const filteredData = sortedData.filter((item) =>
    item[filterKey].toLowerCase().includes(filter.toLowerCase())
  );

  // Get sorting arrow icon
  const getSortArrow = (column) => {
    if (sortConfig.key === column) {
      return sortConfig.direction === 'ascending' ? ' ↑' : ' ↓';
    }
    return '';
  };

  return (
    <div style={{ marginTop: '20px' }}>
      {/* Filter Input */}
      <input
        type="text"
        placeholder={`Filter by ${filterKey}`}
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="form-control mb-4"
        style={{
          borderRadius: '10px',
          border: '2px solid #00416A',
          padding: '10px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          fontSize: '16px',
        }}
      />

      {/* Data Table */}
      <div className="table-responsive">
        <table
          className="table table-hover table-bordered"
          style={{
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <thead className="thead-dark">
            <tr>
              {columns.map((column) => (
                <th
                  key={column}
                  onClick={() => requestSort(column)}
                  style={{
                    cursor: 'pointer',
                    backgroundColor: '#00416A',
                    color: '#fff',
                    position: 'relative',
                    padding: '12px 16px',
                    textAlign: 'center',
                  }}
                >
                  {column}
                  {getSortArrow(column)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr
                key={index}
                style={{
                  transition: 'background-color 0.3s ease',
                  textAlign: 'center',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f1f5f9')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '')}
              >
                {columns.map((column) => (
                  <td key={column} style={{ padding: '12px 16px' }}>
                    {item[column]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
