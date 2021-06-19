var vue = new Vue({
    el: "#app",
    data: {
        currentTask: "",
        editValue: "",
        tasks: [
            {
                text: "Learn Vue",
                isCompleted: false,
                isEditing: false,
                clicks: false,
            },
        ]
    },
    methods: {
        addTask: function() {
            if (this.currentTask) {
                this.tasks.push({
                    text: this.currentTask,
                    isCompleted: false,
                    clicks: false,
                    isEditing: false,
                });
                this.currentTask = "";
            }  
        },
        removeTask: function(taskText) {
            this.tasks = this.tasks.filter(task => {
                return task.text !== taskText;
            })
        },
        changeEditing(taskText){
            this.editValue =taskText;
            this.tasks = this.tasks.map(task => {
                if(task.text === taskText) {
                    task.isEditing = !task.isEditing;
                }
                return task;
            }) 
        },
        editTask(taskText) {
            this.tasks = this.tasks.map(task => {
                if(task.text === taskText) {
                    task.isEditing = !task.isEditing;
                    task.text = this.editValue;
                }
                return task;
            })
        }
    }
})
