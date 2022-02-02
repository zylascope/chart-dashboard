import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '50',
    '1',
    '11',
    '0.01',
    '0.001',
  ),
  createData(
    0,
    '60',
    '1',
    '10',
    '0.01',
    '1',
  ),
  createData(
    0,
    '65',
    '1',
    '-2',
    '19',
    '-.0181',
  ),
  createData(
    0,
    '22.5',
    '1',
    '19',
    '0.1',
    '1.5',
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Material Topics</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Allocation</TableCell>
            <TableCell>Inner</TableCell>
            <TableCell>Outer</TableCell>
            <TableCell>Impact</TableCell>
            <TableCell align="right">SPi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
{/*       <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
      </Link> */}
    </React.Fragment>
  );
}