// import { Card } from "@nextui-org/react";


const Landing = () => {
  
  return (
    <>
      <article className='claim_container'>
        <h1>Claim</h1>
        <h3>subtitle</h3>
        <button className='claimCta_btn'>CTA</button>
        {/* <Card className='claimCard'>
          <Card.Header className='claimCard_header'>
          </Card.Header>
          <Card.Image className='claim_img' src='../../../../public/assets/energyImg.avif' alt='Card background'/>
        </Card> */}
      </article>

      <article className='card_img_left'>
        <img className='cardImgLeft_img' src='../../../../public/assets/energyImg.avif' alt='Card background' />
        <p className='cardImgLeft_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
      </article>

      {/* <article className='card_img_rigth'>
        <p className='cardImgRigth_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        <img className='cardImgRigth_img' src='../../../../public/assets/energyImg.avif' alt='Card background' />
      </article> */}
    </>
  )
};
export default Landing;