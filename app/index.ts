import $ = require("jquery");
import {Person} from "./domain/Person";
import {PersonServie} from "./service/PersonServie";

$(document).ready(function () {
    let persons: Person[] = new PersonServie().getAll();
    bindData(persons, "persons");
    console.log(persons);
    let id = $(location).attr("href").split("/")[5];
    let person: Person = new PersonServie().getByID(Number(id));
    let persons1: Person[] = [];
    persons1.push(person);
    bindData(persons1, "person");
    console.log(person);
});

function bindData(persons: Person[], id: string) {
    let ulElse = $(`#${id}`);
    if (persons.length == 0) {
        ulElse.html(" <li>Không có person nào</li>");
    } else {
        let content = "";
        persons.forEach(value => {
            content += `<li>${value.firstName} - ${value.lastName} - ${value.age} - ${value.salary} - ${value.dob}</li>`
        })
        ulElse.html(content);
    }
}
// function convertDate(raw:string){
//     let arr:string[] = raw.split("-");
//     let tmp: string = "";
//     tmp =arr[0];
//     arr[0] = arr[2];
//     arr[2] = tmp;
//     return arr[0].concat("-").concat(arr[1]).concat("-").concat(arr[2]);
// }
$(document).ready(function () {
    $("#btn-save").on("click", function () {
        let firstname = $("#firstname").val().toString();
        let lastname = $("#lastname").val().toString();
        let age = Number($("#age").val());
        let salary = Number($("#salary").val());
        // let dob = dateFormatter.format(Date.parse($("#dob").val().toString()));

        let dob = $("#dob").val().toString();
        console.log(dob);
        let status = $("#status").val().toString();
        let person: Person = new Person(firstname, lastname, age, salary, dob,status);
        new PersonServie().insertNewPerson(person);
    });
});
