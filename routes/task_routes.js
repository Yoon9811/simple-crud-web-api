
module.exports = app => {
    const router = require("express").Router();
    const dboperations = require("../services/dboperation.js")
    

    router.route('/').get((request,response)=>{

        dboperations.getTasks().then(result => {
           response.json(result[0]);
        })
    
    })
    
    router.route('/:id').get((request,response)=>{
    
        dboperations.getTask_ById(request.params.id).then(result => {
           response.json(result[0]);
        })
    
    })
    
    router.route('/').post((request,response)=>{
    
        let task = {...request.body};
        dboperations.addTask(task[0]).then(result => {
           response.status(201).json(result);
        })
    
    })

    router.route('/:id').delete((request,response)=>{
    
        dboperations.deleteTask_ById(request.params.id).then(result => {
            response.json(result[0]);
         })
    
    })

    app.use('/api/tasks', router);
}

