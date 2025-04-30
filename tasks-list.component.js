import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
    tasks: any[] = [];

    constructor(private taskService: TaskService) { }

    ngOnInit(): void {
        this.loadTasks();
    }

    loadTasks() {
        this.taskService.getTasks().subscribe(data => {
            this.tasks = data;
        });
    }

    deleteTask(id: string) {
        this.taskService.deleteTask(id).subscribe(() => {
            this.loadTasks();
        });
    }
}