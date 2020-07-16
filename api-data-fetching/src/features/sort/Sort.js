import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSort } from './sortSlicer';

const Sort = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    // equivalent to componentDidMount when payload is a blank array
    dispatch(fetchSort());
  }, []);
  
  return null;
}

export default Sort;
