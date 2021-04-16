import { SELECT_TABLE } from '../constants/constants';

const selectTable = (id) => {
    return {
        type: SELECT_TABLE,
        id: id
    };
};

export default selectTable;