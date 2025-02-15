import { useState, useMemo } from "react";

interface PaginationResult<T> {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
  paginatedItems: T[];
}

export function usePagination<T>(items: T[], itemsPerPage: number): PaginationResult<T> {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = useMemo(() => Math.ceil(items.length / itemsPerPage) || 1, [items, itemsPerPage]);

  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return items.slice(startIndex, startIndex + itemsPerPage);
  }, [items, currentPage, itemsPerPage]);

  return { currentPage, setCurrentPage, totalPages, paginatedItems };
}
