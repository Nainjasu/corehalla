import { Pagination } from "../../base/Pagination"
import { Paginator } from "../../base/Paginator"
import type { Dispatch, ReactNode, SetStateAction } from "react"
import type { PaginatorPage } from "../../base/Paginator"

type RankingsLayoutProps = {
    children: ReactNode
    currentBracket: string
    brackets: PaginatorPage[]
    currentRegion: string
    regions: PaginatorPage[]
    currentPage?: string
    hasPagination?: boolean
    hasSearch?: boolean
    search?: string
    setSearch?: Dispatch<SetStateAction<string>>
    searchPlaceholder?: string
}

export const RankingsLayout = ({
    children,
    brackets,
    currentBracket,
    regions,
    currentRegion,
    currentPage,
    hasPagination = false,
    hasSearch = false,
    search,
    setSearch,
    searchPlaceholder = "Search...",
}: RankingsLayoutProps) => {
    const pagination =
        (currentPage && hasPagination && (
            <Pagination
                getPageHref={(page) =>
                    `/rankings/1v1/${currentRegion ?? "all"}/${page}`
                }
                currentPage={parseInt(currentPage)}
                firstPage={1}
                className="justify-end"
            />
        )) ||
        null

    return (
        <>
            <div className="w-full flex flex-col items-center justify-center gap-2">
                <Paginator
                    pages={brackets}
                    currentPage={currentBracket}
                    getPageHref={(bracket) => `/rankings/${bracket}`}
                />
                <Paginator
                    className="mt-2"
                    pages={regions}
                    currentPage={currentRegion}
                    getPageHref={(region) =>
                        `/rankings/${currentBracket}/${region}`
                    }
                />
            </div>
            {pagination}
            {hasSearch && (
                <input
                    value={search}
                    onChange={(e) => {
                        setSearch?.(e.target.value)
                    }}
                    className="w-full mt-8 p-2 border bg-bgVar2 border-bg"
                    placeholder={searchPlaceholder}
                />
            )}
            <div className="py-4">{children}</div>
            {pagination}
        </>
    )
}