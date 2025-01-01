import React, { Fragment } from 'react'

const toPersianNumber = (number) => {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  return number
    .toString()
    .replace(/\d/g, (digit) => persianDigits[digit]);
};






const PagiantionDashboard = ({ paginate, row, itemsPerPage, currentPage }) => {
  const totalPages = Math.ceil(row.length / itemsPerPage);

  const paginateWithFixedButtons = () => {
    let pageNumbers = [];
    let startPage = Math.max(currentPage - 2, 1);  
    let endPage = Math.min(currentPage + 2, totalPages);  

    if (endPage - startPage < 4) {
      if (startPage > 1) {
        startPage = endPage - 4;
      } else {
        endPage = startPage + 4;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  const pageNumbers = paginateWithFixedButtons();

  return (
    <Fragment>
      <div className="flex gap-[10px]">
        {/* دکمه صفحه قبلی */}
        <div
          className="w-[22px] h-[22px] rounded-full flex justify-center items-center text-[14px] text-[#333333] font-primaryRegular pr-[7px] pl-[6.16px] bg-[#FAFAFA] shadow-[0px_1px_2px_0px_#0000004D] cursor-pointer"
          onClick={() => currentPage > 1 && paginate(currentPage - 1)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
            <path
              d="M5.18164 9.125L1.05664 5L5.18164 0.875"
              stroke="#777777"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => paginate(page)}
            className={`w-[22px] h-[22px] rounded-full flex justify-center items-center shadow-[0px_1px_2px_0px_#0000004D] ${
              currentPage === page ? 'bg-[#FFB800]' : 'bg-white'
            } text-[14px] text-[#333333] font-primaryRegular pr-[7px] pl-[6.16px] cursor-pointer`}
          >
            <span className="w-[8.8px] h-[14.9px] flex justify-center items-center pb-[4px] mt-[1px]">
              {toPersianNumber(page)}
            </span>
          </button>
        ))}

        <div
          className="w-[22px] h-[22px] rounded-full flex justify-center items-center text-[14px] text-[#333333] font-primaryRegular pr-[7px] pl-[6.16px] bg-[#FAFAFA] shadow-[0px_1px_2px_0px_#0000004D] cursor-pointer"
          onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="7" height="10" viewBox="0 0 7 10" fill="none">
            <path
              d="M1.33496 0.875L5.45996 5L1.33496 9.125"
              stroke="#777777"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </Fragment>
  );
};

export default PagiantionDashboard;
