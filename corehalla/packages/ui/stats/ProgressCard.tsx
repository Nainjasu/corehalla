import { Card } from "../base/Card"
import { Progress } from "../base/Progress"

type ProgressCardProps = {
    title?: string
    bars: { title: string; value: number; progress: number }[]
}

export const ProgressCard = ({ title, bars }: ProgressCardProps) => {
    return (
        <Card title={title} contentClassName="flex flex-col">
            {bars.map(({ title, value, progress }) => (
                <div className="mt-3" key={title}>
                    <p>
                        <span className="text-xs uppercase text-blue11">
                            {title}
                        </span>{" "}
                        <span className="font-bold">{value}</span>
                    </p>
                    <Progress
                        value={progress}
                        className="h-1 rounded-full mt-2 overflow-hidden mt-1 bg-blue1"
                        indicatorClassName="h-2 bg-blue9"
                    />
                </div>
            ))}
        </Card>
    )
}
