import { HomePageStyle } from './styles';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStories, selectAllstory } from '../../store/Story/storySlice';
import CreateThoughts from '../CreateThoughts';
import UpdateThoughts from '../UpdateThoughts';
const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(0);
  const dispatch = useDispatch();

  const story = useSelector(selectAllstory);
  useEffect(() => {
    dispatch(getStories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(editModalOpen);
  return (
    <HomePageStyle>
      <div>
        <div className='valueContainer'>
          {story?.map((item) => {
            return (
              <>
                <div
                  key={item.id}
                  className='rowClass'
                  onClick={() => setEditModalOpen(item?.id)}
                >
                  <h5 className='title'>{item?.Title?.title}</h5>
                  <h6 className='description'>{item?.text}</h6>
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
        {editModalOpen && (
          <UpdateThoughts open={editModalOpen} closeModal={setEditModalOpen} />
        )}
      </div>
    </HomePageStyle>
  );
};

export default Home;
