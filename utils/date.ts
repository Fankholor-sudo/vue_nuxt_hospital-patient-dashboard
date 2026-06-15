export const formatDate = (value: string): string => {
  const date = new Date(value)
  return new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(date)
}
