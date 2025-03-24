// utils/telegram.ts
import axios from "axios";

// Замените на ваш токен бота и chat_id
// const TELEGRAM_BOT_TOKEN: string = "your-telegram-bot-token";
// const CHAT_ID: string = "your-chat-id";
// const TELEGRAM_BOT_TOKEN: string = "your-telegram-bot-token";
// const CHAT_ID: string = "your-chat-id";

// Тип для параметров отправки сообщения
interface TelegramMessageParams {
  chat_id: string;
  text: string;
}

// Функция для отправки сообщения в Telegram
export const sendMessageToTelegram = async (message: string): Promise<void> => {
    // const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    const url = `https://api.telegram.org/bot7675525540:AAGy9BBsi54zeaFFs2Jt9k_PR2ofrRnGUQ8/sendMessage`;


  


  try {
    await axios.post<TelegramMessageParams>(url, {
        // chat_id: CHAT_ID,
        chat_id: 1005641275,

      
      text: message,
    });
    // console.log("Сообщение отправлено в Telegram");
  } catch (error) {
    console.error("Ошибка при отправке сообщения в Telegram:", error);
  }
};
