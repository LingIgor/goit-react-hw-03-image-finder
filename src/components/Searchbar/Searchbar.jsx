import React, { Component } from 'react';
import { Header, SearchForm, SearchFormBtn, Label, Input } from './Searchbar.styled';

export class Searchbar extends Component {
state= {
  newQuery: '',
}


  onSubmitBtn =(e) => {
    e.preventDefault()
    this.props.onSubmit(this.state.newQuery)
    this.setState ({newQuery: ''})

  }


  onChangeInput =(e) => {
    this.setState({
      newQuery: e.target.value 
    })
  }


  render() {
    return (
      
      <Header  className="searchbar">
        <SearchForm className="form" onSubmit={this.onSubmitBtn}>
          <SearchFormBtn type="submit" className="button">
            <span className="button-label">Search</span>
          </SearchFormBtn>

          <Input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.newQuery}
            onChange={this.onChangeInput}
          />
          
        </SearchForm>
        </Header>
      
    );
  }
}
