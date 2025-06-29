import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import type { ITask } from "@/Type";
import { Trash2 } from "lucide-react";

interface Iprops{
    task: ITask
}

const TaskCard = ({task}: Iprops) => {
    return (
        <div className="border bg-[#fff1] rounded-md py-3 px-5 my-2">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className={cn("size-3", {
                        "bg-red-400": task.priority == "low",
                        "bg-green-400" : task.priority == "high",
                        "bg-amber-400": task.priority == "midium"
                    })}></div>
                    <p>{task.title}</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button className="p-0 bg-red-300">
                        <Trash2 />
                    </Button>
                    <Checkbox className="" />
                    
                </div>
            </div>
            <p>disciption is here</p>
        </div>
    );
};

export default TaskCard;