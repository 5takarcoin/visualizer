const timer = (ms) => new Promise((res) => setTimeout(res, ms));

export const bubble = async (arr, setArr, setProcessing, setProcessing2) => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      setProcessing(j);
      setProcessing2(j + 1);
      let a = arr[j];
      if (a != arr[-1]) {
        var b = arr[j + 1];
        if (a > b) {
          arr[j] = b;
          arr[j + 1] = a;
          setArr([...arr]);
        }
      }
      await timer(10);
    }
  }
  setProcessing(-1);
  setProcessing2(-1);
};
