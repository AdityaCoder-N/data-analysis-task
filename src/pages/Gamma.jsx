import React from 'react';
import { Table } from '@mantine/core';
import useDataAnalytics from '../hooks/useDataAnalytics';

const Gamma = () => {
  const statistics = useDataAnalytics();

  // Extracting alcohol classes from the statistics object
  const alcoholClasses = Object.keys(statistics);

  // Preparing table data for the body
  const tableData = alcoholClasses.map((alcoholClass) => ({
    alcoholClass,
    mean: statistics[alcoholClass].gamma.mean,
    median: statistics[alcoholClass].gamma.median,
    mode: statistics[alcoholClass].gamma.mode,
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
            <Table.Th align="left" className='bg-gray-100 p-2 border border-zinc-300'>Gamma Mean</Table.Th>
            {tableData.map((data) => (
              <Table.Td key={`mean-${data.alcoholClass}`} align="center" className='p-2 border border-zinc-300'>{data.mean}</Table.Td>
            ))}
          </Table.Tr>
          <Table.Tr>
            <Table.Th align="left" className='bg-gray-100 p-2 border border-zinc-300'>Gamma Median</Table.Th>
            {tableData.map((data) => (
              <Table.Td key={`median-${data.alcoholClass}`} align="center" className='p-2 border border-zinc-300'>{data.median}</Table.Td>
            ))}
          </Table.Tr>
          <Table.Tr>
            <Table.Th align="left" className='bg-gray-100 p-2 border border-zinc-300'>Gamma Mode</Table.Th>
            {tableData.map((data) => (
              <Table.Td key={`mode-${data.alcoholClass}`} align="center" className='p-2 border border-zinc-300'>{data.mode}</Table.Td>
            ))}
          </Table.Tr>
        </Table.Tbody>
      </Table>
    </div>
  );
}

export default Gamma;
