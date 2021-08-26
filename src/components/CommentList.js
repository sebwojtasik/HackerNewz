import React from 'react';
import Story from './Story';
import Comment from './Comment';
import useFetchComments from '../hooks/useFetchComments';
import Container from './Container';
import Card from './Card';
import CommentsPlaceholder from './placeholders/CommentsPlaceholder';

const CommentList = (props) => {
  const id = props.match.params.id;
  const { isLoading, story, comments } = useFetchComments(id);
  return (
    <Container>
      {isLoading ? (
        <Card direction="column">
          <CommentsPlaceholder />
        </Card>
      ) : (
        <Card direction="column">
          <Story story={story} />
          {comments.map((comment) => {
            return <Comment key={comment.story.id} comment={comment} />;
          })}
        </Card>
      )}
    </Container>
  );
};

export default CommentList;
