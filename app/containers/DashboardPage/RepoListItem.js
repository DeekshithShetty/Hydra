import React from 'react';

function RepoListItem(props) {
  return (
    <div>
        <p>{props.item.name}</p>
    </div>
  );
}

RepoListItem.propTypes = {
  item: React.PropTypes.object,
};

export default RepoListItem;
