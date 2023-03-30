import { HomePageStyle } from './styles';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getStories,
  selectAllstory,
  deleteAStory,
  removeItem,
} from '../../store/Story/storySlice';
import CreateThoughts from '../CreateThoughts';
import UpdateThoughts from '../UpdateThoughts';
import { motion } from 'framer-motion';
import { type } from '@testing-library/user-event/dist/type';
const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(0);
  const [deletedCard, setDeletedCard] = useState();
  const dispatch = useDispatch();

  const story = useSelector(selectAllstory);
  useEffect(() => {
    dispatch(getStories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const deleteStory = (id, index) => {
    setDeletedCard(index);
    setTimeout(() => {
      setDeletedCard();
    }, 5000);

    dispatch(
      deleteAStory({
        id,
        successCB: () => {
          setDeletedCard(index);

          setTimeout(() => {
            setDeletedCard();
            dispatch(removeItem({ index }));
          }, 1000);
        },
      })
    );
  };

  return (
    <HomePageStyle>
      <div>
        <div className='valueContainer'>
          {story?.map((item, index) => {
            return (
              <>
                <motion.div
                  animate={{
                    rotate: deletedCard === index ? [0, 200, 200, 0] : 0,
                    y: deletedCard === index ? [0, -500, 200] : 0,
                    x:
                      deletedCard === index
                        ? Math.random() * (-2000 - 2000) + 2000
                        : 0,
                  }}
                  transition={{ duration: 1.6 }}
                  key={item.id}
                  className={`rowClass `}
                  onClick={() => setEditModalOpen(item?.id)}
                >
                  <h5 className='title'>{item?.Title?.title}</h5>
                  <h6 className='description'>{item?.text}</h6>

                  <i
                    className='fa-solid fa-toilet toileticon'
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteStory(item.id, index);
                    }}
                  ></i>
                </motion.div>
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
