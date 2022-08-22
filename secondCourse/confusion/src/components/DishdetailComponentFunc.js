import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';


    function RenderDish({dish}) {
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

    function RenderComments({comments}) {
      
        if (comments != null) {
          return (
            <Card>
              <h4>Comments</h4>
              <CardBody>
                <CardText>
                  {comments.comments.map((con) => {
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

    const  DishDetail = (props) => {
                if (props.dish != null) {
                  return (
                    <div className="row">
                      <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                      </div>
                      <div className="col-12 col-md-5 m-1" list>
                        <RenderComments dish={props.dish} />
                      </div>
                    </div>
                  );
                } else return <div></div>;
  }
export default DishDetail;