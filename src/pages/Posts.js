import React from 'react';

import { Card, Container, Row} from 'react-bootstrap';

const Posts = ({ posts}) =>  {
  return (
    <Container>
      <Row className="text-center mt-5">
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
    </Container>
  )
}

export default Posts
