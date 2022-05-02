import MessageContainer from "./MessageContainer";
import { useEffect } from "react";
import { socket } from "../../socket";
import { useDispatch, useSelector } from "react-redux";
import { messageActions } from "../../store/message-slice";

export default function MessageList() {
  const dispatch = useDispatch();
  const messageState = useSelector((state) => state.message);

  useEffect(() => {
    socket.on("all-messages", (a) => {
      dispatch(messageActions.fetchMessages(a.messages));
    });
  }, [dispatch]);

  console.log(messageState.messages);

  return (
    <>
      {messageState.messages.map((item) => (
        <MessageContainer key={item.chat_messages_id} message={item} />
      ))}
    </>
  );
}
