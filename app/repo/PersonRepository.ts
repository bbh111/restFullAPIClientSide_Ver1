import {ICrudReponsitory} from "./ICrudReponsitory";
import {Person} from "../domain/Person";
import {ENDPOINT} from "../util/Constants";
import $ = require("jquery");
import {Search} from "../../search";


export class PersonRespository implements ICrudReponsitory<Person, number> {
    findAll(): Person[] {
        let p: Person[] = [];
        $.ajax({
            url: ENDPOINT.person.list,
            method: 'GET',
            contentType: 'application/json',
            async: false,
            success: (data: any) => {
                $.extend(p, data);
            },
            error: (msg) => {
                console.log(msg)
            }
        })
        return p;
    }

    findOne(k: number): Person {
        let person: Person = new Person(null, null, null, null, null, null, null, null);
        $.ajax({
            url: ENDPOINT.person.personID + `/${k}`,
            method: 'GET',
            contentType: 'application/json',
            async: false,
            success: (data: Person) => {
                $.extend(person, data);
            },
            error: (msg) => {
                console.log(msg)
            }
        })
        return person;
    }

    insertNewPerson(person: Person) {
        $.ajax({
            url: ENDPOINT.account.create,
            method: 'POST',
            contentType: 'application/json',
            async: false,
            data: JSON.stringify(person),
            success: (response) => {
                console.log(response);
                alert("ok");
            },
            error: (msg) => {
                console.log(msg);
                alert("loi");
            }
        })
    }

    searchPersonByNameAndStatus(person: Person) {
        let persons: Person[] = [];
        $.ajax({
            url: ENDPOINT.search.name,
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(person),
            success: (respone: Person[]) => {
                $.extend(persons, respone);
                new Search().dataBinder(persons);
            },
            error: (msg) => {
                alert("loi");
            }
        });
    }

    editPerson(person: Person) {
        $.ajax({
            url: ENDPOINT.edit,
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(person),
            success: (data: Person) => {
                if (data.toString()=="") {
                    alert(`Không thể sửa status vì người này đang có Task`);
                } else {
                    alert(`Edit success person ${data.id}`);
                    new Search().modalEditDataBinder(data);
                }
            },
            error: (msg) => {
                alert("loi");
            }
        });
    }
}