import { pool } from "../../db.js";
import { getStudentsQuery, getStudentByIdQuery, createStudentQuery, deleteStudentQuery, updateStudentQuery } from "./queries.js";

export const getStudents = (req, res) => {
    pool.query(getStudentsQuery, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

export const getStudentById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(getStudentByIdQuery, [id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

export const createStudent = (req, res) => {
    const {  name, age, email } = req.body;
    // add student to db 

    pool.query(`SELECT * FROM students WHERE email='${email}'`, (error, result) => {
        if (error) {
          throw error;
        }
        if (result.rows.length > 0) {
          res.status(400).send({ error: 'Email already exists' });
        } else {
            pool.query(createStudentQuery, [name, age, email], (error, results) => {
                if(error) throw error;
        
                res.status(201).send('Student was successfully created');
        
            })
        }
    });
};

export const deleteStudent = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(deleteStudentQuery, [id], (error, results) => {
        if(error) throw error;
        res.status(200).send('Student was removed');
    });
};

export const updateStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, age, email } = req.body; 

    pool.query(updateStudentQuery, [name, age, email, id], (error, results) => {
        if(error) throw error;
        res.status(200).send('Student was successfully updated');
    });
};