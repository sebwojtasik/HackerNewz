import React from 'react';
import ContentLoader from 'react-content-loader';
import randomInt from '../../utils/randomInt';
import { withTheme } from 'styled-components';

const StoryPlaceHolder = (props) => {
  return (
    <ContentLoader
      speed={1}
      width={900}
      height={42}
      viewBox="0 0 900 42"
      className="content-loader"
      backgroundColor={props.theme.colors.loadingBackground}
      foregroundColor={props.theme.colors.loadingForeground}
      {...props}>
      <rect x="0" y="0" rx="5" ry="5" width={randomInt(500, 900)} height="22" />
      <rect
        x="0"
        y="27"
        rx="5"
        ry="5"
        width={randomInt(250, 450)}
        height="15"
      />
    </ContentLoader>
  );
};

export default withTheme(StoryPlaceHolder);
