import "./messages.scss";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "./Message/Message";

export default function Messages({ messages, name }) {
  return (
    <ScrollToBottom className="messages">
      {messages.map((message, i) => (
        <div key={i}>
          <Message message={message} name={name} />
        </div>
      ))}
    </ScrollToBottom>
  );
}
