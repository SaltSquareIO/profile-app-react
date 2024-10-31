interface LoginData {
  email: string;
  password: string;
}
export async function loginUser(data: LoginData): Promise<Response> {
  return fetch('/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
}
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
export async function refreshAccessToken(): Promise<boolean> {
  try {
    const response = await fetch('/auth/refresh', {
      method: 'POST',
      headers: {
        Accept: 'application/json'
      }
    });
    return response.ok;
  } catch (error) {
    return false;
  }
}
