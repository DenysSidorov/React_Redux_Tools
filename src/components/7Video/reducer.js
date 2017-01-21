const initialState =  [
        {text: 'Learn JS22', completed: true},
        {text: 'Learn 22React', completed: false},
        {text: 'Learn Redux22', completed: true}
    ]
// Типа коммит сделал в мастере
export const TASK_TOGGLE = 'TASK_TOGGLE';

export const toggle = (index)=> ( {type: TASK_TOGGLE, index: index});

export default  (state = initialState, action)=> {
    switch (action.type) {
        case TASK_TOGGLE:
            return {
                // ...state,
                // ...{state: state.map((task, i)=>({
                //     ...task,
                //     completed: i === action.index ? !task.completed : task.completed
                // }))
        text: 'Learn Redux', completed: true
            }

        default:
            return state;
    }
}