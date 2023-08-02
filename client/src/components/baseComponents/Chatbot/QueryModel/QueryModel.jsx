import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { Loading } from 'react-simple-chatbot';
import axios from "axios";


const QueryModel = (props) => {
  // console.log('props', props);
  const { steps, method, questionParam = false } = props;
  const userQuestion = steps?.question?.value;
  const queryParamStr = questionParam ? `?question=${userQuestion}` : '';
  // console.log('steps', steps);
  const [modelResponse, setModelResponse] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (queryParamStr) {

      axios[method](`https://isrtmyit2d.eu-west-1.awsapprunner.com/${queryParamStr}`)
           .then(res => {
            setModelResponse(res.data)
            console.log(res.data);
           })
           .catch(e => setModelResponse(e.message))
           .finally(setLoading(false));
    }
  }, [])
  
  return (  
    <section className='model_response'>
      <img src='../../../../../public/assets/Chatbot/chatbotLogo.png' alt='logo sol7' className='iconBot_sol7'/>
      { loading ? <Loading/> :<article className='chatbot_message'>{modelResponse}</article>  }
    </section>
  );
};

QueryModel.propTypes = {
  steps: PropTypes.object,
  method: PropTypes.string,
  questionParam: PropTypes.bool,
};

export default QueryModel;
