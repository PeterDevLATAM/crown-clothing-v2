import { useNavigate } from 'react-router-dom';
import './directory-item.styles.scss';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  const navigate = useNavigate()

  const handleLink=()=>{
    navigate(`shop/${title}`)
  }
  return (
   
   
    <div className='directory-item-container' onClick={handleLink} >
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        />
      <div className='directory-item-body'>
        <h2>{title}</h2>
        <p>Shop Now</p>
        
      </div>
    </div>
        
  );
};

export default DirectoryItem;
