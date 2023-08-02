export const getStudentsQuery = "SELECT * FROM students";
export const getStudentByIdQuery = "SELECT * FROM students WHERE id = $1";
export const createStudentQuery = "INSERT INTO students (name, age, email) VALUES ($1, $2, $3)";
export const deleteStudentQuery = "DELETE FROM students WHERE id = $1";
export const updateStudentQuery = "UPDATE students SET name = $1, age = $2, email = $3 WHERE id = $4";