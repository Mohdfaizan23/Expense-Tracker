
import './App.css';
import { Typography, styled, Box } from'@mui/material';
import { useState } from 'react';

// component-----
import Balance from './component/Balance';
import ExpenceBox from './component/ExpenceBox';
import NewTransaction from './component/NewTransaction';
import Transactions from './component/Transactions';

const Header = styled(Typography)`
margin: 10x, 0;
font-size: 36px;
color: blue;
text-transform: uppercase;
`
const Component = styled(Box)`
display: flex;
background: #fff;
width: 800px;
padding: 10px;
border-radius: 20px;
margin: auto;
& > div {
  height: 70vh;
  width: 50%;
  padding: 10px;
}
`

function App() {

  const [transactions, setTransactions] = useState([
   
  ])

  return (
    <Box className="App">
      <Header>Expense Tracker</Header>
      <Component>
        <Box>
          <Balance transactions={transactions} />
          <ExpenceBox transactions={transactions} />
          <NewTransaction setTransactions={setTransactions} />
        </Box>
        <Box>
          <Transactions transactions={transactions} setTransactions={setTransactions} />
        </Box>
      </Component>

    </Box>
  );
}

export default App;
