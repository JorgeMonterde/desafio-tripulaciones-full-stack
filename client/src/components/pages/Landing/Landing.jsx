const Landing = () => {
  
  return (
    <>
      <article className='claim_container'>
        <h1>Claim</h1>
        <h3>subtitle</h3>
        <button className='claimCta_btn'>CTA</button>
      </article>

      <article className='card_img_text'>
        <img className='card_img' src='../../../../public/assets/energyImg.avif' alt='Card background' />
        <p className='card_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
      </article>

      <article className='card_img_text'>
        <p className='card_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        <img className='card_img' src='../../../../public/assets/energyImg.avif' alt='Card background' />
      </article>

      <article className='card_img_text'>
        <img className='card_img' src='../../../../public/assets/energyImg.avif' alt='Card background' />
        <p className='card_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
      </article>
    </>
  )
};
export default Landing;