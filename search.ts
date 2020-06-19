import $ = require("jquery");
import {Person} from "./app/domain/Person";
import {PersonRespository} from "./app/repo/PersonRespository";


$(document).ready(function () {
    $("#btn-search").on("click", function () {
        let person: Person = new Person(null, null, null, null, null, null);
        person.firstName = $("#name").val().toString();
        person.lastName = $("#name").val().toString();
        person.status = $("#status").val().toString();
      new PersonRespository().searchPersonByNameAndStatus(person);
    });
});

export class Search {
    dataBinder(listPerson: Person[]) {
        let content: string;
        let count:number = 1;
        let dateFormatter = new Intl.DateTimeFormat("vi-vn",{
        });
        let currencyFormatter = new Intl.NumberFormat("vi-vn",{
            style:"currency",
            currency:"VND",
        });
        if(listPerson.length == 0){
            $("#mess").html("Không tìm thấy kết quả");
            $("#tbody").html("");
        }else{
            $("#mess").html("");
            $("#tbody").html(function (): string {
                listPerson.forEach(value => {
                    let tmp:string ;
                    if(value.status == "ACTIVE"){
                        tmp+=`<td style="color: #1c7430">Đang kích hoạt</td>`;
                    }else{
                        tmp+=`<td style="color: red">Chưa kích hoạt</td>`;
                    }
                    content += `<tr><td>${count++}</td><td>${value.firstName}${value.lastName}</td><td>${value.age}</td><td>${dateFormatter.format(Date.parse(value.dob))}</td><td>${ currencyFormatter.format(value.salary)}</td>${tmp}</tr>`;
                });
                return content;
            });
        }
    }
}


