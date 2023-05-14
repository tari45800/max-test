import React, { useEffect, useState, useRef } from 'react';
import SockJS from 'sockjs-client';
import {Stomp} from '@stomp/stompjs';
import styled from 'styled-components';

const ChatRoomContainer = styled.div`
  color: rgb(50, 50, 50);
  width: 350px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #ccc;
`;

const AnnouncementContainer = styled.div`
  font-size: 0.8rem;
  padding: 7px;
  border-bottom: 1px solid #ccc;
  height: 50px;
  background: #eee;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChattingBoxContainer = styled.div`
  padding: 7px;
  height: 400px;
  border-bottom: 1px solid #ccc;
  background: #eee;
  overflow-y: auto;
`;

const Chatting = styled.div`


  .sender{
    display: block;
    font-size: 0.7rem;
    margin-top: 10px;
  }

  .content{
    display: inline-block;
    font-size: 0.8rem;
    background: white;
    border-radius: 5px;
    padding: 7px;
    margin: 5px 0;
  }
`;

const InputWindowContainer = styled.div`
  background: #eee;
  padding: 7px;

  div{
    padding: 7px;
    height: 70px;
    background-color: rgb(252, 252, 252);
    box-shadow: rgba(0, 0, 0, 0.06) 0px 0px 4px 0px inset;
    border-radius: 5px;

  }
  input{
    width: 100%;
    border: none;
    background-color: rgb(252, 252, 252);

  }

  button{
    float: right;
    margin-top: 5px;
    border-radius: 5px;
    padding: 7px;
    border: none;
    background-color: rgb(252, 252, 252);;
  }
`;

function ChatRoom(){

  const [messages, setMessages] = useState([
]);

  const [newMessage, setNewMessage] = useState('');
  const roomId = 1;
  const username = 'asdfgh'

  const socketRef = useRef(null);
  const stompClientRef = useRef(null);

  useEffect(() => {
    console.log('@@@서버와 시도중@@@');
    socketRef.current = new SockJS('https://7ec1-211-193-143-25.ngrok-free.app/stomp');

    

    stompClientRef.current = Stomp.over(socketRef.current);

    // 이벤트 핸들러
    stompClientRef.current.connect({}, onConnected);
  
    return () => {
      console.log('@@@서버와 끊어짐@@@');
      stompClientRef.current.send("/pub/chat/leave",
        {},
        JSON.stringify({
          "roomId": roomId,
          writer: username,
          messageType: 'LEAVE'
        })
      );
      stompClientRef.current.disconnect();
    };
  }, []);

  const onConnected = () => {
    console.log('@@@구독 요청중@@@');
    stompClientRef.current.subscribe('/sub/chat/room/' + roomId, onMessageReceived);
    
    console.log('@@@인자 들어갑니다잉@@@');
    stompClientRef.current.send("/pub/chat/enter",
    {},
    JSON.stringify({
        "roomId": roomId,
        writer: username,
        messageType: 'ENTER'
    })
  )};

  const onMessageReceived = (message) => {
    const chat = JSON.parse(message.body);

    if (chat.type === 'ENTER') {
      console.log(chat)
      setMessages((prevState) => [...prevState, chat]);


    } else if (chat.type === 'LEAVE') {
      console.log(chat)
      setMessages((prevState) => [...prevState, chat]);


    } else if (chat.type === 'TALK') {
      console.log(chat)
      setMessages((prevState) => [...prevState, chat]);
      console.log(messages)
    }
  }

  const handleInputChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    console.log('@@@메시지 보냅니다잉@@@');
    stompClientRef.current.send('/pub/chat/message', 
    {}, 
    JSON.stringify({
      "roomId": roomId,
      writer: username,
      message : newMessage,
      messageType: 'TALK'
    }));
    setNewMessage('');
  }  

  return (
    <ChatRoomContainer>
      <AnnouncementContainer>
         <span>공지사항: 자 모두 모두 잠은 죽어서 잡시다!!</span>
      </AnnouncementContainer>
      <ChattingBoxContainer>
        {messages.map((message, idx) => (
          <Chatting key={idx}>
            <span className='sender'>{message.writer}</span>
            <span className='content'>{message.message}</span>
          </Chatting>
        ))}
      </ChattingBoxContainer>
      <InputWindowContainer>
        <div>
          <input type="text" placeholder='체팅을 입력하세요:)' value={newMessage} onChange={handleInputChange} />
        </div>
        <button onClick={handleSendMessage}>보내기</button>
      </InputWindowContainer>
    </ChatRoomContainer>
  );
};

export default ChatRoom;



