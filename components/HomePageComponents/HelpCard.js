const HelpCard = ({ title, image, description, list }) => {
  return (
    <>
      <div className={`text-left border	p-10 m-3 h-full`}>
        <h5 className="text-3xl font-bold mb-4 text-gray-900 text-center">{title}</h5>
        <img src={image} alt={title} width="100%" className="mb-4" />
        <p className="mb-4 text-gray-700">{description}</p>
        <ul className="list-none pl-0 pt-5">
          {list.map((item) => (
            <li key={item} className="mb-4 text-gray-700 flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default HelpCard;
