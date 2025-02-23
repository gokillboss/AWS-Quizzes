import axios, { InternalAxiosRequestConfig, AxiosResponse } from 'axios';

const API_URL = 'http://localhost:5000/api/v1'; // Update this URL for the production environment if needed

const api = axios.create({
  baseURL: API_URL,
});

// Add an interceptor to attach the token to every request
// api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
//   const token = localStorage.getItem('token');
//   if (token && config.headers) {
//     config.headers['x-auth-token'] = token;
//   }
//   return config;
// }, (error) => {
//   return Promise.reject(error);
// });

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem('token');
  console.log("Token from localStorage:", token);  // Debug line
  if (token && config.headers) {
    config.headers['x-auth-token'] = token;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});


// Define interfaces for expected data structures
interface UserData {
  email: string;
  password: string;
  [key: string]: any; // Additional properties if necessary
}

interface PasswordData {
  oldPassword: string;
  newPassword: string;
}

interface QuizAnswers {
  answers: Record<string, any>; // Update according to your answer structure
}

interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: string;
}

interface CheckoutSessionResponse {
  sessionId: string;
}

interface PurchaseCheckResponse {
  purchased: boolean;
}

// Auth
export const register = (userData: UserData): Promise<AxiosResponse<any>> => api.post('/auth/signup', userData);
export const confirmEmail = (token: string): Promise<AxiosResponse<any>> => api.get(`/auth/confirm/${token}`);
export const login = (userData: UserData): Promise<AxiosResponse<any>> => api.post('/auth/login', userData);
export const findPassword = (email: string): Promise<AxiosResponse<any>> => api.post('/auth/findPassword', { email });
export const resetPassword = (token: string, passwordData: PasswordData): Promise<AxiosResponse<any>> => api.post(`/auth/resetPassword/${token}`, passwordData);

// User
export const getUserProfile = (): Promise<AxiosResponse<any>> => api.get('/user/profile');
export const updatePassword = (passwordData: PasswordData): Promise<AxiosResponse<any>> => api.post('/user/updatePassword', passwordData);
export const updateUserProfile = async (profileData: object): Promise<AxiosResponse<any>> => {
  return api.put('/user/profile', profileData, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

// Quiz
export const getQuizzes = (): Promise<AxiosResponse<any>> => api.get('/quiz/all');
export const getQuiz = (id: string): Promise<AxiosResponse<any>> => api.get(`/quiz/${id}`);
export const getQuestionById = (id: string): Promise<AxiosResponse<Question>> => api.get(`/question/${id}`);
export const submitQuiz = (id: string, answers: QuizAnswers): Promise<AxiosResponse<any>> => api.post(`/quiz/${id}/submit`, answers);

// Results
export const getUserResults = (userId: string): Promise<AxiosResponse<any>> => api.get(`/result/user/${userId}`);
export const getAllQuestions = (): Promise<AxiosResponse<any>> => api.get('/quiz/questions/all');

// Payment
export const checkQuizPurchase = async (quizId: string): Promise<PurchaseCheckResponse> => {
    try {
        const response = await api.get(`/payment/check-purchase?quizId=${quizId}`);
        return response.data;
    } catch (error) {
        console.error('Error checking quiz purchase:', error);
        throw error;
    }
};

export const createCheckoutSession = async (quizId: string): Promise<CheckoutSessionResponse> => {
    try {
        const response = await api.post('/payment/create-checkout-session', { quizId });
        console.log('createCheckoutSession response:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error creating checkout session:', error);
        throw error;
    }
};

interface QuestionAnalysisRequest {
  questionText: string;
  options: Array<{
    text: string;
    isCorrect: boolean;
  }>;
  selectedAnswer: string;
}

interface QueryRequest {
  userQuery: string;
  questionText: string;
  selectedAnswer?: string;
  options?: Array<{
    text: string;
    isCorrect: boolean;
  }>;
}

interface AIResponse<T> {
  success: boolean;
  data: T;
}

interface AnalysisResponse {
  analysis: string;
}

interface QueryResponse {
  answer: string;
}


// New exports for AI features
export const analyzeQuestion = async (data: QuestionAnalysisRequest): Promise<AIResponse<AnalysisResponse>> => {
    try {
        const response = await api.post('/ai/analyze', data);
        return response.data;
    } catch (error) {
        console.error('Error analyzing question:', error);
        throw error;
    }
};

export const submitQuery = async (data: QueryRequest): Promise<AIResponse<QueryResponse>> => {
    try {
        const response = await api.post('/ai/query', data);
        return response.data;
    } catch (error) {
        console.error('Error submitting query:', error);
        throw error;
    }
};

// Helper function to get AI conversation history (if you implement this feature)
export const getAIHistory = async (limit: number = 10, page: number = 1): Promise<AxiosResponse<any>> => {
    try {
        const response = await api.get('/ai/history', {
            params: {
                limit,
                page
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching AI history:', error);
        throw error;
    }
};
export default api;
