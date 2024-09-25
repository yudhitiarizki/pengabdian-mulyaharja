export const formatDate = (dateString) => {
  let dateObj = new Date(dateString);

  let monthNames = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  let day = dateObj.getDate();
  let month = monthNames[dateObj.getMonth()];
  let year = dateObj.getFullYear();

  return `${day} ${month} ${year}`;
};
