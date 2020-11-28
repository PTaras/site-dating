import React from 'react';


import { Card, Pagination, Container, Row, Col} from 'react-bootstrap';

import FilterPosts from '../components/FilterResults';



const Posts = ({ posts}) =>  {
  return (
    <Container>
      <Row className="text-center mt-2">
        <Col>
          <FilterPosts/>
        </Col>
      </Row>
      <Row>
      {(posts).map((post) => {
        return (
            <Card.Body key={post.id} style={{backgroundColor: 'none', width: '100%'}}>
                <Card className="text-center">
                    <Card.Header> 
                      <b style={{float: "left"}}>{post.title} ({post.city}) </b>
                      <b style={{float: "right"}}>Возраст: {post.age}</b>  
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                          {post.desc}
                        </Card.Text>
                    </Card.Body>
                  <Card.Footer className="text-muted"><i>Дата публикации: </i>{post.pubdate}</Card.Footer>
                </Card>
            </Card.Body>
          )
      })}
      </Row>
      {/* <Row>
        <Col md={12}>
        <Pagination className="pagination justify-content-center">
              <Pagination.First />
              <Pagination.Prev />
              {(Array.from({length:pags}, (_, i) => ++i)).map((item) => {
                return (
                  <Pagination.Item key={item} active={item === currentP} onClick={onClick}> {item}</Pagination.Item >)
              })}
              {console.log(currentP)}
              <Pagination.Next />
              <Pagination.Last />
          </Pagination>
        </Col>
      </Row> */}
    </Container>
  )
}

export default Posts
