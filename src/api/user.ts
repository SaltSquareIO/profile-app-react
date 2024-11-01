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
  if (response.ok) {
    return response.json();
  } else {
    return null;
  }
}
