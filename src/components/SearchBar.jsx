import React, { Component } from 'react';
import { getCuisines } from '../utils'
import { Multiselect } from 'multiselect-react-dropdown';
import * as $ from 'jquery';

class SearchBar extends Component {
    state = {
        cuisines: [],
        filteredCuisines: [],
        dogs: null,
        vegan: null
    }
    render() {
        const { cuisines, dogs, vegan } = this.state;
        this.multiselectRef = React.createRef()
        return (
            <div>
                <Multiselect
                options={cuisines} // Options to display in the dropdown
                onSelect={this.onSelect} // Function will trigger on select event
                ref={this.multiselectRef}
                onRemove={this.onRemove} // Function will trigger on remove event
                displayValue="name" // Property name to display in the dropdown options
                />
                <label>Dog Friendly</label>
                <div>
                    <label>True</label>
                    <input type="checkbox" className="checkbox" checked={dogs ? "checked" : ""} onChange={() => this.handleChange("dogs", true, this)} />
                </div>
                <div>
                    <label>False</label>
                    <input type="checkbox" className="checkbox" checked={dogs === false ? "checked" : ""} onChange={() => this.handleChange("dogs", false, this)} />
                </div>
                <label>Vegan Options</label>
                <div>
                    <label>True</label>
                    <input type="checkbox" className="checkbox" checked={vegan ? "checked" : ""} onChange={() => this.handleChange("vegan", true, this)} />
                </div>
                <div>
                    <label>False</label>
                    <input type="checkbox" className="checkbox" checked={vegan === false ? "checked" : ""} onChange={() => this.handleChange("vegan", false, this)} />
                </div>
            </div>
        );
    }

    componentDidMount() {
        const cuisines = getCuisines();
        this.setState({ cuisines });
    }

    onSelect = (selectedList, selectedItem) => {
        const { filterRestaurants } = this.props;
        const { dogs, vegan } = this.state;
        let values = [];
        for (let i = 0; i < selectedList.length; i ++) {
            values.push(selectedList[i].name);
        }
        values = !values.length ? null : values;

        filterRestaurants(dogs, vegan, values);

        this.setState({ filteredCuisines: values });
    }

    onRemove = () => {
        const { clearFilter } = this.props;
        clearFilter();
    }

    handleChange = (type, val, checkbox) => {
        const { filterRestaurants } = this.props;
        let { filteredCuisines, dogs, vegan } = this.state;
        $('.checkbox').removeAttr("checked")
        $(checkbox).attr("checked", "checked");

        if (type === "dogs") {
            if (dogs === val) {
                dogs = null;
            }
            else {
                dogs = val;
            }
        }
        else if (type === "vegan") {
            if (vegan === val) {
                vegan = null;
            }
            else {
                vegan = val;
            }
        }

        filterRestaurants(dogs, vegan, filteredCuisines);

        if (type === "dogs") {
            this.setState({ dogs })
        }
        else if (type === "vegan") {
            this.setState({ vegan })
        }
    }
}

export default SearchBar;