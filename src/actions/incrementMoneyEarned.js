import { INCREMENT_MONEY_EARNED } from '../constants/constants';

const incrementMoneyEarned = (amount) => {
    return {
        type: INCREMENT_MONEY_EARNED,
        amount: amount
    };
};

export default incrementMoneyEarned;