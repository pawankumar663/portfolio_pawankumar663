import { useEffect, useRef, useState } from "react";
import { answerResumeQuery, suggestedQuestions } from "../utils/resumeChat.js";
import ChatRobot from "./ChatRobot.jsx";

const welcome =
  "Hi — ask about Pawan’s work, skills, or contact. I’ll keep answers short. Say “explain” if you want the full version.";

const ResumeChatBot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const [messages, setMessages] = useState([{ role: "bot", text: welcome }]);
  const listRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, pending, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const send = (text) => {
    const query = text.trim();
    if (!query || pending) return;

    setMessages((prev) => [...prev, { role: "user", text: query }]);
    setInput("");
    setPending(true);

    window.setTimeout(() => {
      const reply = answerResumeQuery(query);
      setMessages((prev) => [...prev, { role: "bot", text: reply }]);
      setPending(false);
    }, 350);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    send(input);
  };

  return (
    <div className="resume-chat">
      {open && (
        <section
          className="resume-chat-panel card-border"
          aria-label="Resume chat assistant"
        >
          <header className="resume-chat-header">
            <div>
              <p className="resume-chat-kicker">Assistant</p>
              <h2>Ask about Pawan</h2>
            </div>
            <button
              type="button"
              className="resume-chat-icon-btn"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              ×
            </button>
          </header>

          <div ref={listRef} className="resume-chat-messages">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`resume-chat-bubble ${message.role}`}
              >
                {message.text}
              </div>
            ))}
            {pending && (
              <div className="resume-chat-bubble bot pending">Typing…</div>
            )}
          </div>

          <div className="resume-chat-suggestions">
            {suggestedQuestions.map((question) => (
              <button
                key={question}
                type="button"
                className="resume-chat-chip"
                onClick={() => send(question)}
                disabled={pending}
              >
                {question}
              </button>
            ))}
          </div>

          <form className="resume-chat-form" onSubmit={onSubmit}>
            <label htmlFor="resume-chat-input" className="sr-only">
              Ask a question
            </label>
            <input
              id="resume-chat-input"
              ref={inputRef}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask a short question, or say explain…"
              autoComplete="off"
              disabled={pending}
            />
            <button type="submit" disabled={pending || !input.trim()}>
              Send
            </button>
          </form>
        </section>
      )}

      <button
        type="button"
        className={`resume-chat-toggle ${open ? "is-open" : ""}`}
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? "Close resume chat" : "Open resume chat"}
      >
        <ChatRobot active={open} />
      </button>
    </div>
  );
};

export default ResumeChatBot;
