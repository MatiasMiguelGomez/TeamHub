import { People } from '@/data/people';
import { addPeople } from '@/redux/states';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PeopleTable } from './components';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPeople(People));
  }, []);

  return <PeopleTable />;
};

export default Home;
