import {Person} from "../domain/Person";
import {PersonRespository} from "../repo/PersonRespository";

export class PersonServie {
    private pr = new PersonRespository();
    getAll():Person[]{
        return this.pr.findAll();
    }
    getByID(id:number){
        return this.pr.findOne(id);
    }
    insertNewPerson(person:Person){
        return this.pr.insertNewPerson(person);
    }
}