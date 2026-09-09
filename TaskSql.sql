-- Question 1
SELECT * FROM Employees WHERE First_Name ILIKE '%m%';

-- Question 2
SELECT * FROM Employees WHERE Salary > 60000;

-- Question 3
SELECT First_Name || ' ' || Last_Name AS Full_Name, Department_No FROM Employees;

-- Question 4
SELECT DISTINCT Student_Number FROM Student_Grades WHERE Grade > 70;

-- Question 5
SELECT DISTINCT Salary FROM Employees ORDER BY Salary DESC LIMIT 2;

-- Question 6
SELECT First_Name || ' ' || Last_Name AS Employee_Name, Salary * 12 AS Annual_Salary FROM Employees;

-- Question 7
SELECT * FROM Employees WHERE Salary > 100000 AND Department_No = 4;

-- Question 8
SELECT * FROM Employees WHERE Gender = 'M';

-- Question 9
SELECT * FROM Employees WHERE Salary IS NOT NULL AND (Bonus IS NULL OR Bonus = 0);

-- Question 10
SELECT * FROM Employees WHERE First_Name LIKE '___F%';

-- Question 11
SELECT * FROM Courses WHERE Duration > 70;

-- Question 12
SELECT MIN(Grade) FROM Student_Grades WHERE Course_No = 3;

-- Question 13
SELECT * FROM Employees WHERE Department_No IN (1, 2);