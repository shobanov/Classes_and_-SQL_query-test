-- task a
SELECT Students.FirstName, Students.LastName, COUNT(Students.StudentId) AS StudentCount 
FROM Students INNER JOIN Exams 
ON Students.StudentId = Exams.StudentId
WHERE Exams.Result < 3 AND Exams.ExamName > 2 
GROUP BY Students.StudentId;

-- task b
SELECT Students.Group, COUNT(Students.StudentId) AS StudentCount
FROM Students INNER JOIN Exams
ON Students.studentId = Exams.StudentId
WHERE Exams.Result < 3 AND Exams.ExamName > 2
GROUP BY Students.StudentId HAVING StudentCount >= 10;