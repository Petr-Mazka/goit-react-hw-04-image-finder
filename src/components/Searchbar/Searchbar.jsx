import React, { Component } from "react";
import PropTypes from "prop-types";
import css from "./Searchbar.module.css";

class Searchbar extends Component {
    state = {
      searchItem: "",
    }
    
    handleChange = event => {
        this.setState({
            searchItem: event.currentTarget.value.toLowerCase(),
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        const { searchItem } = this.state;
        if (this.state.searchItem.trim() === "") {
            alert("Please enter a search term");
            return;
        }
        this.props.onSubmit(searchItem);
        this.setState({
            searchItem: "",
        });
    }

    render() {
        const { searchItem } = this.state;
        return (
            <header className={css.searchbar}>
            <form className={css.form} onSubmit={this.handleSubmit}>
            <button type="submit" className={css.button}>
            <span className="button-label">Search</span>
            </button>

            <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchItem}
            onChange={this.handleChange}
            />
            </form>
            </header>
        );
    }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default Searchbar;