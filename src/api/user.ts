interface UserProfileData {
  email: string;
  firstName: string;
  lastName: string;
}
export async function fetchUserProfile(): Promise<UserProfileData | null> {
  const response = await fetch('/user/me', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.status === 401) {
    return null;
  } else if (response.ok) {
    return response.json();
  } else {
    throw new Error('Failed to fetch user profile.');
  }
}
