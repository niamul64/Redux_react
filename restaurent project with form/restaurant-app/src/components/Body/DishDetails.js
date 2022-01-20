import React from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from 'reactstrap';
import LoadComments from './LoadComments';

const DishDetails = (props) => {
      return (
            <div>
                  <Card style={{ margin: "10px", padding: "2px" }}>
                        <CardBody >
                              <p>{props.dish.name} </p>
                              <CardImg width="100%" src={props.dish.image}  >

                              </CardImg>
                              <CardImgOverlay>

                                    <CardTitle onClick={() => props.function(props.dish)}

                                          style={{ cursor: "pointer" }}>

                                          {props.dish.name}
                                    </CardTitle>



                              </CardImgOverlay>
                              <div align="left">
                                    <p>Description: {props.dish.description} </p>
                                    <p >price: {props.dish.price} </p>

                                    <hr />
                                    <LoadComments comments={props.comments} />
                              </div>

                        </CardBody>
                  </Card>
            </div >
      );
}
export default DishDetails;