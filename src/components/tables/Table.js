import React from 'react';
import './table.sass';
const Table = ({ data, handleDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Author</th>
          <th>Components</th>
          <th>Title</th>
          <th>ULR</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={item.objectID}>
            <td>{item.objectID}</td>
            <td>{item.author}</td>
            <td>{item.num_comments}</td>
            <td>{item.story_title}</td>
            <td>{item.story_url}</td>
            <td>
              <button onClick={() => handleDelete(index)}>remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
