const btn = document.getElementById('greetBtn');
const text = document.getElementById('greetText');

btn.addEventListener('click', () => {
  const hour = new Date().getHours();
  let greeting = 'Доброї ночі';
  if (hour >= 5 && hour < 12) greeting = 'Доброго ранку';
  else if (hour >= 12 && hour < 18) greeting = 'Доброго дня';
  else if (hour >= 18) greeting = 'Доброго вечора';

  text.textContent = `${greeting}! Ласкаво просимо до SmartAssist.`;
});