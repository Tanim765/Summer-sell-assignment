const applyCoupon = document.getElementById("applyCoupon");
const couponCode = document.getElementById("couponCode");
const discountAmount = document.getElementById("total-discount");
const total = document.getElementById("total");
const makePurchase = document.getElementById("makePurchase");
const congoModal = document.getElementById("congoModal");
const goHome = document.getElementById("goHome");



document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    const selectedItemsList = document.getElementById("selected-items");
    const totalPriceElement = document.getElementById("total-price");
    let totalPrice = 0;
  
    cards.forEach((card) => {
      card.addEventListener("click", function () {
        const productName = card.querySelector(".title-font").textContent;
        const productPrice = parseFloat(
          card.querySelector("p span").textContent
        );
  
        // Add the selected product to the cart list
        const listItem = document.createElement("li");
        listItem.textContent = productName;
        selectedItemsList.appendChild(listItem);
  
        // Update the total price
        totalPrice += productPrice;
        totalPriceElement.textContent = totalPrice.toFixed(2) + " TK";

        

        
    if (parseFloat(totalPriceElement.innerText) < 0) {
      makePurchase.setAttribute('disabled','true');
      
    }
    if (parseFloat(totalPriceElement.innerText) <= 200) {
      applyCoupon.setAttribute('disabled','true')
    }
      });
    });
    applyCoupon.addEventListener('click', () => {
      if (couponCode.value === "SELL200") {
          discountAmount.innerText = (parseFloat(totalPriceElement.innerText) * 0.2).toFixed(2);
          calculateFinalTotal();
      } else {
          discountAmount.innerText = "0.00";
          alert("Invalid coupon");
      }
  });

  makePurchase.addEventListener('click', () => {
      congoModal.showModal();
  });

  function calculateFinalTotal() {
      const originalTotal = parseFloat(totalPriceElement.innerText);
      const discount = parseFloat(discountAmount.innerText);
      const finalTotal = originalTotal - discount;
      total.innerText = finalTotal.toFixed(2);
      if (finalTotal >= 200) {
          makePurchase.removeAttribute('disabled');
      } else {
          makePurchase.setAttribute('disabled', 'true');
      }
      finalTotalElement.innerText = finalTotal.toFixed(2);
  }
   });


   /* applyCoupon.addEventListener('click', () => {
    if (couponCode.value === "SELL200") {
      discountAmount.innerText = (parseFloat(totalPrice.innerText) * 0.2).toFixed(2)
      total.innerText=(parseFloat(totalPrice.innerText)-parseFloat(discountAmount.innerText))
    }
    else {
      discountAmount.innerText = "0.00";
      alert("Invalid coupon");
    }
  })
  makePurchase.addEventListener('click', () => {
    congoModal.showModal();
  }) */
  goHome.addEventListener('click', () => {
    couponCode.value = ""
    cartList.innerHTML = ""
    totalPrice.innerText = "0.00"
    total.innerText = "0.00"
    discountAmount.innerText = "0.00"
    makePurchase.setAttribute('disabled', 'true');
    applyCoupon.setAttribute('disabled', 'true');
    console.log(makePurchase);
  })
  