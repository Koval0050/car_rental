import './HomeStyle.css';
import { Button } from 'components/common/Button/Button.styled';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/catalog');
  };

  return (
    <div className="home">
      <img
        className="homeImg"
        src="https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg"
        alt=""
      />
      <div className="homeListWraper">
        <ul className="homeList">
          <li className="homeListItem">
            Start Your Journey – Rent, Explore, Dream
          </li>
          <li className="homeListItem">
            Dream Big, Explore More – Rent with Confidence.
          </li>
          <li className="homeListItem">
            Seamless Adventures Await – Rent, Roam, Return.
          </li>
        </ul>
        <Button onClick={handleButtonClick} className="homeBtn" w={'250px'}>
          Go to Rent!
        </Button>
      </div>
    </div>
  );
};

export default Home;
