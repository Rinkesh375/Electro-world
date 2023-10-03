import React from 'react';
import { useParams } from 'react-router-dom';

const SingleProductPage = () => {
  const {id} = useParams()
  return (
    <div>
      {`ID: ${id}`}
    </div>
  );
}

export default SingleProductPage;
