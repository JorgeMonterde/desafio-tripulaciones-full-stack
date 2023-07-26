import { Card } from "@nextui-org/react";
import PropTypes from 'prop-types';

const ClaimCard = ({img, alt}) => {
  
  return (
    <article className='claimCard'>
      <Card>
        <Card.Header>
          <h2 className='claim_text'>Claim</h2>
        </Card.Header>
        <Card.Image className='claim_img'src={img} alt={alt}/>
      </Card>
    </article>
  );
};

ClaimCard.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
};

export default ClaimCard;