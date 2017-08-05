import React, { PropTypes } from 'react';

import RepoListItem from './RepoListItem';

function ReposList({ loading, error, repos }) {
  if (loading) {
    return <h3>Loading ...</h3>;
  }

  if (error !== false) {
    return <h3>Something went wrong, please try again!</h3>;
  }

  let content = (<div></div>);

  if (repos) {
    content = repos.map((item, index) => (
      //<p key={`item-${index}`}>Repo - {index}</p>
      <RepoListItem key={`item-${index}`} item={item} />
    ));
  } else {
    content = <h3>No repos found!</h3>;
  }

  return (
      <div>
          {content}
      </div>
    );
}

ReposList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  repos: PropTypes.any,
};

export default ReposList;
