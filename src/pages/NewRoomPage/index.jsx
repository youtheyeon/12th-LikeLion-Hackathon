import React, { useState } from "react";
import Nav from "../../components/_common/Nav";
import RoomMaker from "../../components/newroompage/RoomMaker";

function NewRoomPage() {
  const [isComplete, setIsComplete] = useState(false);

  return (
    <>
      <Nav text="인증방 만들기" isComplete={isComplete} />
      <RoomMaker setIsComplete={setIsComplete} />
    </>
  );
}

export default NewRoomPage;
