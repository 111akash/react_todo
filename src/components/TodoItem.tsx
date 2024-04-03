import { Todo } from "../types/todo";

interface TodoItemProps {
    todo: Todo;
}

export default function TodoItem({todo}: TodoItemProps) {
    return (
        <div>
            <label className="flex items-center gap-2 border rounded-md p-2 border-gray-400bg-white hover:bg-slate-50">
                <input 
                    type="checkbox"
                    className="scale-100"
                />
                <span className={todo.completed ? "line-through text-gray-400" : ""}>
                    {todo.title}
                </span>
            </label>
        </div>
    )
}