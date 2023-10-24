// 예제 데이터
const messages = [
  { type: "left", text: "안녕하세요!", author: "주인공" },
  { type: "right", text: "안녕하세요, 주인공님!", author: "사람1" },
  // ... 다른 메시지들
];

const container = document.querySelector('.container');

messages.forEach(message => {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', message.type);

  const profileDiv = document.createElement('div');
  profileDiv.classList.add('profile');
  profileDiv.innerText = message.author[0];  // 첫 글자만

  const textBox = document.createElement('div');
  textBox.classList.add('text-box');
  textBox.innerText = message.text;

  messageDiv.appendChild(profileDiv);
  messageDiv.appendChild(textBox);
  container.appendChild(messageDiv);
});
