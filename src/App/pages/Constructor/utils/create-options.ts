const createOptions = (obj: Record<string, string>) => {
  return Object.entries(obj).map((option) => {
    return {
      value: option[0],
      text: option[1],
    };
  });
};

export default createOptions;
