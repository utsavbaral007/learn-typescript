const Debounce = () => {
  const debounce = (cb: any, delay: number) => {
    let timer: number;
    return (...args: any) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  };

  const handleChange = debounce((e: any) => {
    console.log(e.target.value);
  }, 1000);

  return (
    <>
      <input
        className="border outline-none border-black py-2 px-3"
        type="text"
        onChange={handleChange}
      />
    </>
  );
};

export default Debounce;
