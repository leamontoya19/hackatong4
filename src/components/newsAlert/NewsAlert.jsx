import React from 'react';

const NewsAlert = () => {
  return (
    <section className="bg-[#f05a40] text-white py-1">
      <div className="bg-white text-black rounded-md flex flex-col md:flex-row items-center p-4 shadow-md">
        {/* Icon section */}
        <div className="flex items-center justify-center bg-[#f05a40] p-4 rounded-full text-white md:mr-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-labelledby="alarm-bell-icon"
            role="img"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 224 224"
            className="fill-current"
          >
            <title id="alarm-bell-icon">Small alarm bell icon</title>
            <g fill="none" stroke="none">
              <g fill="#ffffff">
                <path d="M112,0c-9.8875,0 -17.92,8.0325 -17.92,17.92c0,9.8875 8.0325,17.92 17.92,17.92c9.8875,0 17.92,-8.0325 17.92,-17.92c0,-9.8875 -8.0325,-17.92 -17.92,-17.92zM86.8,27.3c-20.475,8.7675 -33.04,28.5075 -33.04,53.34c0,49.28 -17.0275,61.6525 -27.16,69.02c-4.4975,3.255 -8.68,6.2825 -8.68,11.62c0,18.8475 28.14,26.88 94.08,26.88c65.94,0 94.08,-8.0325 94.08,-26.88c0,-5.3375 -4.1825,-8.365 -8.68,-11.62c-10.1325,-7.3675 -27.16,-19.74 -27.16,-69.02c0,-24.9025 -12.5475,-44.59 -33.04,-53.34c-3.8325,10.185 -13.7025,17.5 -25.2,17.5c-11.4975,0 -21.3675,-7.3325 -25.2,-17.5zM85.12,196.56c0,0.175 0,0.385 0,0.56c0,14.8225 12.0575,26.88 26.88,26.88c14.8225,0 26.88,-12.0575 26.88,-26.88c0,-0.175 0,-0.385 0,-0.56c-8.435,0.35 -17.395,0.56 -26.88,0.56c-9.485,0 -18.445,-0.21 -26.88,-0.56z"></path>
              </g>
            </g>
          </svg>
        </div>

        {/* Message section */}
        <div className="flex-1">
          <p className="font-bold">
            <a
              href="#"
              className="hover:underline text-[#0b67be]"
            >
              Nuevas actualizaciones del estatus de protección temporal (TPS) para Palestina y Líbano.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsAlert;
