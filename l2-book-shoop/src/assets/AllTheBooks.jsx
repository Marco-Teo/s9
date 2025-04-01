import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button } from "react-bootstrap"
import books from "./books/scifi.json"

const AllTheBooks = ()=>{
    return(
        <>
            <Container>
                <Row>
                        {books.map((book)=>{
                            return(
                                <Col xs={12} md={8} lg={6} className="text-center g-3" style={{ width: '18rem' }}>
                                <Card key={book.asin}>
                                    <Card.Img variant="top" src={book.img}/>
                                    <CardBody>
                                        <CardTitle>
                                            {book.title}
                                        </CardTitle>
                                        <CardText>
                                            category  {book.category}
                                        </CardText>
                                        <CardText>
                                        Price {book.price}$
                                        </CardText>
                                        <Button variant="primary">BUY</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                            )
                        })}
                </Row>
            </Container>
        </>
    )
}

export default AllTheBooks