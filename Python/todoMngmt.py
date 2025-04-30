#load existing items
# create  a new item 
# list items 
# mark items as complete
# save items
import json
file_name = 'todo.json'
def load_tasks():
    try:
        with open(file_name, 'r') as file:
            tasks = json.load(file)
            return tasks
    except FileNotFoundError:
        return [{"tasks": []}]  # if file not found, return empty list

def save_tasks(tasks):
    try:
        with open(file_name, 'w') as file:
            return json.dump(tasks, file)
    except :
        print("Failed to save tasks.")  

def create_task(tasks):
    description = input("Enter task description: ").strip()
    if description:
        tasks["tasks"].append({"description": description, "completed": False})
        save_tasks(tasks)
        print("Task added.")
    else:
        print("Task description cannot be empty.")


def view_tasks(tasks):
    print()
    task_list = tasks["tasks"]
    if len(task_list) == 0:
        print("No tasks available.")
        return
    else:
        print("Your TO-DO List:")
        for idx,task in enumerate(task_list):
            status = "✔️" if task["completed"] else "❌"
            print(f"{idx + 1}. {task['description']} | [{status}]")
        
def mark_task_complete(tasks):
    view_tasks(tasks)
    try:
        task_number = int(input("Enter the task number to mark as complete: ").strip())
        if 1 <= task_number <= len(tasks):
            tasks["tasks"][task_number - 1]["completed"] = True
            save_tasks(tasks)
            print("Task marked as complete.")
        else:
            print("Invalid task number.")
    except:
        print("Enter a valid number.")



def delete_task():
    pass
def main():
    tasks = load_tasks()
    print("Welcome to the To-Do List Management System")
    print("You can view, add, complete, and delete tasks.")
    while True:
        print("\nMenu:")
        print("1. View tasks")
        print("2. Add tasks")
        print("3. Complete tasks")
        print("4. Exit")
        
        choice = input("Enter your choice: ")
        
        if choice == '1':
            view_tasks(tasks)
        elif choice == '2':
            create_task(tasks)
        elif choice == '3':
            mark_task_complete(tasks)
        elif choice == '4':
            print("Exiting the program.")
            break
        else:
            print("Invalid choice, please try again.")
main()