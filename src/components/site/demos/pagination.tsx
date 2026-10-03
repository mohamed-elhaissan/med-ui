"use client"

import * as React from "react"

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const TOTAL_PAGES = 10

function getPages(current: number): (number | "ellipsis")[] {
  if (current <= 3) return [1, 2, 3, 4, "ellipsis", TOTAL_PAGES]
  if (current >= TOTAL_PAGES - 2) {
    return [1, "ellipsis", TOTAL_PAGES - 3, TOTAL_PAGES - 2, TOTAL_PAGES - 1, TOTAL_PAGES]
  }
  return [1, "ellipsis", current - 1, current, current + 1, "ellipsis", TOTAL_PAGES]
}

export function PaginationDemo() {
  const [page, setPage] = React.useState(1)

  function go(event: React.MouseEvent<HTMLAnchorElement>, next: number) {
    event.preventDefault()
    setPage(Math.min(Math.max(next, 1), TOTAL_PAGES))
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-sm text-muted-foreground">
        Showing results {(page - 1) * 20 + 1}–{page * 20} of {TOTAL_PAGES * 20}
      </p>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              aria-disabled={page === 1}
              className={page === 1 ? "pointer-events-none opacity-50" : undefined}
              onClick={(event) => go(event, page - 1)}
            />
          </PaginationItem>
          {getPages(page).map((item, index) => (
            <PaginationItem key={`${item}-${index}`}>
              {item === "ellipsis" ? (
                <PaginationEllipsis />
              ) : (
                <PaginationLink
                  href="#"
                  isActive={item === page}
                  onClick={(event) => go(event, item)}
                >
                  {item}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              href="#"
              aria-disabled={page === TOTAL_PAGES}
              className={
                page === TOTAL_PAGES ? "pointer-events-none opacity-50" : undefined
              }
              onClick={(event) => go(event, page + 1)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
