import React from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

class Gift extends React.Component {
  constructor() {
    super();
    this.state = {
      person: '',
      present: ''
    }
  }

  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <ControlLabel>Person</ControlLabel>
            <FormControl
              className='input-person'  
              onChange={ event => {
                  this.setState({person: event.target.value})
                }
              }
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Present</ControlLabel>
            <FormControl
              className='input-present'  
              onChange={ event => {
                  this.setState({present: event.target.value})
                }
              }
            />
          </FormGroup>
          <Button className='btn-remove' onClick={() => this.props.removeGift(this.props.gift.id)}>Remove</Button>
        </Form>
      </div>
    )    
  }
}

export default Gift;