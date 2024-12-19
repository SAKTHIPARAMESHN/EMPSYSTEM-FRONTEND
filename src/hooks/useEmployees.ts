import { useState, useEffect } from 'react';
import { Employee } from '../types/employee';

// Mock data for demonstration
const mockEmployees: Employee[] = [
  {
    id: '1',
    firstName: 'DINESH',
    lastName: 'SIR',
    email: 'dineshsir@example.com',
    position: 'Software Engineer',
    department: 'Engineering',
    startDate: '2024-01-15',
    status: 'active',
  },
  {
    id: '2',
    firstName: 'sakthi',
    lastName: 'paramesh',
    email: 'sakthiparamesh@example.com',
    position: 'Marketing Manager',
    department: 'Marketing',
    startDate: '2023-11-01',
    status: 'active',
  },
];

export function useEmployees() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API call
    const fetchEmployees = async () => {
      try {
        // In a real application, this would be an API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setEmployees(mockEmployees);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch employees');
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  return { employees, loading, error };
}