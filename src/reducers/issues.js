export default function (state = [], action) {
    switch (action.type) {
        case 'LOAD_USSUES' : return action.payload
        default:
            return state;
    }
}