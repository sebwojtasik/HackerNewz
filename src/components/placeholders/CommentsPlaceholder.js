import React from 'react';
import ContentLoader from 'react-content-loader';
import randomInt from '../../utils/randomInt';
import { withTheme } from 'styled-components';

const CommentsPlaceholder = (props) => {
  return (
    <ContentLoader
      speed={1}
      width={900}
      height={642}
      viewBox="0 0 900 642"
      className="content-loader"
      backgroundColor={props.theme.colors.loadingBackground}
      foregroundColor={props.theme.colors.loadingForeground}
      {...props}>
      <rect x="0" y="0" rx="5" ry="5" width="699" height="22" />
      <rect x="0" y="27" rx="5" ry="5" width="321" height="15" />
      <rect
        x="25"
        y="57"
        rx="5"
        ry="5"
        width={randomInt(100, 200)}
        height="15"
      />
      <rect
        x="25"
        y="82"
        rx="5"
        ry="5"
        width={randomInt(500, 800)}
        height="95"
      />
      <rect
        x="25"
        y="212"
        rx="5"
        ry="5"
        width={randomInt(100, 200)}
        height="15"
      />
      <rect
        x="25"
        y="237"
        rx="5"
        ry="5"
        width={randomInt(500, 800)}
        height="95"
      />
      <rect
        x="25"
        y="367"
        rx="5"
        ry="5"
        width={randomInt(100, 200)}
        height="15"
      />
      <rect
        x="25"
        y="392"
        rx="5"
        ry="5"
        width={randomInt(500, 800)}
        height="95"
      />
      <rect
        x="25"
        y="522"
        rx="5"
        ry="5"
        width={randomInt(100, 200)}
        height="15"
      />
      <rect
        x="25"
        y="547"
        rx="5"
        ry="5"
        width={randomInt(500, 800)}
        height="95"
      />
    </ContentLoader>
  );
};

export default withTheme(CommentsPlaceholder);
