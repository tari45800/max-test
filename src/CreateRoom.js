import SockJS from 'sockjs-client';
import React, { useState } from 'react';
import kurentoUtils from 'kurento-utils';

function CreateRoom() {
  const ws = new SockJS('https://7ec1-211-193-143-25.ngrok-free.app/groupcall');
  const [participants, setParticipants] = useState([]);
  const [rtcPeer, setRtcPeer] = useState({ writable: null});
  const [ participant, setParticipantt ] = useState('');
  const name = '이제윤';
  const roomId = '이제윤의 room'

  ws.onopen = () => {
    console.log('연결됨')
    sendJoin()
  }

  const sendJoin = () => {
    var message = {
      id : 'joinRoom',
      name : name,
      room : "이제윤의 room",
    }
    sendMessage(message);
  }

  // 서버로 부터 응답을 받았을 때
  ws.onmessage = (message) => {
    var parsedMessage = JSON.parse(message.data);
    console.log('Received message: ' + parsedMessage);

    if(parsedMessage.id == 'existingParticipants'){
      onExistingParticipants(parsedMessage);
    } else if(parsedMessage.id == 'newParticipantArrived'){
      onNewParticipant(parsedMessage);
    }
  }

  function onNewParticipant(request) {
    receiveVideo(request.name);
  }  

  // 참가전 기존의 참가자들의 정보를 가져오는 코드
  const onExistingParticipants = (parsedMessage) => {
    console.log(parsedMessage.data)

    const constraints = {
      audio : true,
      video : {
        mandatory : {
          maxWidth : 320,
          maxFrameRate : 15,
          minFrameRate : 15
        }
      }
    };

    // 기존 참석자의 비디오 영상을 띄우는 코드
    console.log(name + " registered in room " + roomId);
    setParticipantt(setParticipant(name));
    setParticipants(...participants, participant)
    const video = participant.container;

    const options = {
      localVideo: video,
      mediaConstraints: constraints,
      onicecandidate: participant.onIceCandidate
    }

    participant.rtcPeer = new kurentoUtils.WebRtcPeer.WebRtcPeerSendonly(options,
      function (error) {
        if(error) {
          return console.error(error);
        }
        participant.offerToReceiveVideo()
    });

    // parsedMessage.data.forEach(receiveVideo);
  }

  const receiveVideo = (sender) =>{
    setParticipantt(setParticipant(name));
    const video = participant.video;

    const options = {
      localVideo: video,
      onicecandidate: participant.onIceCandidate
    }

    participant.rtcPeer = new kurentoUtils.WebRtcPeer.WebRtcPeerRecvonly(options,
      function (error) {
        if(error) {
          return console.error(error);
        }
        participant.offerToReceiveVideo()
    });
  }

  // 기존 참석자 관련 코드
  const setParticipant = (name) => {

    const container = (
      <div className={name} onClick={()=>{console.log('전체화면')}}>
        <video autoPlay='ture' controls='false'></video>
        <span>{name}</span>
      </div>
      )

    const video = <video autoPlay='ture' controls='false'></video>

    // offer SDP를 생성하는 함수
    // offer
    // Offer는 WebRTC의 연결 과정 중 하나로, 로컬 장치가 다른 장치와 연결하고자 할 때 전송하는 메시지입니다
    // Offer 메시지를 받은 다른 장치는 이에 대한 응답인 Answer 메시지를 생성하게 됩니다.

    // SDP
    // SDP(Session Description Protocol)는 미디어 스트림의 전송 정보를 기술하기 위한 형식입니다.
    const offerToReceiveVideo = (error, offerSdp, wp) => {
      if(error){
        return console.error ("sdp offer error")
      }
      const message = { id : "receiveVideoFrom",
        sender : name,
        sdpOffer : offerSdp
      };
      sendMessage(message);
    }

    // ICE Candidate를 생성하고, 생성된 ICE Candidate 정보를 Signaling Server에 전송하는 함수.
    // ICE (Interactive Connectivity Establishment)는 P2P 연결에서 
    // NAT, 방화벽 및 기타 네트워크 제한으로 인해 발생할 수 있는 연결 문제를 해결하는 기술입니다.
    // P2P 연결을 수행할 때, 먼저 각 사용자는 자신의 로컬 네트워크 구성 및 NAT 타입 등과 같은 정보를 수집하여 ICE Candidate를 생성합니다. 
    // 이후 생성된 ICE Candidate 정보는 다른 사용자와 공유되며, 이를 통해 두 사용자 간 P2P 연결이 수립됩니다.
    const onIceCandidate = (candidate, wp) => {
		  var message = {
		    id: 'onIceCandidate',
		    candidate: candidate,
		    name: name
		  };
		  sendMessage(message);
    }

    // writable를 ture로 변경하는 코드
    const changeRtcPeer = () => {
      setRtcPeer({ writable: true})
    }

    return {container, video, onIceCandidate, offerToReceiveVideo, changeRtcPeer};
  }

  
  function sendMessage(message) {
    var jsonMessage = JSON.stringify(message);
    console.log("이걸 보냈어 : "+jsonMessage)
    ws.send(jsonMessage);
  }

  return(
    <div>
      <h1>여기는 이미 방 안입니다!</h1>
      <div className='participants'></div>
    </div>

  )
}
export default CreateRoom;
