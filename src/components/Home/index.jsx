import { useEffect, useState } from 'react';
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
            {/* <Components value={value} /> */}
          </div>
        ) : (
          <>
            <div className='loader'></div>
            <button></button>
            <button> enter your name</button>
          </>
        )}
      </div>
    </HomePageStyle>
  );
};

export default Home;
