// @ts-check

const progress = () => {
    const progressBar = document.querySelector('progress');
    let i = 1;
    const intervalId = setInterval(() => {
      progressBar.setAttribute('value', i.toString());
      i += 1;
      if (i > 100) {
        clearInterval(intervalId);
      }
    }, 1000);
  };
  
  export default progress;
