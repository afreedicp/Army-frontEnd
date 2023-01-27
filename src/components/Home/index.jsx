import { HomePageStyle } from './styles';
import { useEffect, useState } from 'react';

import { HomeApi } from '../Api';
import CreateThoughts from '../CreateThoughts';
const Home = () => {
  const [value, setValues] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    HomeApi((data) => {
      setValues(data);
    });
  }, [value]);
  return (
    <HomePageStyle>
      <div>
        <div className='valueeeee'>
          {value?.map((item) => {
            return <ol className='row'>{item.text}</ol>;
          })}
        </div>
        <div className='loaderclass position-fixed w-100'>
          <div
            className='loader'
            onClick={() => {
              setModalOpen(true);
            }}
          ></div>
        </div>
        {modalOpen && <CreateThoughts open={'true'} />}
      </div>
    </HomePageStyle>
  );
};

export default Home;
