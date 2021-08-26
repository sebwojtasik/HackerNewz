const API_URL = 'https://hacker-news.firebaseio.com/v0';

export const getStory = async (id, index) => {
  try {
    const story = await fetch(`${API_URL}/item/${id}.json`).then((response) =>
      response.json()
    );
    return { ...story, index };
  } catch (error) {
    console.log(`Unable to get a story. Error: ${error}`);
  }
};

export const getStories = async (type) => {
  try {
    const storyIds = await fetch(`${API_URL}/${type}stories.json`).then(
      (response) => response.json()
    );
    const stories = await Promise.all(
      storyIds.splice(0, 30).map((story, index) => getStory(story, index))
    );
    return stories;
  } catch (error) {
    console.log(`Unable to get the stories. Error: ${error}`);
  }
};

export const getComments = async (id) => {
  const story = await fetch(`${API_URL}/item/${id}.json`).then((response) =>
    response.json()
  );
  if (!story) {
    return null;
  }
  let comments = [];
  if (story.kids && story.kids.length) {
    comments = await Promise.all(story.kids.map((kid) => getComments(kid)));
  }
  // strip kids from response
  delete story.kids;
  // TODO(davideast): Poll parts
  delete story.parts;
  return {
    story,
    comments,
  };
};

export const getUser = async (id) => {
  try {
    const story = await fetch(`${API_URL}/user/${id}.json`).then((response) =>
      response.json()
    );
    return story;
  } catch (error) {
    console.log(`Unable to get a story. Error: ${error}`);
  }
};
