export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  position: string;
  department: string;
  startDate: string;
  status: 'active' | 'inactive';
}

export interface EmployeeFormData extends Omit<Employee, 'id'> {}