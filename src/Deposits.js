import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { StayPrimaryLandscape } from '@mui/icons-material';
import {ciambellaChartData} from './ciambella-chart-plugin.js'; 


function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>

      <Title>{ciambellaChartData.datasets[0].entity} - {ciambellaChartData.datasets[0].stockCode}</Title>
      
      <Typography component="p" variant="h4">
        
      </Typography>
      <Title>SPI Score</Title>

      <Typography component="p" variant="h4">
        1.358
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        
      </Typography>
      <Title>Rank</Title>
      <Typography component="p" variant="h4">
        #1345
      </Typography>

    </React.Fragment>
  );
}