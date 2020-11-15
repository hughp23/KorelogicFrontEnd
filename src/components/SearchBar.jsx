import React, { Component } from 'react';
import { getCuisines } from '../utils'
import { Multiselect } from 'multiselect-react-dropdown';

class SearchBar extends Component {
    state = {
        cuisines: []
    }
    render() {
        const { cuisines } = this.state;
        return (
            <div>
                <Multiselect
                options={cuisines} // Options to display in the dropdown
                onSelect={this.onSelect} // Function will trigger on select event
                onRemove={this.onRemove} // Function will trigger on remove event
                displayValue="name" // Property name to display in the dropdown options
                />
            </div>
        );
    }

    componentDidMount() {
        const cuisines = getCuisines();
        console.log(cuisines, 'cuisines')
        this.setState({ cuisines });
    }
}

export default SearchBar;