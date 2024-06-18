import React from "react";

const CardSkeleton = () => {
    return (
        <div class="animate-pulse relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px] cursor-pointe bg-gray-300 flex items-end">
            <div class="animate-pulse flex space-x-4  w-full p-5">
                <div class="flex-1 space-y-6 py-1">
                    <div class="h-4 bg-slate-400 rounded"></div>
                    <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                            <div class="h-4 bg-slate-400 rounded col-span-2"></div>
                            <div class="h-4 bg-slate-400 rounded col-span-1"></div>
                        </div>
                        <div class="h-4 bg-slate-400 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardSkeleton;
