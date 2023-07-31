import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { Loading } from 'react-simple-chatbot';
import axios from "axios";


const QueryModel = (props) => {
  console.log('props', props);
  const { steps, method, questionParam = false } = props;
  const userQuestion = steps?.question?.value;
  const queryParamStr = questionParam ? `?question=${userQuestion}` : '';
  console.log('steps', steps);
  const [modelResponse, setModelResponse] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios[method](`http://localhost:3000/${queryParamStr}`)
         .then(res => {
          setModelResponse(res.data)
          console.log(res.data);
         })
         .catch(e => setModelResponse(e.message))
         .finally(setLoading(false));
  }, [])
  
  return (
    <div className='model_response'>
      { loading ? <Loading/> : modelResponse }
    </div>
  );
};

QueryModel.propTypes = {
  steps: PropTypes.object,
  method: PropTypes.string,
  questionParam: PropTypes.bool,
};

export default QueryModel;
