import React from 'react';

const ShowList = props => {
  if (props.list.length === 0) {
    return <h1>Add to the list</h1>;
  }

  return (
    <ul>
      {props.list.map(function(item) {
        return (
          <li key={item} style={{ listStyle: 'none' }}>
            <div className="col-md-8 col-md-offset-4">
              <p className="item">
                {item}
              </p>
              <button
                onClick={props.deleteItem.bind(null, props.list.indexOf(item))}
                className="btn btn-primary btn-sm"
              >
                delete
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ShowList;
