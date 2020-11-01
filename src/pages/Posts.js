import React from 'react'

import { Card, Pagination, Container, Row, Col} from 'react-bootstrap';

import FilterPosts from '../components/FilterResults';

let active = 1;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
};

const Posts = ({ posts, onChange }) =>  {
  return (
    <Container>
      <Row className="text-center mt-2">
        <Col>
          <FilterPosts onChange={onChange} />
        </Col>
      </Row>
      <Row>
      {posts.map((post) => {
        return (
            <Card.Body>
              
                <Card key={post.id} className="text-center">
                    <Card.Header> 
                      <b Style="float:left">{post.title} ({post.city}) </b>
                      <b Style="float:right">Возраст: {post.age}</b>  
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                          {post.desc}
                        </Card.Text>
                    </Card.Body>
                  <Card.Footer className="text-muted"><i>Дата публикации: </i>{post.date_created}</Card.Footer>
                </Card>
            </Card.Body>
          )
      })}
      </Row>
      <Row>
        <Col md={12}>
        <Pagination className="pagination justify-content-center">
              <Pagination.First />
              <Pagination.Prev />
              <Pagination>{items}</Pagination>
              <Pagination.Ellipsis />
              <Pagination.Next />
              <Pagination.Last />
          </Pagination>
        </Col>
      </Row>
    </Container>
  )
}

export default Posts