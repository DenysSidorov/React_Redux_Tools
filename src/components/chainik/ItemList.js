// http://blog.zacorp.ru/frontend/redux-i-thunk-vmeste-react-rukovodstvo-dlya-chajnikov/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from './actions/items';
// items: [
//     {id: 1,label: 'List item 1'},
//     {id: 2,label: 'List item 2'}, {id: 3,label: 'List item 3'}, {id: 4,label: 'List item 4'}
// ],
class ItemList extends Component {
    componentDidMount() {
        this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
    }
    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        return (
            <ul>
                {this.props.items.map((item, index) => (
                    <li key={index}>
                        {item.label}
                    </li>
                ))}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);