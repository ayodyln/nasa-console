export default function currDate() {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();

  let currentDate = (today = yyyy + "-" + mm + "-" + dd);
  // console.log(currentDate)
  return currentDate;
}
