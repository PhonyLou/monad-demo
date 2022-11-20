import {EmployeeRepository} from "./employee.repository";

const repository = new EmployeeRepository();

export class EmployeeService {

    getSupervisorName(enteredId: number) {
        if (enteredId) {
            const employee = repository.findById(enteredId);
            if (employee && employee.supervisorId) {
                const supervisor = repository.findById(employee.supervisorId);
                if (supervisor) {
                    return supervisor.name;
                }
            }
        }
    }
}
