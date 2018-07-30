import React, { Component } from 'react';
import { Grid, Row, Col, Image, Media } from 'react-bootstrap';




class Places extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }




    render() { 
        return ( 
            <Media>
              <Media.Left>
                <img width={64} height={64} src="media/cuba.jpg" alt="thumbnail" />
              </Media.Left>
              <Media.Body>
                <Media.Heading>Media Heading</Media.Heading>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                  ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                  tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                  fringilla. Donec lacinia congue felis in faucibus.
                </p>
              </Media.Body>
            </Media>
            

        )
    }
}
 
export default Places;

