const initialState =  [
        {text: 'Learn JS', completed: true},
        {text: 'Learn React', completed: false},
        {text: 'Learn Redux', completed: true}
    ]

export const TASK_TOGGLE = 'TASK_TOGGLE';

export const toggle = (index)=> ( {type: TASK_TOGGLE, index: index});

export default  (state = initialState, action)=> {
    switch (action.type) {
        case TASK_TOGGLE:
            return [
                ...state.map((task, i)=>{
                return {...task, ...{completed: i === action.index ? !task.completed : task.completed}}
            })
            ]

        default:
            return state;
    }
}