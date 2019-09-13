import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const profileQuery = gql`
  {
    github {
      user(username: "kunstloch") {
        login
        avatar_url
        repos {
          name
        }
      }
    }
  }
`;

function Profile() {
  const { loading, error, data } = useQuery(profileQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <div>{data.github.user.login}</div>
      <img width="200" src={data.github.user.avatar_url} />
      <div>
        {data.github.user.repos.map(repo => (
          <div>{repo.name}</div>
        ))}
      </div>
    </>
  );
}

export default Profile;
