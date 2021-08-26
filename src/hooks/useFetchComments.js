import { useState, useEffect } from 'react';
import { getComments } from '../services/HNService';

const useFetchComments = (id) => {
  const [comments, setComments] = useState([]);
  const [story, setStory] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getComments(id)
      .then(({ comments, story }) => {
        setComments(comments);
        setStory(story);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [id]);

  return { isLoading, story, comments };
};

export default useFetchComments;
