import { TOGGLE_TABLE } from '../constants/constants';

const toggleTable = (id) => {
    return {
        type: TOGGLE_TABLE,
        id: id
    };
};

export default toggleTable;