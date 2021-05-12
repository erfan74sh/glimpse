const warningCredit = document.getElementsByClassName("warning-low-credit")[0];
const estimationItems = document.getElementsByClassName("estimation-items")[0];
const creditLeft = document.getElementById("credit-left").innerHTML;

// check for credit amount to show appropriat division
if (creditLeft > 0) {
	warningCredit.classList.add("hidden");
	estimationItems.classList.remove("hidden");
} else {
	warningCredit.classList.remove("hidden");
	estimationItems.classList.add("hidden");
}
