import React from 'react';
import useFetchUser from '../hooks/useFetchUser';
import Container from './Container';
import Card from './Card';
import styled from 'styled-components';

const User = (props) => {
  const id = props.match.params.id;
  const { isLoading, user } = useFetchUser(id);
  const date = new Date(user.created * 1000);
  const UserDetail = styled.div`
    margin-bottom: 0.25em;
    font-size: ${(props) => props.theme.fontSizes.large};
    font-weight: bold;
  `;

  return (
    <Container>
      <Card direction="column">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <UserDetail>User: {user.id}</UserDetail>
            <UserDetail>
              Created:{' '}
              {date.toLocaleString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </UserDetail>
            <UserDetail>Karma: {user.karma}</UserDetail>
            {user.about ? (
              <p dangerouslySetInnerHTML={{ __html: user.about }} />
            ) : null}
          </>
        )}
      </Card>
    </Container>
  );
};

export default User;
