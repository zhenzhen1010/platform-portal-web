export function getTime() {
  let message: string = '';
  const hours = new Date().getHours();
  if (hours >= 5 && hours <= 9) {
    message = '早上';
  } else if (hours <= 18) {
    message = '下午';
  } else {
    message = '晚上';
  }
  return message;
}
