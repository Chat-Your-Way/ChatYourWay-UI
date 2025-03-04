// import { nanoid } from 'nanoid';

export const getTime = (timestamp) => {
  const dateObject = new Date(timestamp);
  const hours = dateObject.getHours();
  const minutes = dateObject.getMinutes();
  const seconds = dateObject.getSeconds();

  const time = `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return time;
};

// export const processMessageData = ({
//   sortedCurrentMessageByTopic,
//   historyMessages,
//   newMessages,
//   notifications,
// }) => {
//   const messagesData = [
//     ...historyMessages,
//     ...newMessages,
//     ...sortedCurrentMessageByTopic,
//   ];

export const processMessageData = ({ arrayOfMessages }) => {
  // const messagesData = [...sortedCurrentMessagesByTopic];

  const messages = arrayOfMessages.map((messageData) => {
    // eslint-disable-next-line prettier/prettier
    const {
      content: messageContent,
      timestamp,
      sender,
      my: isMyMessage,
      topicId,
      messageStatus,
    } = messageData;

    const message = {
      // id: nanoid(),
      id: messageData.id,
      // topicId: notification?.topicId, //?! not used
      avatarId: sender.avatarId,
      name: sender.nickname,
      time: getTime(timestamp),
      text: messageContent,
      isMyMessage: isMyMessage,
      senderId: sender.id,
      senderEmail: sender.email,
      permittedSendingPrivateMessage: sender.permittedSendingPrivateMessage,
      topicId,
      messageStatus,
    };

    return message;
  });
  // const messagesData = [...historyMessages, ...newMessages];

  // const messages = messagesData.map((messageData) => {
  //   const { content, timestamp, sentFrom } = messageData;

  //   const subscriber = data.topicSubscribers.find(
  //     ({ contact }) => contact.email === sentFrom,
  //   );
  //   const notification = notifications.find(
  //     (notification) => notification.email === sentFrom,
  //   );

  //   const message = {
  //     id: nanoid(),
  //     topicId: notification?.topicId, //?! not used
  //     avatarId: subscriber?.contact.avatarId,
  //     name: subscriber?.contact.nickname,
  //     time: getTime(timestamp),
  //     text: content,
  //     isMyMessage: sentFrom === email,
  //     isOnline: notification?.status !== 'OFFLINE',
  //   };

  //   return message;
  // });

  return messages;
};
