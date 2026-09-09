# Question 1
def count_vowels(text):
    vowels = "aeiouAEIOU"
    return sum(1 for char in text if char in vowels)

# Question 2
def generate_array(length, start):
    return list(range(start, start + length))

# Question 3
def sort_user_array():
    arr = []
    for i in range(5):
        num = int(input(f"Enter element {i+1} of 5: "))
        arr.append(num)
    
    asc_arr = sorted(arr)
    desc_arr = sorted(arr, reverse=True)
    
    print(f"Ascending: {asc_arr}")
    print(f"Descending: {desc_arr}")

# Question 4
def fizz_buzz(num):
    if num % 3 == 0 and num % 5 == 0:
        return "FizzBuzz"
    elif num % 3 == 0:
        return "Fizz"
    elif num % 5 == 0:
        return "buzz"
    return str(num)

# Question 5
def is_palindrome(text):
    cleaned_text = text.replace(" ", "").lower()
    return cleaned_text == cleaned_text[::-1]

# Question 6
def longest_alpha_substring(s):
    if not s:
        return ""
    
    longest = current = s[0]
    
    for i in range(1, len(s)):
        if s[i] >= s[i-1]:
            current += s[i]
        else:
            if len(current) > len(longest):
                longest = current
            current = s[i]
            
    if len(current) > len(longest):
        longest = current
        
    print(f"Longest substring in alphabetical order is: {longest}")
    return longest