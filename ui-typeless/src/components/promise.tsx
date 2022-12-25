const TIMER_NUMBER = 1000;
const THRESHOLD_NUMBER = 0.5;

export const Promise: React.FC = () => {
  const userId = "hitu3690";
  const url = `https://api.github.com/users/${encodeURIComponent(userId)}`;
  fetch(url)
    .then((res) => {
      console.log({ res });
    })
    .catch((err) => {
      console.log({ err });
    });

  return <></>;
};
