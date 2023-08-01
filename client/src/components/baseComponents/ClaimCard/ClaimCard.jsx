<<<<<<< HEAD
import React from "react";

const ClaimCard = () => {
  return <div>ClaimCard</div>;
};

export default ClaimCard;
=======
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
>>>>>>> 9a2f24fb3eb5f378599c9e0439ed52163d24995c
