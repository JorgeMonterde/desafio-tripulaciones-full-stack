import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import QueryModel from './QueryModel/QueryModel';
import { useState } from 'react';
 
const steps = [
  {
    id: '1',
    component: <QueryModel method='get'/>,
    trigger: 'question'
  }, {
      id: 'question',
      user: true,
      trigger: 'response',
  }, {
      id: 'response',
      component: <QueryModel method='post' questionParam={true}/>,
      trigger: '2',
  }, {
    id: '2',
    message: '¿Tienes otra pregunta?',
    trigger: '3'
  }, {
    id: '3',
    options: [
      { value: 1, label: 'si', trigger: 'anotherQuestion' },
      { value: 2, label: 'no', trigger: '4' }
    ],
  }, {
    id: '4',
    message: 'gracias por visitarnos',
    trigger: 'question'
  }, {
    id: 'anotherQuestion',
    message: '¿Cuál es tu pregunta?',
    trigger: 'question'
  }
];

// Creating our own theme
const theme = {
    background: '#C9FF8F',
    headerBgColor: '#197B22',
    headerFontSize: '20px',
    botBubbleColor: '#0F3789',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#FF5733',
    userFontColor: 'white',
};
 
// Set some properties of the bot
const config = {
    botAvatar: 'https://images.unsplash.com/photo-1529704193007-e8c78f0f46f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZW5lcmd5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    userAvatar: '../../../../public/assets/logo.png',
    floating: true,
};

const Chatbot = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  
  return (
    <article>
        <ThemeProvider theme={theme}>
          <ChatBot
            headerTitle="sol7"
            steps={steps}
            opened={isChatbotOpen}
            handleEnd={() => setIsChatbotOpen(false)}
            toggleFloating={() => setIsChatbotOpen(!isChatbotOpen)}
            {...config}
          />
        </ThemeProvider>
    </article>
  );
};

export default Chatbot;