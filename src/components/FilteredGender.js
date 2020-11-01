import React, { Component } from 'react';

import { Form, ListGroup, Nav } from 'react-bootstrap';

class FilterGenderPosts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gender: [],
      filteredGender: [],
      allChecked: false
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
      <ListGroup.Item>
           <Nav.Link eventKey="Gender">
           <label>Gender</label>
           <Form>
               <Form.Check inline label="M" type="radio" id="inline-radio-1" checked = { this.allChecked }  />
                <Form.Check inline label="F" type="radio" id="inline-radio-1" checked = { this.allChecked }  />
             </Form>                                                            
          </Nav.Link>
      </ListGroup.Item>
    //   <div className="d-flex flex-row-reverse" Style="margin-top: 50px"><Form>
    //   <FormControl
    //       type="text"
    //       id="filter"
    //       placeholder="Search"
    //       className="float-left"
    //       value={this.state.postFilter}
    //       onChange={this.handleChange} 
    //       placeholder="Search post" 
    //   />
    //   {/* <Button variant="primary">Search</Button> */}
    // </Form></div>
    )
  }
}

export default FilterGenderPosts