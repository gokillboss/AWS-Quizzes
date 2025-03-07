import React, { useState, useRef, useEffect } from "react";
import { Card, Form, Button, Spinner, Row, Col } from "react-bootstrap";
import { ChatDots, Send, ExclamationCircle } from "react-bootstrap-icons";
import { analyzeQuestion, submitQuery } from "../../services/api";
import "./AIAssistant.css";

// Add custom CSS for the scrollbar
const messageContainerStyle = {
  maxHeight: "400px",
  overflowY: "auto" as const,
  scrollBehavior: "smooth" as const
};

interface AIAssistantProps {
  questionText: string;
  selectedAnswer: string;
  options: Array<{
    text: string;
    isCorrect: boolean;
  }>;
  isReview?: boolean;
}

interface Message {
  id: string;
  type: "user" | "assistant" | "error";
  content: string;
  timestamp: Date;
}

const AIAssistant: React.FC<AIAssistantProps> = ({
  questionText,
  selectedAnswer,
  options,
  isReview = false,
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [animatedMessage, setAnimatedMessage] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll the messages container to bottom whenever messages change or animatedMessage updates
  useEffect(() => {
    scrollToBottom();
  }, [messages, animatedMessage]);

  // Function to scroll the messages container to the bottom
  const scrollToBottom = () => {
    const messagesContainer = document.querySelector('.messages-wrapper');
    if (messagesContainer) {
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  };

  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].type === "assistant") {
      animateText(messages[messages.length - 1].content);
    }
  }, [messages]);

  const generateMessageId = (): string => {
    return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  };

  const addMessage = (
    type: "user" | "assistant" | "error",
    content: string
  ) => {
    setMessages((prev) => [
      ...prev,
      {
        id: generateMessageId(),
        type,
        content,
        timestamp: new Date(),
      },
    ]);
  };

  const animateText = (text: string) => {
    setAnimatedMessage("");
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setAnimatedMessage((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 20);
  };
  

  const handleError = (error: any) => {
    console.error("Error:", error);
    const errorMessage =
      error.response?.data?.message || "An error occurred. Please try again later.";
    setError(errorMessage);
    addMessage("error", errorMessage);
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = inputMessage.trim();
    setInputMessage("");
    addMessage("user", userMessage);
    setIsLoading(true);
    setError(null);

    try {
      const response = await submitQuery({
        userQuery: userMessage,
        questionText,
        selectedAnswer,
        options,
      });

      if (response.success) {
        addMessage("assistant", response.data.answer);
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAnalyzeQuestion = async (): Promise<void> => {
    if (isLoading) return;
    
    setIsLoading(true);
    setError(null);
    addMessage("user", "Please analyze this AWS question for me.");

    try {
      const response = await analyzeQuestion({
        questionText,
        selectedAnswer,
        options,
      });

      if (response.success) {
        addMessage("assistant", response.data.analysis);
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="ai-assistant-card">
      <Card.Header className="d-flex align-items-center bg-primary text-white">
        <ChatDots className="me-2" size={20} />
        <h5 className="mb-0">AWS Expert Assistant</h5>
      </Card.Header>

      <Card.Body className="messages-container p-0">
        <div className="messages-wrapper" style={messageContainerStyle}>
          {messages.length === 0 ? (
            <div className="text-center text-muted empty-message p-4">
              <ChatDots size={40} className="mb-3 text-primary" />
              <p>
                Ask a question or click "Analyze Question" for assistance.
              </p>
            </div>
          ) : (
            <div className="messages-list p-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`message-container ${message.type}-container`}
                >
                  <div className={`message ${message.type}-message`}>
                    {message.type === "error" ? (
                      <div className="error-content">
                        <ExclamationCircle className="me-2" />
                        {message.content}
                      </div>
                    ) : (
                      <div className="message-content">
                        {message.type === "assistant" && message.content === messages[messages.length - 1].content ? animatedMessage : message.content}
                      </div>
                    )}
                    <div className="message-timestamp">
                      {message.timestamp.toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="text-center py-3">
                  <Spinner animation="border" variant="primary" size="sm" />
                  <p className="small text-muted mt-2">Processing your query...</p>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>
      </Card.Body>

      <Card.Footer className="bg-light">
        <Row className="g-2">
          <Col xs={isReview ? 12 : 8}>
            <Form onSubmit={handleSubmit} className="d-flex">
              <Form.Control
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask a question about AWS..."
                disabled={isLoading}
                className="me-2"
              />
              <Button type="submit" variant="primary" disabled={isLoading || !inputMessage.trim()}>
                <Send />
              </Button>
            </Form>
          </Col>
          {!isReview && (
            <Col xs={4}>
              <Button 
                variant="outline-primary" 
                className="w-100"
                onClick={handleAnalyzeQuestion}
                disabled={isLoading}
              >
                {isLoading ? <Spinner animation="border" size="sm" /> : "Analyze Question"}
              </Button>
            </Col>
          )}
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default AIAssistant;