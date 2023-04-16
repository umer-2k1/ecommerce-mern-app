export function formatNumberWithCommas(num) {
  if (num != null && typeof num !== 'undefined') {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return "";
}
