"use strict"


//input elements

const enterDate = document.getElementById("enterDate");
const enterAmountOfDays = document.getElementById("enterAmountOfDays");
const queenRoomRadio = document.getElementById("queenRoomRadio");
const kingRoomRadio = document.getElementById("kingRoomRadio");
const twinRoomRadio = document.getElementById("twinRoomRadio");
const numberOfAdults = document.getElementById("numberOfAdults");
const numberOfChildren = document.getElementById("numberOfChildren");
const militaryDiscountRadio = document.getElementById("militaryDiscountRadio");
const seniorAAADiscountRadio = document.getElementById("seniorAAADiscountRadio");
const noneDiscountRadio = document.getElementById("noneDiscountRadio");

//Button

const estimateStayBtn = document.getElementById("estimateStayBtn");

//output elements

const originalRoomPrice = document.getElementById("originalRoomPrice");
const roomDiscount = document.getElementById("roomDiscount");
const roomDiscountedCost = document.getElementById("roomDiscountedCost");
const roomTax = document.getElementById("roomTax");
const totalCostOfStay = document.getElementById("totalCostOfStay");


window.onload = init;

//wiring the button up
function init(){
    estimateStayBtn.onclick = onEstimateStayBtnClicked

};


function onEstimateStayBtnClicked(){
    //checking to see if button fires
    console.log("onEstimateStayBtnClicked")
}