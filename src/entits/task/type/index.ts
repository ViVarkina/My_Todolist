export interface TaskRequest {
  id: string;
  description: string;
  todolist_id: string;
  title: string;
  due_date: string;
  is_completed: boolean;
  created_at: string;
}

export interface TaskTDO {
  id: string;
  description: string;
  todolistId: string;
  title: string;
  dueDate: string;
  isCompleted: boolean;
  createdAt: string;
}
