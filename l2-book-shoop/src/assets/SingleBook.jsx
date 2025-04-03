import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "react-bootstrap";
import { Component } from "react";
import CommentArea from "./CommentArea ";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <>
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={8} lg={6} className="text-center g-3">
              <Card>
                <Card.Img
                  variant="top"
                  src={this.props.book.img}
                  onClick={() => {
                    this.setState({
                      selected: true,
                    });
                  }}
                />
                <CardBody>
                  <CardTitle>title: {this.props.book.title}</CardTitle>
                  <CardText>category:{this.props.book.category}</CardText>
                  <CardText>price: {this.props.book.price}$</CardText>
                  <Button variant="primary">BUY</Button>
                  {this.state.selected && (
                    <CommentArea asin={this.props.book.asin} />
                  )}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default SingleBook;
