export default function (state = 0, action) {
    switch (action.type) {
        case 'INCREMENT_COUNTER':
            return Number(state + 1 );
        case 'DECREMENT_COUNTER':
            return Number(state - 1 );
        case 'RESET_COUNTER': return 0;
        default:
            return state;
    }
}

