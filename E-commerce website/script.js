let cart = document.getElementById("cart");
let shopCard = document.querySelectorAll(".shopCard");

cart.addEventListener("click", function () {
	document.querySelector(".container").innerHTML = "";
	document.querySelector(
		"body"
	).innerHTML = `<a class="empty" href=""> Cart is Empty </a>`;
});

shopCard.forEach(function (card) {
	card.addEventListener("click", function () {
		document.querySelector(".container").innerHTML = "";

		let div = document.createElement("div");
		div.classList.add("detailCard");
		div.innerHTML = `
		<img src=${card.firstElementChild.src} alt="">
		<div>
		<h1>Trends At NZ's</h1>
		<h1>upto 50% off on clothes</h1>
		<p>lorem idchvsf hvcdf vhvbdfvhjfhb</p>
		<p>lorem idchvsf hvcdf vhvbdfvhjfhb</p>
		<p>lorem idchvsf hvcdf vhvbdfvhjfhb</p>
		<p>lorem idchvsf hvcdf vhvbdfvhjfhb</p>
		<a href="">Shop Now</a>
		</div>
		`;

		console.log(card);
		document.querySelector("body").appendChild(div);
	});
});
