import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>Home</div>
      <button onClick={() => navigate('order-summery')}>Place Order</button>
    </>
  );
};

export default Home;
