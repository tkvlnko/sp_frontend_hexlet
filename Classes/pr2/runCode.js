const runCode = (action, catcher = null) => {
    try {
      return action();
    } catch (e) {
      if (catcher) {
        return catcher(e);
      }
      throw e;
    }
  };
  
  export default runCode;
  