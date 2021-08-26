import React from 'react';
import StyledLink from './StyledLink';
import styled from 'styled-components';
import timeSince from '../utils/timeSince';

const StoryContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const StoryDetails = styled.div`
  color: ${(props) => props.theme.colors.fontLighter};
  font-size: ${(props) => props.theme.fontSizes.small};
  margin-top: 0.3em;
`;

const StoryTitle = styled.a`
  color: ${(props) => props.theme.colors.font};
  font-size: ${(props) => props.theme.fontSizes.large};
  text-decoration: none;
`;

const Story = ({ story }) => {
  return (
    <StoryContent>
      <StoryTitle href={story.url ? story.url : '/'}>{story.title}</StoryTitle>
      <StoryDetails>
        {story.score} points by{' '}
        <StyledLink to={`/user/${story.by}`}>{story.by}</StyledLink>{' '}
        {timeSince(story.time * 1000)} |{' '}
        <StyledLink to={`/item/${story.id}`}>{`${
          story.descendants ? story.descendants : 0
        } comments`}</StyledLink>
      </StoryDetails>
    </StoryContent>
  );
};

export default Story;
