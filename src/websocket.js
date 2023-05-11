import React, { useEffect, useState } from 'react';
import SockJS from 'sockjs-client';
import {Stomp} from '@stomp/stompjs';

const ChatRoom = () => {
  const [messages, setMessages] = useState([{
    id: 1,
    sender: "제윤",
    content: "안녕하세요"
  },
  {
    id: 2,
    sender: "순욱",
    content: "안녕히가세요"
  }
]);

// ...);
  const [newMessage, setNewMessage] = useState('');

  // 처음 실행 했을 때와 messages가 변경되었을 때만 실행되는 코드
  useEffect(() => {
    // SockJS와 Stomp 객체 생성
    const socket = new SockJS('http://localhost:8080/ws');
    const stompClient = Stomp.over(socket);

    // 서버와 연결
    stompClient.connect({}, () => {
      // 연결되면 /topic/messages로 메시지 구독 시작
      stompClient.subscribe('/topic/messages', (message) => {
        const newMessage = JSON.parse(message.body);
        setMessages([...messages, newMessage]);
      });
    }, (error) => {
      console.error('연결 실패:', error);
    });

    return () => {
      // 컴포넌트가 언마운트되면 연결 끊기
      stompClient.disconnect();
    };
  }, [messages]);

  // 인풋에 입력값이 바뀔 때마다 실행되는 코드
  const handleInputChange = (event) => {
    // 인풋의 입력값으로 NewMessage를 변경하는 코드
    setNewMessage(event.target.value);
  };

  // 전송 버튼을 눌리면 실행되는 함수
  const handleSendMessage = () => {

    // 서버로 새 메시지 전송
    const socket = new SockJS('http://localhost:8080/ws');
    const stompClient = Stomp.over(socket);
    stompClient.connect({}, () => {
      stompClient.send('/app/chat', {}, JSON.stringify({ message: newMessage }));
    });
    setNewMessage('');
  };

  return (
    <div>
      <h2>채팅방</h2>
      <div>
        {messages.map((message) => (
          <div key={message.id}>
            <span>{message.sender}: </span>
            <span>{message.content}</span>
          </div>
        ))}
      </div>
      <input type="text" value={newMessage} onChange={handleInputChange} />
      <button onClick={handleSendMessage}>전송</button>
    </div>
  );
};

