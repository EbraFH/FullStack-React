import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  renderDish(dish) {
    if (dish != null)
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else return <div></div>;
  }

  renderComments(dish) {
    if (dish != null) {
      return (
        <Card>
          <h4>Comments</h4>
          <CardBody>
            <CardText>
              {dish.comments.map((con) => {
                return (
                  <div>
                    <li>{con.comment}</li>
                    <li>
                      {"--" +
                        con.author +
                        " , " +
                        new Intl.DateTimeFormat("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "2-digit",
                        }).format(new Date(Date.parse(con.date)))}
                    </li>
                  </div>
                );
              })}
            </CardText>
          </CardBody>
        </Card>
      );
    } else return <div></div>;
  }

  render() {
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          {this.renderDish(this.props.dish)}
        </div>
        <div className="col-12 col-md-5 m-1" list>
          {this.renderComments(this.props.dish)}
        </div>
      </div>
    );
  }
}
export default DishDetail;
