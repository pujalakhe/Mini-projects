import random
import string
def generate_password():
    length = int(input("Enter the length of the password: ").strip())
    include_uppercase = input("Include uppercase letters? (y/n): ").strip().lower()
    include_lowercase = input("Include lowercase letters? (y/n): ").strip().lower()
    include_digits = input("Include digits? (y/n): ").strip().lower() 
    include_special = input("Include special characters? (y/n): ").strip().lower() 
    if length<4:
        print("Password length should be at least 4 characters.")
        return
    lowercase = string.ascii_lowercase if include_lowercase == 'y' else ''
    uppercase = string.ascii_uppercase if include_uppercase == 'y' else ''
    digits = string.digits if include_digits == 'y' else ''
    special = string.punctuation if include_special == 'y' else ''
    all_characters = lowercase + uppercase + digits + special
    if not all_characters:
        print("At least one character type must be selected.")
        return
    required_characters = []
    if include_lowercase == 'y':
        required_characters.append(random.choice(lowercase))
    if include_uppercase == 'y':
        required_characters.append(random.choice(uppercase))
    if include_digits == 'y':
        required_characters.append(random.choice(digits))
    if include_special == 'y':
        required_characters.append(random.choice(special))
    remaining_length = length - len(required_characters)
    password = required_characters
    for _ in range(remaining_length):
        password.append(random.choice(all_characters))
    random.shuffle(password)
    string_pwd = "".join(password)
    return string_pwd

password = generate_password()
print("Generated password:", password)

