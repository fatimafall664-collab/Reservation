export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("fr-FR");
};

export const generateTicketCode = () => {
  return "CINE-" + Math.floor(Math.random() * 99999);
};
