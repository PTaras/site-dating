import React, { Component } from 'react';

import { Form, FormControl, Button } from 'react-bootstrap';

class FilterPosts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postFilter: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      postFilter: event.target.value
    })
    this.props.onChange(event.target.value)
  }

  render() {
    return (
      <div className="d-flex flex-row-reverse" style={{marginTop: "50px"}}><Form>
      <FormControl
          type="text"
          id="filter"
          placeholder="Search"
          className="float-left"
          value={this.state.postFilter}
          onChange={this.handleChange} 
          placeholder="Search post" 
      />
      {/* <Button variant="primary">Search</Button> */}
    </Form></div>
    )
  }
}

export default FilterPosts