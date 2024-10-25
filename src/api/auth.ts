interface RegistrationData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  gender: string;
}
export async function registerUser(data: RegistrationData): Promise<Response> {
  return fetch('/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
}
