import React from 'react';
import { Table } from '@mantine/core';
import useDataAnalytics from '../hooks/useDataAnalytics';

const FlavanoidsTable = () => {
  const statistics = useDataAnalytics();

  // Extracting alcohol classes from the statistics object
  const alcoholClasses = Object.keys(statistics);

  // Preparing table data for the body
  const tableData = alcoholClasses.map((alcoholClass) => ({
    alcoholClass,
    mean: statistics[alcoholClass].flavanoids.mean,
    median: statistics[alcoholClass].flavanoids.median,
    mode: statistics[alcoholClass].flavanoids.mode,
  }));

  return (
    <div className="w-full mx-auto text-lg flex flex-col items-center">
      <Table className='w-[90vw] md:w-[50vw] border border-gray-300 mt-12 text-lg'>
        <Table.Thead>
          <Table.Tr>
            <Table.Th className='p-2 border border-gray-300 bg-gray-100' align="left">Measure</Table.Th>
            {alcoholClasses.map((alcoholClass) => (
              <Table.Th className='p-2 border border-gray-300 bg-gray-100' key={`header-${alcoholClass}`} align="center">Class {alcoholClass}</Table.Th>
            ))}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Th align="left" className='p-2 border border-gray-300 bg-gray-100'>Flavanoids Mean</Table.Th>
            {tableData.map((data) => (
              <Table.Td className='p-2 border border-gray-300' key={`mean-${data.alcoholClass}`} align="center">{data.mean}</Table.Td>
            ))}
          </Table.Tr>
          <Table.Tr>
            <Table.Th className='p-2 border border-gray-300 bg-gray-100' align="left">Flavanoids Median</Table.Th>
            {tableData.map((data) => (
              <Table.Td className='p-2 border border-gray-300' key={`median-${data.alcoholClass}`} align="center">{data.median}</Table.Td>
            ))}
          </Table.Tr>
          <Table.Tr>
            <Table.Th className='p-2 border border-gray-300 bg-gray-100' align="left">Flavanoids Mode</Table.Th>
            {tableData.map((data) => (
              <Table.Td className='p-2 border border-gray-300' key={`mode-${data.alcoholClass}`} align="center">{data.mode}</Table.Td>
            ))}
          </Table.Tr>
        </Table.Tbody>
      </Table>
    </div>
  );
}

export default FlavanoidsTable;
