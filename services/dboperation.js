var config = require('../config/db.config');
const sql = require('mssql');


async function getTasks() {
    try {
        let pool = await sql.connect(config);
        let task_list = await pool.request().query("SELECT * from Tasks");
        return task_list.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getTask_ById(TaskId) {
    try {
        let pool = await sql.connect(config);
        let task_list = await pool.request()
            .input('input_parameter', sql.Int, TaskId)
            .query("SELECT * from Tasks where Id = @input_parameter");
        return task_list.recordsets;

    }
    catch (error) {
        console.log(error);
    }
}


async function addTask(Task) {

    try {
        let pool = await sql.connect(config);
        let insertTask = await pool.request()
        .input('Title', sql.NVarChar,Task.Title) 
        .input('Description', sql.NVarChar,Task.Description)
        .input('Status', sql.NVarChar,Task.Status) 
        .execute('InsertTasks');
        return insertTask.recordsets;
    }
    catch (err) {
        console.log(err);
    }

}

async function deleteTask_ById(TaskId) {

    try {
        let pool = await sql.connect(config);
        let task_list = await pool.request()
            .input('input_parameter', sql.Int, TaskId)
            .query("DELETE from Tasks where Id = @input_parameter");
        return task_list.recordsets;

    }
    catch (error) {
        console.log(error);
    }

}




module.exports = {
    getTasks: getTasks,
    getTask_ById : getTask_ById,
    addTask : addTask,
    deleteTask_ById : deleteTask_ById
}