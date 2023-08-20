
const totalPrice = document.getElementById('total-price')
            const discountAmount = document.getElementById('discount-amount')
            const discountPrices = document.getElementById('discount-prices')
            const couponApplyBtn = document.getElementById('apply-btn')
            const purchaseBtn = document.getElementById('purchase-btn')
            const couponCodeInput = document.getElementById('coupon-code-input')

            let total = 0;

            function divBtnClick(target) {
                  const selectedItemsContainer = document.getElementById('selected-items')
                  const itemName = target.childNodes[5].innerText;
                  // console.log(itemName);
                  const li = document.createElement('li');
                  li.innerText = itemName;
                  selectedItemsContainer.appendChild(li)
                  const price = target.childNodes[7].innerText.split(" ")[0];
                  total = (parseFloat(total) + parseFloat(price)).toFixed(2);
                  totalPrice.innerText = total
                  discountPrices.innerText = total
                  // btn disabled part 
                  purchaseBtn.disabled = total > 0 ? false : true
                  purchaseBtn.style.backgroundColor = total > 0 ? '#C026D3' : ''
                  couponApplyBtn.disabled = total < 200 ? true : false
                  couponApplyBtn.style.backgroundColor = total < 200 ? '' : '#C026D3'
            }
            // calculation main part 

            couponApplyBtn.addEventListener('click', function () {
                  if (couponCodeInput.value === 'SELL200') {
                        couponApplyBtn.disabled = true
                        couponApplyBtn.style.backgroundColor = '#A6A6A6'
                        couponCodeInput.value = ''

                        const discountAmountT = ((20 / 100) * total).toFixed(2);
                        total -= discountAmountT
                        discountAmount.innerText = discountAmountT
                        discountPrices.innerText = total.toFixed(2)
                  }
                  else{
                        alert('invalid coupon')
                  }
            })

            // model goto home button 
            document.getElementById('go-to-home').addEventListener('click', function(){
                  // console.log('hello model');
                  location.reload('index.html');
            })