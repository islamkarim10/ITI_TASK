# Question 1
def check_in_range(n, low=-5, high=5):
    return low <= n <= high

print(check_in_range(3))

# Question 2
list1 = ['name', 'age', 'city']
list2 = ['Alice', 25, 'Cairo']
result_dict = dict(zip(list1, list2))
print(result_dict)

# Question 3
def generate_squares():
    squares = [x**2 for x in range(1, 31)]
    print(squares)

generate_squares()

# Question 4
my_list = [3, 6, 4, 0, 8]
my_list.pop()
my_list.insert(1, 'R')

target = input("Enter a number to delete: ")
if target.isdigit() and int(target) in my_list:
    my_list.remove(int(target))
    
print(my_list)

# Question 5
dict1 = {'a': 1, 'b': 2, 'c': 3}
dict2 = {'c': 99, 'd': 4}
merged_dict = {**dict1, **dict2}
print(merged_dict)