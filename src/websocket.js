import React, { useState } from 'react';
import { Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const CreateRoom = () => {
  const [roomName, setRoomName] = useState('');

  const createRoom = () => {
    // const socket = new SockJS('http://localhost:8080/ws');
    // const stompClient = Stomp.over(socket);

    // stompClient.connect({}, () => {
    //   stompClient.send('/app/createRoom', {}, JSON.stringify({ roomName }));
    // });
  };

  const handleChange = (e) => {
    setRoomName(e.target.value);
  };

  var client = Stomp.client('ws://localhost:8080/ws');
  if (typeof window === 'undefined') {
    client._transport.ws.binaryType = 'nodebuffer';
  }

  return (
    <div>
      <h2>채팅방 생성</h2>
      <label htmlFor="room-name">방 이름: </label>
      <input type="text" id="room-name" value={roomName} onChange={handleChange} />
      <button onClick={createRoom}>방 만들기</button>
    </div>
  );
};

export default CreateRoom;
