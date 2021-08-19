const changeText = (str, target) => {
  const element = target;
  const hold = [];
  let step = 1;
  const tic = setInterval(() => {
    if (step === str.length) { clearInterval(tic); }
    hold.push(str.slice(step - 1, step));
    step += 1;
    element.innerHTML = hold.join('');
  }, 100);
};

const dynamicTextHandler = () => {
  const dynamicText = document.querySelector('.dynamic');
  const arrayOfText = ['Plan', 'Organize'];
  let counter = 0;

  const change = () => {
    changeText(arrayOfText[counter], dynamicText);
    counter += 1;
    if (counter >= arrayOfText.length) {
      counter = 0;
    }
  };

  setInterval(() => {
    change();
  }, 2000);
};

export default dynamicTextHandler;
