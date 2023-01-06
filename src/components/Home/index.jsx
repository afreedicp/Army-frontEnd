import { useEffect, useState } from 'react';
import logo from '../../logo.svg';
import { HomeApi } from '../Api';
import { HomePageStyle } from './styles';
const Home = () => {
  const [value, setVaslue] = useState();
  useEffect(() => {
    HomeApi((data) => {
      setVaslue(data.massage);
    });
  }, []);
  return (
    <HomePageStyle>
      <div>{value ? <div>{value}</div> : <div className='loader'></div>}</div>
    </HomePageStyle>
  );
};

export default Home;
