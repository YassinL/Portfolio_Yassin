import * as React from "react";

function SvgComponent(props) {
  return (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M485.291 129.408l-224-128a10.645 10.645 0 00-10.581 0l-224 128a10.665 10.665 0 00-5.376 9.259v234.667c0 3.819 2.048 7.36 5.376 9.259l224 128c1.643.939 3.456 1.408 5.291 1.408s3.648-.469 5.291-1.408l224-128a10.665 10.665 0 005.376-9.259V138.667a10.668 10.668 0 00-5.377-9.259z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgComponent;
