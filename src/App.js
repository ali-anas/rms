import './App.css';
import { createStore } from 'redux';
import reducer from './reducers/reducer';
import addTableItem from './actions/addTableItem';
import deleteTableItem from './actions/deleteTableItem';
import incrementMoneyEarned from './actions/incrementMoneyEarned';
import selectTable from './actions/selectTable';
import toggleTable from './actions/toggleTable';

var store = createStore(reducer);

const getSelectedTable = () => {
  let state = store.getState();
  return state.selectedTable;
};

const getAvailableTables = () => {
  let state = store.getState();
  let tablesAvailable = 0;

  for (let i = 0; i < state.tableStatusData.length; i++) {
    if (state.tableStatusData[i] === true) tablesAvailable++;
  }
  return tablesAvailable;
};
const getTableStatusData = () => {
  let state = store.getState();
  return state.tableStatusData;
};

const getTableItems = () => {
  let state = store.getState();

  if (getSelectedTable() === null) var tableItems = [];
  else var tableItems = state.tableData[getSelectedTable()];
  return tableItems;
};

const getTotalBill = () => {
  let tableItems = getTableItems();
  let totalBill = 0;
  for (let i = 0; i < tableItems.length; i++) {
    totalBill += tableItems[i].price;
  }
  return totalBill;
};

const getMoneyEarned = () => {
  let state = store.getState();
  return state.moneyEarned;
};

const checkOut = () => {
  let totalBill = getTotalBill();
  store.dispatch(incrementMoneyEarned(totalBill));
  store.dispatch(toggleTable(getSelectedTable()));
};

store.subscribe(() => {
  console.log(`Selected Table: ${getSelectedTable()}`);
  console.log(`Tables Available: ${getAvailableTables()} / 16`);
  console.log(`Table Availability Status: ${getTableStatusData()}`);
  console.log(`Selected Table Items List:`, getTableItems());
  console.log(`Selected Table Bill: $${getTotalBill()}`);
  console.log(`Total Money Earned: $${getMoneyEarned()}`);
  console.log();
});

//test dispatched actions

//select and toggle table 0, add items
//select and toggle table 1, add items
//check out current selected table
//select table 0
store.dispatch(selectTable(0));
store.dispatch(toggleTable(0));
store.dispatch(addTableItem("apples", 2, 0));
store.dispatch(addTableItem("bananas", 3, 0));
store.dispatch(deleteTableItem(0 , 1));

store.dispatch(selectTable(1));
store.dispatch(toggleTable(1));
store.dispatch(addTableItem("apples", 2, 1));
store.dispatch(addTableItem("bananas", 3, 1));
store.dispatch(addTableItem("carrots", 4, 1));
checkOut();
store.dispatch(selectTable(0));

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

export default App;
