const Six = (props) => {
  return (
    <>
      <div className="flex flex-row">
        <div className="rounded-full bg-blue-300 w-10 h-10 border-2 border-blue-800 text-blue-800 text-center pt-0.5 text-lg">
          {props.value}
        </div>
        <div>
          <svg
            className="ml-5 w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>
        <div className="rounded-full bg-blue-300 w-10 h-10 ml-5 border-2 border-blue-800 text-blue-800 text-center pt-0.5 text-lg">
          {props.index + 1}
        </div>
        <div>
          <svg
            className="ml-5 w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 8h16M4 16h16"
            ></path>
          </svg>
        </div>
        <div className="rounded-full bg-blue-300 border-2 border-blue-800 text-blue-800 w-10 h-10 ml-4 text-center pt-0.5 text-lg">
          {props.prod}
        </div>
      </div>
    </>
  );
};

export default Six;
