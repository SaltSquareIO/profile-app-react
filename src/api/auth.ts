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
