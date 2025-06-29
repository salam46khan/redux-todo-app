import TaskCard from "@/components/module/task/TaskCard";
import { selectFilter, selectTask } from "@/redux/feature/task/taskSlice";
import { useAppSelector } from "@/redux/hooks";

const Task = () => {
    const task = useAppSelector(selectTask)
    const filter = useAppSelector(selectFilter)
    console.log(task);
    console.log(filter);
    
    return (
        <div className="container mx-auto py-10">
            {
                task.map(task => <TaskCard task={task}/>)
            }
        </div>
    );
};

export default Task;