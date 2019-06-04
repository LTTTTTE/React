import React , {Component } from 'react';
import Item from './Item';

class ItemList extends Component {
    render(){
        const { todo, onToggle , onRemove} = this.props;
        return(
            <div>
                <Item text="하이"/>
            </div>
            
        )
    }
}

export default ItemList