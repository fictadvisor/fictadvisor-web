export const getAuthorizationHeader = (token: string) => {
  return {
    headers: { Authorization: `Bearer ${token}` },
  };
};
