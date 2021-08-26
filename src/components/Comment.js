import React from 'react';
import styled from 'styled-components';
import timeSince from '../utils/timeSince';
import StyledLink from './StyledLink';

const CommentDetails = styled.span`
  color: ${(props) => props.theme.colors.fontLighter};
  font-size: ${(props) => props.theme.fontSizes.small};
`;

const CommentContent = styled.p`
  font-size: ${(props) => props.theme.fontSizes.medium};
  margin-top: 0.5em;
`;

const Comment = ({ comment }) => {
  const nestedComments = (comment.comments || []).map((comment) => {
    return <Comment key={comment.story.id} comment={comment} />;
  });
  return (
    <ul key={comment.story.id}>
      <li>
        <CommentDetails>
          <StyledLink to={`/user/${comment.story.by}`}>
            {comment.story.by}
          </StyledLink>{' '}
          | {timeSince(comment.story.time * 1000)}
        </CommentDetails>
        <CommentContent
          dangerouslySetInnerHTML={{ __html: comment.story.text }}
        />
      </li>
      {nestedComments}
    </ul>
  );
};

export default Comment;
