
#List the questions
#store the answers
#Display questions randomly to the user 
#Let user answer the que
#see if they are correct 

#Keep the track of user scores
#Show user their scores

import random 
questions = {
    "Which function is used to display output in Python?": "print()",
    "What is the output of `bool('False')`?": "True",
    "Which collection type is ordered and mutable?": "list",
    "Which function is used to get the type of a variable?": "type()",
    "How do you check the memory address of a variable?": "id()",
    "Which operator is used for floor division?": "//",
    "What is the output of `10 % 3`?": "1",
    "Which keyword is used to define an anonymous function?": "lambda",
    "Which data type is used to store key-value pairs?": "dict",
    "Which module is used for mathematical operations?": "math",
    "Which function is used to find the maximum value in a list?": "max()",
    "Which function is used to find the minimum value in a list?": "min()",
    "What is the default value returned by a function if no return statement is used?": "None",
    "Which keyword is used to exit a loop in Python?": "break",
    "Which function is used to remove spaces from the beginning and end of a string?": "strip()",
    "Which function is used to replace a substring in Python?": "replace()",
    "What will `range(5)` return?": "range(0, 5)",
    "Which function is used to check if a key exists in a dictionary?": "in",
    "Which function is used to remove an item from a dictionary?": "pop()",
    "Which Python statement is used to handle exceptions?": "try-except",
    "Which function is used to round a number?": "round()",
    "Which keyword is used to create an infinite loop?": "while True",
    "Which keyword is used to skip an iteration in a loop?": "continue",
    "What is the output of `type(None)`?": "<class 'NoneType'>",
    "Which function is used to get a list of attributes and methods of an object?": "dir()",
    "Which function is used to sort a list in ascending order?": "sort()",
    "Which function is used to get the absolute value of a number?": "abs()",
    "Which function is used to convert an iterable into a list?": "list()",
    "Which built-in function returns the sum of all elements in an iterable?": "sum()",
    "Which method is used to count occurrences of an element in a list?": "count()",
    "Which function is used to check if a string contains only digits?": "isdigit()",
    "Which function is used to check if all elements in an iterable are True?": "all()",
    "Which function is used to check if at least one element in an iterable is True?": "any()",
    "Which keyword is used to import a module?": "import",
    "Which function is used to get the length of a dictionary?": "len()",
    "Which method is used to get all keys from a dictionary?": "keys()",
    "Which method is used to get all values from a dictionary?": "values()",
    "What is the output of `2 ** 3`?": "8",
    "Which keyword is used to define a generator function?": "yield",
    "What is the output of `list(range(3))`?": "[0, 1, 2]",
    "Which function is used to copy a list?": "copy()",
    "Which function converts a tuple into a list?": "list()",
    "Which function converts a list into a tuple?": "tuple()",
    "Which function is used to remove duplicate values from a list?": "set()",
    "Which function is used to find the index of an element in a list?": "index()",
    "Which function is used to reverse a list in place?": "reverse()",
    "Which keyword is used to create a new thread in Python?": "threading",
    "Which module is used for handling dates and times in Python?": "datetime",
    "Which function returns the current working directory?": "os.getcwd()",
    "Which function is used to check if a file exists?": "os.path.exists()",
}
def trivia_game():
    question_list = list(questions.keys())
    total_questions=3
    selected_questions = random.sample(question_list,total_questions)
    score = 0
    for idx,question in enumerate(selected_questions):
        print(f"{idx + 1}.{question}")
        user_answer = input(f"Your answer: ").lower().strip()
        correct_answer = questions[question]
        if user_answer==correct_answer.lower():
            print("!!Correct!!!\n")
            score +=1
        else:
            print(f"***wrong***\n The correct answer is: {correct_answer}\n")

    print(f"Game Over. Your Final Score Over {total_questions} questions is: {score}")

trivia_game()