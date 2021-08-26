import React from 'react';
import useFetchStories from '../hooks/useFetchStories';
import Story from './Story';
import Container from './Container';
import StoryPlaceholder from './placeholders/StoryPlaceholder';
import Card from './Card';

const StoryList = ({ storyType }) => {
  const { isLoading, stories } = useFetchStories(storyType);
  return (
    <Container>
      {isLoading
        ? [...Array(10)].map((e, i) => {
            return (
              <Card direction="row" key={i}>
                <StoryPlaceholder />
              </Card>
            );
          })
        : stories.map((story) => {
            return (
              <Card direction="row" key={story.id}>
                <Story story={story} />
              </Card>
            );
          })}
    </Container>
  );
};

export default StoryList;
