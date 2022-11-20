import {EmployeeRepository} from "./employee.repository";

const repository = new EmployeeRepository();

export class EmployeeService {

    getSupervisorName(enteredId: number) {
        if (enteredId) {
            return repository.findById(enteredId)
                .flatMap(employee => employee.supervisorId)
                .flatMap(supervisorId => repository.findById(supervisorId))
                .map(supervisor => supervisor.name)
        }
    }
}
