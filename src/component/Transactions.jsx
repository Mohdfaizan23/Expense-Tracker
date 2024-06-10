

import { Box, Typography, Divider, List } from '@mui/material';

// component------
import TransactionHistory from './TransactionHistory';

const Transactions = ({ transactions, setTransactions }) => {
    return (
        <Box>
            <Typography variant="h5">Transaction History</Typography>
            <Divider />
            <List>
                {
                    transactions.map(transaction => (
                        <TransactionHistory transaction={transaction} setTransactions={setTransactions} transactions={transactions} />
                    ))
                }
            </List>
        </Box>
    )
}
export default Transactions;