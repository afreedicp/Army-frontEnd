import { HomePageStyle } from './styles';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStories, selectAllstory } from '../../store/Story/storySlice';
import CreateThoughts from '../CreateThoughts';
const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const story = useSelector(selectAllstory);
  console.log(story);
  useEffect(() => {
    dispatch(getStories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <HomePageStyle>
      <div>
        <div className='valueeeee'>
          {story?.map((item) => {
            return (
              <>
                <div className='row'>
                  <div className='title'>{item.Title.title}</div>
                  <div className='description'>{item.text}</div>
                </div>
              </>
            );
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
        {modalOpen && (
          <CreateThoughts open={modalOpen} closeModal={setModalOpen} />
        )}
      </div>
    </HomePageStyle>
  );
};

export default Home;
