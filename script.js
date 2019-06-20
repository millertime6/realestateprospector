
// all of the buttons from the dom
const incomeButton = document.getElementById('submitSales');
const salesButton = document.getElementById('salesButton');
const commissionButton = document.getElementById('sideCommission');
const agentSplitButton = document.getElementById('agentCommButton');
const workDaysButton = document.getElementById('workDaysButton');
const percentListedButton = document.getElementById('percentListingsButton');
const percentBuyersButton = document.getElementById('percentBuyersButton');
const resetButton = document.getElementById('clear-form');
const editButton = document.getElementsByClassName('editButton');
const inputBox = document.getElementsByClassName('addItemInput');

const numberInput = document.getElementsByClassName('addItemInput');
const contactMultiple = 10;
const workHoursPerDay = 8;
// in order to use totalDealsNeeded in a global capacity
const agentSplit = document.getElementById('agentCommissionSplit').value;
let desiredIncome = document.getElementById('userDesiredIncome').value;
const averageSalesPrice = document.getElementById('userAverageSale').value;
const agentTotalSide = document.getElementById('averageSideCommission').value;
const totalVolume = (parseFloat(desiredIncome)/parseFloat(agentSplit))/parseFloat(agentTotalSide);
const totalDealsNeeded = Math.ceil((parseFloat(totalVolume)/parseFloat(averageSalesPrice)));


// text to change to show user in html format what their goal should be
const totalDealsOpenText = document.getElementById('total-deals-open');
const totalDealsClosed = document.getElementById('total-deals-closed');
const totalBuyers = document.getElementById('total-buyers');
const totalSellers = document.getElementById('total-sellers');

// factor used to determine number of deals needed to open
const dealsOpenFactor = 1.2;

// desired income from the user
incomeButton.addEventListener('click',() => {
let desiredIncome = document.getElementById('userDesiredIncome').value;
  console.log(desiredIncome);

});

// event listeners that log out user input

salesButton.addEventListener('click',() => {
  let averageSalesPrice = parseInt(document.getElementById('userAverageSale').value);
  console.log(1*averageSalesPrice);
});
commissionButton.addEventListener('click',() => {
  let commissionSplit = parseFloat(document.getElementById('averageSideCommission').value);
  console.log(1*commissionSplit);
});

agentSplitButton.addEventListener('click',() => {
  let agentSplit = document.getElementById('agentCommissionSplit').value;
  console.log(1*agentSplit);
});

workDaysButton.addEventListener('click',() => {
  let daysWorked = document.getElementById('workDaysInput').value;
  console.log(daysWorked);
});

percentListedButton.addEventListener('click',() => {
  let percentageListings = document.getElementById('percentListingsInput').value;
  console.log(percentageListings);
});

percentBuyersButton.addEventListener('click',() => {
  let percentageBuyers = document.getElementById('percentBuyersInput').value;
  console.log(percentageBuyers);
});

// calculation: number required to reach goal
// total deals open
agentSplitButton.addEventListener('click',(agentCommissionSplit)=> {
  const agentSplit = document.getElementById('agentCommissionSplit').value;
  const desiredIncome = document.getElementById('userDesiredIncome').value;
  const averageSalesPrice = document.getElementById('userAverageSale').value;
  const agentTotalSide = document.getElementById('averageSideCommission').value;
  let totalVolume = (parseFloat(desiredIncome)/parseFloat(agentSplit))/parseFloat(agentTotalSide);
  let totalDealsNeeded = Math.ceil((parseFloat(totalVolume)/parseFloat(averageSalesPrice)));

  // calculation of deals that must open
  let totalDealsMustOpen = Math.ceil(totalDealsNeeded * dealsOpenFactor);
  totalDealsOpenText.textContent = "You need to open " + totalDealsMustOpen + " deals for the year."
  console.log(totalDealsNeeded);

  // deals that must close
  totalDealsClosed.textContent = "You need to close " + totalDealsNeeded + " deals for the year."
  });

  // function for buyer and seller side calculations

  percentBuyersButton.addEventListener('click',()=> {
  // providing calculations for totalBuyers in order to use locally
    const agentSplit = document.getElementById('agentCommissionSplit').value;
    let desiredIncome = document.getElementById('userDesiredIncome').value;
    const averageSalesPrice = document.getElementById('userAverageSale').value;
    const agentTotalSide = document.getElementById('averageSideCommission').value;
    const totalVolume = (parseFloat(desiredIncome)/parseFloat(agentSplit))/parseFloat(agentTotalSide);
    const totalDealsNeeded = Math.ceil((parseFloat(totalVolume)/parseFloat(averageSalesPrice)));

    // function for buyer and seller side calculations
    let buyerRateCalc = parseFloat(document.getElementById('percentBuyersInput').value);
    let sellerRateCalc = parseFloat(document.getElementById('percentListingsInput').value);
    let amountBuyers =Math.ceil((parseFloat(buyerRateCalc) * totalDealsNeeded));
    let amountSellers = Math.ceil((parseFloat(sellerRateCalc) * totalDealsNeeded));
    totalBuyers.textContent = "You'll need to secure " + amountBuyers + " buyers to hit your goal."
    totalSellers.textContent = "You'll need to secure " + amountSellers + " listings to hit your goal."

  // calculations of the time and value of contacts
    let daysWorked = document.getElementById('workDaysInput').value;
    let annualContacts = totalDealsNeeded * contactMultiple;
    let dailyContacts = ((annualContacts)/daysWorked).toFixed(2);
    let valuePerHour = ((desiredIncome/daysWorked)/workHoursPerDay).toFixed(2);
    let valueOfContact = (desiredIncome/annualContacts).toFixed(2);

  // calculations of time and value of contacts
    let valueMetrics = document.getElementById('daily-metrics');
    let hourMetrics = document.getElementById('hour-metrics');
    let contactMetrics = document.getElementById('contact-metrics');
    valueMetrics.textContent = "Make at least " + dailyContacts + " contacts every working day.";
    hourMetrics.textContent = "Your hourly income will be $"+valuePerHour +".";
    contactMetrics.textContent = "Each contact is worth $"+valueOfContact +" per year.";
  })

// estsblishing functionality for edit buttons to clear input fields
    resetButton.addEventListener('click',() =>{
        window.location.reload(false);
    })

editButton.addEventListener('click',()=>{
  for (let i=0; i<inputBox.length; i++)
  inputBox[i].display = ""; 
      });

  // // event listeners to provide helpful information to user on hover
  //   desiredIncome.onmouseover = ()=> {
  //     "How much gross do you want to earn over the next 12 months?"
  //   };
