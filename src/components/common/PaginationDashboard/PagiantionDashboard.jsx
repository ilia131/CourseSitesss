import React, { Fragment , useMemo } from 'react'

const toPersianNumber = (number) => {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  return number
    .toString()
    .replace(/\d/g, (digit) => persianDigits[digit]);
};







const PaginationDashboard = ({ paginate, row, itemsPerPage, currentPage }) => {
  const totalPages = Math.ceil(row.length / itemsPerPage);

  const pageNumbers = useMemo(() => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    let pages = [];
    if (currentPage <= 3) {
      pages = [1, 2, 3, 4, "...", totalPages];
    } else if (currentPage >= totalPages - 2) {
      pages = [1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    } else {
      pages = [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
    }

    return pages;
  }, [totalPages, currentPage]);

  return (
    <div className="flex gap-[10px]">
      <button
        className="w-[22px] h-[22px] rounded-full flex justify-center items-center text-[14px] text-[#333333] font-primaryRegular bg-[#FAFAFA] shadow-md cursor-pointer"
        onClick={() => paginate(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
          <path d="M5.18164 9.125L1.05664 5L5.18164 0.875" stroke="#777777" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {pageNumbers.map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === "number" && paginate(page)}
          className={`w-[22px] h-[22px] rounded-full flex justify-center items-center shadow-md text-[14px] font-primaryRegular cursor-pointer ${
            currentPage === page ? "bg-[#FFB800] text-white" : "bg-white text-[#333333]"
          }`}
          disabled={page === "..."}
        >
          {toPersianNumber(page)}
        </button>
      ))}

      <button
        className="w-[22px] h-[22px] rounded-full flex justify-center items-center text-[14px] text-[#333333] font-primaryRegular bg-[#FAFAFA] shadow-md cursor-pointer"
        onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="10" viewBox="0 0 7 10" fill="none">
          <path d="M1.33496 0.875L5.45996 5L1.33496 9.125" stroke="#777777" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
};

export default PaginationDashboard;

