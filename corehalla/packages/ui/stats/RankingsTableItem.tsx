import { Progress } from "ui/base/Progress"
import { bg, text } from "../theme"
import { calculateWinrate } from "bhapi/helpers/calculateWinrate"
import { cn } from "common/helpers/classnames"
import type { Ranking } from "bhapi/types"
import type { ReactNode } from "react"

type RankingsTableItemProps = Ranking & {
    className?: string
    index?: number
    content: ReactNode
}

export const RankingsTableItem = ({
    className,
    index = 0,
    rank,
    region,
    games,
    wins,
    rating,
    peak_rating,
    content,
}: RankingsTableItemProps) => {
    return (
        <div
            className={cn(
                "py-1 w-full h-full flex items-center gap-4",
                {
                    [bg("blue2")]: index % 2 === 0,
                },
                bg("blue4", "&:hover"),
                className,
            )}
        >
            <p className="w-16 h-full flex items-center justify-center text-xs">
                {rank}
            </p>
            <p className="w-16 h-full flex items-center justify-center text-xs">
                {region}
            </p>
            {content}
            <p className="w-16 text-center">{games}</p>
            <div className="w-32">
                <Progress
                    value={(wins / games) * 100}
                    className={cn(
                        "h-1 rounded-full mt-2 overflow-hidden",
                        bg("red9"),
                    )}
                    indicatorClassName={cn("h-2", bg("green9"))}
                />
                <div className="flex justify-between text-xs mt-2">
                    <span>{wins}W</span>
                    <span>{games - wins}L</span>
                </div>
            </div>
            <p className="w-20 text-center">
                {calculateWinrate(wins, games).toFixed(2)}%
            </p>
            <div className="w-40 flex items-center justify-start">
                <p>
                    <span className="text-xl font-bold">{rating}</span>{" "}
                    <span className={text("blue11")}>/</span>{" "}
                    <span className="text-sm">{peak_rating} peak</span>
                </p>
            </div>
        </div>
    )
}
