import {EmployeeRepository} from "./employee.repository"
import {Employee} from "./employee.model"

describe('employee repository', () => {
    it('return employee info when calling findById given a valid id', () => {
        const employeeId = 1;
        const repository = new EmployeeRepository();
        const expected: Employee = {id: 1, name: "John"}

        // eslint-disable-next-line testing-library/await-async-query
        expect(repository.findById(employeeId)).toStrictEqual(expected)
    })

})