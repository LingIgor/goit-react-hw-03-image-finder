import React, { Component } from 'react';

export class Searchbar extends Component {
  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.onSubmitBtn}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.newKey}
            onChange={this.onChangeInput}
          />
        </form>
      </header>
    );
  }
}
