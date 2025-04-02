import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button } from "react-bootstrap"

const SingleBook = ({book})=>{
    return(
        <>
            <Container>
                <Row>
                                <Col xs={12} md={8} lg={6} className="text-center g-3">
                                <Card>
                                    <Card.Img variant="top" src={book.img}/>
                                    <CardBody>
                                        <CardTitle>
                                           title: {book.title}
                                        </CardTitle>
                                        <CardText>
                                                category:{book.category}
                                           
                                        </CardText>
                                        <CardText>
                                                price: {book.price}$
                                         
                                        </CardText>
                                        <Button variant="primary">BUY</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                </Row>
            </Container>
        </>
    )
}

export default SingleBook