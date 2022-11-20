import {EmployeeService} from "./employee.service"

describe('employee service', () => {
    it('return undefined when getSupervisorName given an invalid id', () => {
        const employeeId = 6;
        const service = new EmployeeService();

        expect(service.getSupervisorName(employeeId)).toEqual({"value": null})
    })

    it('return undefined when getSupervisorName given supervisor not exist', () => {
        const employeeId = 1;
        const service = new EmployeeService();

        expect(service.getSupervisorName(employeeId)).toEqual({"value": null})
    })

    it('return supervisor name when getSupervisorName given everything is fine', () => {
        const employeeId = 2;
        const service = new EmployeeService();

        expect(service.getSupervisorName(employeeId)).toEqual({"value": "John"})
    })
})