export const handleApiErrors = (error: any) =>
  error?.response?.data?.message
    ? error?.response?.data?.message
    : "Problem with communicating server!.";
