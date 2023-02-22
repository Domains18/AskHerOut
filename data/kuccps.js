const axios = require('axios');
const fs = require('fs');
const mongoose = require('mongoose');
const Kuccps = require('../models/kuccps/kuccpsSchema');

const getKuccps = async (req, res) => {
    try {
        axios.get('https://kuccps.net/api/v1/programmes')
            .then(response => {
                const studentsData = response.data;
                fs.writeFile('data/kuccps.json', JSON.stringify(data), (err) => {
                    if (err) {
                        console.log(err);
                    }
                    console.log('File written successfully');
                })

                //map the data to the database
                const students = studentsData.map(student => {
                    return {
                        names: student.names,
                        indexNumber: student.indexNumber,
                        previosSchool: student.previousSchool,
                        Grade: student.Grade
                    }
                });

                //save the data to the database
                Kuccps.insertMany(students, (err, docs) => {
                    if (err) {
                        console.log(err);
                    }
                    console.log('Data saved successfully');
                });
            });

    } catch (error) {
        res.status(500)
        throw new Error(
            'Something went wrong while fetching data from KUCCPS'
        )
    }
}

