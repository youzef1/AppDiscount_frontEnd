document.querySelector("body").style.fontFamily = "cursive";

let discount = [
	"elzero_10",
	"elzero_20",
	"elzero_40",
	"elzero_50",
	"elzero_70",
	"elzero_free",
	"Thank_You_Osama_Elzero",
];

let text = "";
for (let i = 0; i < discount.length; i++) {
	text += `<span class="coupon">${discount[i]}</span>`;
}
document.getElementById("coupon").innerHTML = text;

let chooseCoupon;
document.getElementById("myButton").onclick = function () {
	chooseCoupon = document.getElementById("myText").value;
	if (chooseCoupon === discount[0]) {
		document.getElementById("state").innerHTML = "You Have Coupon 10$";
	} else if (chooseCoupon === discount[1]) {
		document.getElementById("state").innerHTML =
			"Sorry This Coupon 20$ Is Not Valid" +
			`<br>I Will Delete This Coupon Now.`;
		discount.splice(1, discount.indexOf("elzero_20"));
	} else if (chooseCoupon === discount[2]) {
		document.getElementById("state").innerHTML = "You Have Coupon 40$";
	} else if (chooseCoupon === discount[3]) {
		document.getElementById("state").innerHTML = "You Have Coupon 50$";
	} else if (chooseCoupon === discount[4]) {
		document.getElementById("state").innerHTML = "You Have Coupon 70$";
	} else if (chooseCoupon === discount[5]) {
		document.getElementById("state").innerHTML =
			`WOW You Very Lucky` + `<br>` + `'All Product Is Free' For You`;
	} else if (chooseCoupon === discount[6]) {
		document.getElementById(
			"state",
		).innerHTML = `'Osama Mohamed' is the best web programmer, all his courses are free, so you do not need a discount coupon`;
	} else {
		document.getElementById("state").innerHTML = "Not Have Any Coupon?";
	}
};
