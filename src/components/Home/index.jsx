import { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import { HomeApi } from '../Api';
import { HomePageStyle } from './styles';
const Home = () => {
  const [value, setValue] = useState('');
  const [callagain, setcallagain] = useState(false);
  useEffect(() => {
    HomeApi((data) => {
      setValue(value + data.massage);
      console.log(value);
    });
  }, [callagain]);
  return (
    <HomePageStyle>
      <div>
        {value ? (
          <div
            onClick={() => {
              setcallagain(!callagain);
            }}
          >
            <Components value={value} />
          </div>
        ) : (
          <>
            <div className='loader'>ss</div>
<<<<<<< HEAD
            <button></button>
=======
            <button> enter your name</button>
>>>>>>> 085e294 (created a button to enter your name)
          </>
        )}
      </div>
    </HomePageStyle>
  );
};

export default Home;
