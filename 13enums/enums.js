"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 10] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 11] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 12] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 13] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
var hcSeat = SeatChoice.AISLE;

console.log(SeatChoice.FOURTH)      //çıktı 13