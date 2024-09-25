function getInputValueById(id) {
    const inputValue = parseFloat(document.getElementById(id).value);
    return inputValue;
  }
  
  function addHistoryItem(cause, amount) {
    const historySection = document.getElementById("history-section");
    const historyItem = document.createElement("div");
    historyItem.className = "p-4 border rounded-xl bg-[#F9F7F3]";
    historyItem.innerHTML = `
         <p class="text-lg font-semibold">Donated ${amount} BDT to ${cause}</p>
         <p class="text-sm text-gray-500">Date: ${new Date().toLocaleString()}</p>
     `;
    historySection.appendChild(historyItem);
  }
  
  document
    .getElementById("btn-donate-noakhali")
    .addEventListener("click", function () {
      const donateMoney = getInputValueById("input-donate-money-noakhali");
      const mainBalanceText = document.getElementById("main-balance").innerText;
      const mainBalance = parseFloat(mainBalanceText);
  
     
        if (!donateMoney || isNaN(donateMoney) || donateMoney <= 0 || mainBalance < donateMoney) {
          alert('Please enter a valid amount');
          return;
      } 
    
       else {
        const beforeAddingMoney = parseFloat(
          document.getElementById("btn-primary").innerText
        );
        const balanceNoakhali = donateMoney + beforeAddingMoney;
        document.getElementById("btn-primary").innerText = balanceNoakhali;
        const newMainBalance = mainBalance - donateMoney;
        document.getElementById("main-balance").innerText = `${newMainBalance}`;
        document.getElementById("input-donate-money-noakhali").value = "";
        addHistoryItem("Flood at Noakhali", donateMoney);
        document.getElementById("noakhali-modal").checked = true;
      }
    });
  
  document
    .getElementById("btn-donate-feni")
    .addEventListener("click", function () {
      const donateMoneyFeni = getInputValueById("input-donate-money-feni");
      const mainBalanceText = document.getElementById("main-balance").innerText;
      const mainBalance = parseFloat(mainBalanceText);
  
  
      if (!donateMoneyFeni || isNaN(donateMoneyFeni) || donateMoneyFeni <= 0 || mainBalance < donateMoneyFeni) {
        alert('Please enter a valid amount');
        return;
    } 
      else {
        const beforeAddingMoney = parseFloat(
          document.getElementById("btn-secondary").innerText
        );
        const balanceFeni = donateMoneyFeni + beforeAddingMoney;
        document.getElementById("btn-secondary").innerText = balanceFeni;
        const newMainBalance = mainBalance - donateMoneyFeni;
        document.getElementById("main-balance").innerText = `${newMainBalance}`;
        document.getElementById("input-donate-money-feni").value = "";
        addHistoryItem("Flood Relief in Feni", donateMoneyFeni);
        document.getElementById("feni-modal").checked = true;
      }
    });
  document
    .getElementById("btn-donate-quota")
    .addEventListener("click", function () {
      const donateMoneyquota = getInputValueById("input-donate-money-quota");
      const mainBalanceText = document.getElementById("main-balance").innerText;
      const mainBalance = parseFloat(mainBalanceText);
  
      if (!donateMoneyquota || isNaN(donateMoneyquota) || donateMoneyquota <= 0 || mainBalance < donateMoneyquota) {
        alert('Please enter a valid amount');
        return;
    } 
      else {
        const beforeAddingMoney = parseFloat(
          document.getElementById("btn-thirdly").innerText
        );
        const balancequota = donateMoneyquota + beforeAddingMoney;
        document.getElementById("btn-thirdly").innerText = balancequota;
        const newMainBalance = mainBalance - donateMoneyquota;
        document.getElementById("main-balance").innerText = `${newMainBalance}`;
        document.getElementById("input-donate-money-quota").value = "";
        addHistoryItem("Aid for Injured in the Quota Movement", donateMoneyquota);
        document.getElementById("quota-modal").checked = true;
      }
    });
  
  const historyTab = document.getElementById("history-tab");
  const donationTab = document.getElementById("donation-tab");
  historyTab.addEventListener("click", function () {
    historyTab.classList.add("bg-[#B4F461]");
    donationTab.classList.remove("bg-[#B4F461]");
    document.getElementById("main-container").classList.add("hidden");
    document.getElementById("history-container").classList.remove("hidden");
  });
  donationTab.addEventListener("click", function () {
    donationTab.classList.add("bg-[#B4F461]");
    historyTab.classList.remove("bg-[#B4F461]");
    document.getElementById("main-container").classList.remove("hidden");
    document.getElementById("history-container").classList.add("hidden");
});