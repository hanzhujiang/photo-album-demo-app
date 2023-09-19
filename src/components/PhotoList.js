import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos } from '../redux/slices/photosSlice';

const AlbumWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
  gap: 20px;
`;

// Define styles for the individual photo
const Photo = styled.div`
  width: 200px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 2px;
  text-align: center;

  img {
    width: 100px;
    height: 100px;
    border-radius: 5%;
  }

  p {
    margin-top: 10px;
    font-size: 14px;
  }
`;

const PhotoList = () => {
  const dispatch = useDispatch();
  const { photos, loading, error } = useSelector((state) => state.photos);

  useEffect(() => {
    dispatch(fetchPhotos(1));
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Photos from Album 1</h1>
      <AlbumWrapper>
      {photos.map((photo) => (
        <Photo key={photo.id}>
          <img src={photo.thumbnailUrl} alt={photo.title} />
          <p>{photo.title}</p>
        </Photo>
      ))}
    </AlbumWrapper>
    </div>
  );
};

export default PhotoList;