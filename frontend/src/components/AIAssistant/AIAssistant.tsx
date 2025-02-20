// src/components/AIAssistant/AIAssistant.tsx
import React, { useState, useRef, useEffect } from "react";
import { Card, Form, Button, Spinner, Row, Col } from "react-bootstrap";
import { ChatDots, Send, ExclamationCircle } from "react-bootstrap-icons";
import { analyzeQuestion, submitQuery } from "../../services/api";
import "./AIAssistant.css";

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
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

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

  const handleError = (error: any) => {
    console.error("Error:", error);
    const errorMessage =
      error.response?.data?.message ||
      "Đã có lỗi xảy ra. Vui lòng thử lại sau.";
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

  const handleAnalyze = async (): Promise<void> => {
    if (isLoading) return;

    if (!selectedAnswer) {
      setMessages([
        {
          id: generateMessageId(),
          type: "error",
          content: "Vui lòng chọn một đáp án trước khi phân tích",
          timestamp: new Date(),
        },
      ]);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await analyzeQuestion({
        questionText,
        options,
        selectedAnswer,
      });

      if (response.success) {
        setMessages([
          {
            id: generateMessageId(),
            type: "assistant",
            content: response.data.analysis,
            timestamp: new Date(),
          },
        ]);
      }
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatTimestamp = (date: Date): string => {
    return date.toLocaleTimeString("vi-VN", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatContent = (content: string) => {
    return content.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <Card className="ai-assistant-card">
      <Card.Header className="d-flex align-items-center bg-primary text-white">
        <ChatDots className="me-2" size={20} />
        <h5 className="mb-0">AWS Expert Assistant</h5>
      </Card.Header>

      <Card.Body className="messages-container p-0">
        <div className="messages-wrapper">
          {messages.length === 0 ? (
            <div className="text-center text-muted empty-message p-4">
              <ChatDots size={40} className="mb-3 text-primary" />
              <p>
                Hãy đặt câu hỏi hoặc nhấn "Phân tích câu hỏi" để được trợ giúp.
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
                        {formatContent(message.content)}
                      </div>
                    )}
                    <div className="message-timestamp">
                      {formatTimestamp(message.timestamp)}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="text-center py-3">
                  <Spinner animation="border" variant="primary" size="sm" />
                  <p className="small text-muted mt-2">Đang xử lý câu hỏi...</p>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>
      </Card.Body>

      <Card.Footer className="bg-light">
        <Row className="g-2">
          <Col>
            <Button
              variant="success"
              onClick={handleAnalyze}
              disabled={isLoading}
              className="w-100"
            >
              {isLoading ? (
                <>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    className="me-2"
                  />
                  Đang phân tích...
                </>
              ) : (
                "Phân tích câu hỏi"
              )}
            </Button>
          </Col>
          <Col xs={8}>
            <Form onSubmit={handleSubmit} className="d-flex">
              <Form.Control
                type="text"
                value={inputMessage}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setInputMessage(e.target.value)
                }
                placeholder="Đặt câu hỏi về AWS..."
                disabled={isLoading}
                className="me-2"
              />
              <Button
                type="submit"
                variant="primary"
                disabled={isLoading || !inputMessage.trim()}
              >
                <Send />
              </Button>
            </Form>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default AIAssistant;