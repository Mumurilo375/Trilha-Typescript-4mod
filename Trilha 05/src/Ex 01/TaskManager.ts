type Tarefa = {
    tipo: string;
    descricao: string;
};

abstract class TaskManager {
    protected tarefas: Tarefa[] = [];

    protected jaExiste(descricao: string): boolean {
        return this.tarefas.some(tarefa => tarefa.descricao === descricao);
    }

    abstract addTask(task: string): void;

    listTasks(): string[] {
        return this.tarefas.map(tarefa => `${tarefa.tipo}: ${tarefa.descricao}`);
    }
}

class Project extends TaskManager {
    addTask(task: string): void {
        if (!this.jaExiste(task)) {
            this.tarefas.push({ tipo: "Projeto", descricao: task });
        }
    }
}

class DailyTasks extends TaskManager {
    addTask(task: string): void {
        if (!this.jaExiste(task)) {
            this.tarefas.push({ tipo: "Diária", descricao: task });
        }
    }
}

const projeto = new Project();
projeto.addTask("Criar layout");
projeto.addTask("Criar layout");

const diarias = new DailyTasks();
diarias.addTask("Responder e-mails");

console.log(projeto.listTasks());
console.log(diarias.listTasks());
