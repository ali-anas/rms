import { combineReducers } from 'redux';

import selectedTable from './selectedTable';
import tableData from './tableData';
import tableStatusData from './tableStatusData';
import moneyEarned from './moneyEarned';

const reducer = combineReducers({
    selectedTable,
    tableStatusData,
    tableData,
    moneyEarned
});

export default reducer;