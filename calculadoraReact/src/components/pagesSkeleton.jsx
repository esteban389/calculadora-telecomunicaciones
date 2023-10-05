import { Skeleton } from "./ui/skeleton"

export function PagesSkeleton() {
  return (
    <div className="w-full flex flex-col items-center justify-center space-y-8">
        <Skeleton className="w-[350px] h-10" />
        <div className="w-full px-4 space-y-4">
            <Skeleton className="w-[100px] h-6" />
            <Skeleton className="w-full h-8" />
        </div>
        <div className="w-full px-4 space-y-4 flex flex-col items-center">
            <Skeleton className="w-full h-16" />
            <Skeleton className="w-1/6 h-8" />
        </div>
    </div>
  )
}
