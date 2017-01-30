import React from "react";
import {connect} from "react-redux";
import {toggle} from "./reducer";

// const modify = connect( state=> ({
//     tasks: state.tasks
// }),
//
// )

class TaskList extends React.Component {
    static propTypes = {
        text: React.PropTypes.string.isRequired,
        tasks: React.PropTypes.array.isRequired
    }

    toggleCompleted(i, e) {
        console.log(arguments);
        this.props.doDo(i);
    }

    render() {
        const {text, tasks} = this.props;
        console.log(this.props);
        return (
            <div>
                <h1>Hello , {text}</h1>
                <ol>
                    {tasks.map((task, i)=> (
                        <Item
                            key={i}
                            text={task.text}
                            completed={task.completed}
                            onChange={this.toggleCompleted.bind(this, i)}
                        />)
                    )}
                </ol>
                {this.props.children}
            </div>
        )
    }
}

// export default modify(TaskList);
// export  default connect(
//     state =>({
//         tasks: state.tasks
//     }), dispatch => {
//         return {
//             doToggle: (i)=> dispatch(toggle(i))
//         }
//     })(TaskList)


// {doToggle: toggle})(TaskList);


const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        doDo: (i) => dispatch(toggle(i))
    };

};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);


const Item = ({text, completed, onChange})=>
    <li>
        <label>
            <input type="checkbox" checked={completed} onChange={onChange}/>
            {text}
            {completed ? ' completed' : null}
        </label>
    </li>
