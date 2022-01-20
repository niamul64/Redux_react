import React, { Component } from 'react';
import Navigation from '../Header/Navigation';
import DISHES from '../../data/Dishes';
import MenuItem from './MenuItem';
import DishDetails from './DishDetails';
import Comments from '../../data/Comments';

import { Modal, CardGroup, ModalBody, Card, CardColumns, ModalFooter, Button } from 'reactstrap';

class Menu extends Component {
      state = {
            dishes: DISHES,
            comments: Comments,
            selctedDish: null,
            modelOpen: false
      }

      dishSelect = (dish) => {
            this.state.selctedDish = dish;
            this.setState({
                  modelOpen: !this.state.modelOpen
            });
      }

      toggleModel = () => {
            this.setState({
                  modelOpen: !this.state.modelOpen
            })
      }



      render() {
            document.title = "Menu";


            let seletedADish = null;
            // if user clicks on a dish,
            // then this variable is not null

            if (this.state.selctedDish) {
                  const comments = this.state.comments.filter((comment) => {
                        return comment.dishId === this.state.selctedDish.id;
                  })
                  seletedADish = <DishDetails dish={this.state.selctedDish} comments={comments} />
            }


            const dishes = this.state.dishes.map((item) => {
                  return (
                        <MenuItem dish={item} key={item.id}
                              function={() => this.dishSelect(item)}
                        /> // evry dish has an id.
                  );
            }
            );
            return (
                  <div className='container'>
                        <div className='row' >
                              <CardGroup>
                                    {dishes}
                              </CardGroup>
                              <Modal isOpen={this.state.modelOpen}>
                                    <ModalBody>
                                          {seletedADish}
                                          {/* sending the one obj that selected */}

                                    </ModalBody>
                                    <ModalFooter>
                                          <Button color="secondary" onClick={this.toggleModel}>
                                                Close
                                          </Button>
                                    </ModalFooter>

                              </Modal>

                        </div>
                  </div>
            );
      }
}
export default Menu;
