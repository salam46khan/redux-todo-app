import { selectFilter, selectTask } from "@/redux/feature/task/taskSlice";
import { useAppSelector } from "@/redux/hooks";

const Task = () => {
    const task = useAppSelector(selectTask)
    const filter = useAppSelector(selectFilter)
    console.log(task);
    console.log(filter);
    
    return (
        <div>
            <p>this is task page</p>
        </div>
    );
};

export default Task;