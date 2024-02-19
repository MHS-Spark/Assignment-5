const allBtn = document.getElementsByClassName("add-btn")
let count = 0;
let count2 = 8;


for (const btn of allBtn) {
    btn.addEventListener("click", function (e) {
        btn.style.backgroundColor = "#1DD100";
        btn.disabled = true;
        count = count + 1;
        count2 = count2 - 1;
        document.getElementById("total-seats").innerText = count2;
        const btnName = e.target.innerText;
        const Economy = "Economy"
        const price = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[7].childNodes[5].childNodes[3].childNodes[1].innerText;
        const selectedContainer = document.getElementById("selected-place-container");

        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerText = btnName;
        const p2 = document.createElement("p");
        p2.innerText = Economy;
        const p3 = document.createElement("p");
        p3.innerText = price;

        li.appendChild(p);
        li.appendChild(p2);
        li.appendChild(p3);
        selectedContainer.appendChild(li);

        totalCost("total-price", parseInt(price));
        grandTotalCost("grand-total", parseInt(price))
        setInnerText("seat-taken", count);
    });
}


function totalCost(id, value) {
    const totalPrice = document.getElementById(id).innerText;
    const convertedTotalPrice = parseInt(totalPrice);
    const sum = convertedTotalPrice + parseInt(value);
    setInnerText(id, sum);
}
const applyForCoupon = document.getElementById("apply")
applyForCoupon.addEventListener("click", function (c) {
    const couponInput = c.target.parentNode.childNodes[11].value;

    var inputArea = document.getElementById("coupon-input");


    const coupon1 = document.getElementById("new15").innerText;
    const coupon2 = document.getElementById("couple-20").innerText;

    const totalPrice = document.getElementById("total-price").innerText;
    const convertedTotalPrice = parseInt(totalPrice);
    setInnerText("grand-total", convertedTotalPrice);


    if (couponInput == coupon1) {
        setInnerText("grand-total", convertedTotalPrice * 0.85);
        inputArea.classList.add("hidden");
        applyForCoupon.classList.add("hidden");
    }
    else if (couponInput == coupon2) {
        setInnerText("grand-total", convertedTotalPrice * 0.80);
        inputArea.classList.add("hidden");
        applyForCoupon.classList.add("hidden");
    }
    else {
        setInnerText("grand-total", convertedTotalPrice);
        alert("Invalid coupon code")
    }
})

function grandTotalCost() {
    const totalPrice = document.getElementById("total-price").innerText;
    const convertedTotalPrice = parseInt(totalPrice);
    setInnerText("grand-total", convertedTotalPrice);
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}
