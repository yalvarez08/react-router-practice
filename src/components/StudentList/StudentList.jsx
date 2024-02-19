import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './StudentList.css';

function StudentList() {
    let [studentList, setStudentList] = useState([]);

    // On Load, fetch student data from the server
    useEffect(() => {
        console.log('in useEffect')
        getStudents();
    }, []);

    const getStudents = () => {
        axios({
            method: 'GET',
            url: '/api/students'
        }).then((response) => {
            setStudentList(response.data);
        }).catch((err)=>{
            console.log(err);
        });
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Github Name</th>
                    </tr>
                </thead>
                <tbody>
                    {studentList.map(student => (
                        <tr key={student.id}>
                            <td>
                                {student.github_name}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
    
}

export default StudentList;
