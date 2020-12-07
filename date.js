module.exports.getDate = getDate;
function getDate() {
  let today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  let day = today.toLocaleDateString("en-US", options);
  return day;
}

exports.getDay = function() {
  let today = new Date();
  var options = {
    weekday: "long",
  };
  return today.toLocaleDateString("en-US", options);

}
