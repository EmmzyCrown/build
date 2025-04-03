import React from 'react';

function List({ items, renderItem }) {
  if (!items.length) {
    return <p>No items to display.</p>;
  }

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{renderItem ? renderItem(item) : item.title}</li>
      ))}
    </ul>
  );
}

export default List;