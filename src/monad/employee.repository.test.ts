import {EmployeeRepository} from "./employee.repository"
import {Employee} from "./employee.model"
import {Maybe} from "./maybe.monad";

describe('employee repository', () => {
    it('return employee info when calling findById given a valid id', () => {
        const employeeId = 1;
        const repository = new EmployeeRepository();
        const expected: Employee = {id: 1, name: "John", supervisorId: Maybe.none()}
        const notEmployee: Employee = {id: 10000, name: "John Smith", supervisorId: Maybe.some(1000001)}

        // eslint-disable-next-line testing-library/await-async-query
        expect(repository.findById(employeeId).getOrElse(notEmployee)).toStrictEqual(expected)
    })

})