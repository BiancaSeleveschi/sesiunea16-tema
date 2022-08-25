// Exercitiu Javascript: obiecte imbricate
// Declara un obiect company care are ca si proprietate: name, number of employ, age, industries, array de teams si in care fiecare obiect team are propt.: name, category, num. of members si un array de emploeesy, in care fiecare ob. employee are propt.: name, age, jobTitle.
let company = {
  name: "Globant",
  numOfEmployees: 2,
  age: 3,
  industry: "IT",
  teams: [
    {
      name: "Iris",
      category: "FE",
      numOfMembers: 2,
      employees: [
        {
          name: "Alin",
          age: 25,
          jobLevel: "junior",
        }
      ]
    }
  ]
}
console.log("-----------aaaaaaaaaa--------------");
console.log(company);


//b. Scrie o functie: displayCompanyInfo in care afiseazi toate detaliile companiei cu numele propritatii si valoarea ei (exact ca mai sus)
// Sfat: 1. Afisati detaliile companiei fara teams, 2. Parcurgeti array-ul teams si afisati detaliile fiecarei echipe  optional: pentru array-ul employees, inca o parcurgere in care afisati detaliile)
function displayCompanyInfo() {
  console.log("{")
  console.log("name: ", company.name)
  console.log("numOfEmployees: ", company.numOfEmployees)
  console.log("age: ", company.age)
  console.log("industry: ", company.industry)
  console.log("teams: ", company.teams)
  for (let i = 0; i < company.teams.length; i++) {
    console.log(company.teams[i])
  }
}
console.log("------------bbbbbbbbbb---------------")
displayCompanyInfo()
console.log("-------------------------------")


//c. Scrie o functie: addNewTeam care adauga o echipa noua in companie (fara angajati)
function addNewTeam(newTeam) {
  company.teams[company.teams.length] = newTeam;
  //company.teams.push(newTeam)
}
let team = {
  name: "Green",
  category: "Dev",
  numOfMembers: 2,
  employees: []
}
addNewTeam(team);
console.log("---------------cccccccccccc--------------")
console.log(company);
console.log("------------------------------------")


// d. Scrie o functie: addNewEmployeeToTheTeam care adauga un angajat nou la o echipa gasita dupa nume (in urma acestei operatii nr de angajati si nr de meberii ai echipei sunt actualizate)
function addNewEmployee(name, newEmployee) {
  for (let i = 0; i < company.teams.length; i++) {
    if (company.teams[i].name == name) {
      company.teams[i].employees[company.teams[i].employees.length] = newEmployee
    }
  }
}
let employee1 = {
  name: "Ana",
  age: 32,
  jobLevel: "senior",
}
console.log("-----------ddddddddd-----------")
addNewEmployee("Iris", employee1)
console.log("Company: ", company)
console.log("-----------------------------------")


// e. Scrie o functie: changeTeamInfo care schimba informatiile unei echipe. 
//        i.La libera alegere/interpretare a cerintei in implementare (alegeti voi cum intepretati cerinta si cum scrieti functia in termeni de input, output si body)
function changeTeamInfo(name, category, numOfMem) {
  for (let i = 0; i < company.teams.length; i++) {
    company.teams[1].name = name;
    company.teams[1].category = category;
    company.teams[1].numOfMembers = numOfMem;
  }
}
changeTeamInfo("Blue", "BE", 3);
console.log("-------------eeeeeeeee------------");
console.log(company);
console.log("-----------------------------------");


// f. Scrie o functie: getAllFETeams care returneaza toate echipele de FE din companie.
function getAllFETeams() {
  let res = [];
  let contor = 0;
  for (let i = 0; i < company.teams.length; i++) {
    if (company.teams[i].category === "FE") {
      res[contor++] = company.teams[i]
    }
  }
  return res;
}
console.log("f. Echipele de FE sunt:");
console.log(getAllFETeams());
console.log("-----------------------------------");


// g. Scrie o functie: getAllBETeamNames care returneaza numele echipelor de BE din companie
//         i. La libera alegere/interpretare a cerintei in implementare (alegeti voi cum intepretati cerinta si cum scrieti functia in termeni de input, output si body)
function getAllBETeamNames(category) {
  let res = [];
  let contor = 0;
  for (let i = 0; i < company.teams.length; i++) {
    if (company.teams[i].category === category) {
      res[contor++] = company.teams[i].name
    }
  }
  return res;
}
console.log("g. Numele echipelor de BE sunt: ");
console.log(getAllBETeamNames("BE"));
console.log("-----------------------------------");


// h. Scrie o functie: getAllEmployessWithAgeFromTeam care returneaza toti anagajatii de o anumita varsta dintr-o anumita echipa
function getTeamsByName(nameTeams) {
  let res = [];
  let contor = 0;
  for (let i = 0; i < company.teams.length; i++) {
    if (company.teams[i].name === nameTeams) {
      res[contor++] = company.teams[i].employees;
    }
  }
  return res;
}
console.log("h1. Gasirea echipei dupa nume")
console.log(getTeamsByName("Iris"))
console.log("----------------------------------")


//h2. Gasirea echipei dupa nume in funtie de varsta, cu apelul functiei getTeamsByName.
function getAllEmployessWithAgeFromTeam(age, teamName) {
  let res = [];
  let contor = 0;
  for (let i = 0; i < company.teams.length; i++) {
    for (let j = 0; j < company.teams[i].employees.length; j++) {
      if (getTeamsByName(teamName) && company.teams[i].employees[j].age === age) {
        res[contor++] = company.teams[i].employees[j]
      }
    }
  }
  return res;
}
console.log("h2. Gasirea echipei dupa nume in funtie de varsta,cu apelul functiei")
console.log(getAllEmployessWithAgeFromTeam(25, "Iris"));
console.log("----------------------------------")


//h3. Gasirea echipei dupa nume in funtie de varsta, fara apel
function getAllEmployessWithAgeFromTeam(age, teamName) {
  let res = [];
  let contor = 0;
  for (let i = 0; i < company.teams.length; i++) {
    for (let j = 0; j < company.teams[i].employees.length; j++) {
      if (company.teams[i].employees[j].age === age && company.teams[i].name === teamName) {
        res[contor++] = company.teams[i].employees[j]
      }
    }
  }
  return res;
}
console.log("h3. Gasirea echipei dupa nume in funtie de varsta, fara apel");
console.log(getAllEmployessWithAgeFromTeam(25, "Iris"));
console.log("----------------------------------------------");


// i. Scrie o functie: getAllEmployessWithJobLevelFromTeam care retunreaza toti anagajatii cu un anumit job level dintr-o anumita echipa
function getAllEmployessWithJobLevelFromTeam(teamName, jobLevel) {
  let res = [];
  let contor = 0;
  for (let i = 0; i < company.teams.length; i++) {
    for (let j = 0; j < company.teams[i].employees.length; j++) {
      if (company.teams[i].employees[j].jobLevel === jobLevel && company.teams[i].name === teamName) {
        res[contor++] = company.teams[i].employees[j];
      }
    }
  }
  return res;
}
console.log("i. Gasirea echipei dupa nume in funtie de jobLevel dintr-o anumita echipa");
console.log(getAllEmployessWithJobLevelFromTeam("Iris", "senior"));
console.log("----------------------------------");


// j. Scrie o functie: getAllEmployeesWithJobLevelFromCompany care retunreaza toti anagajatii de cu un anumit job level din toata compania
function getAllEmployeesWithJobLevelFromCompany(jobLevel) {
  let res = [];
  let contor = 0;
  for (let i = 0; i < company.teams.length; i++) {
    for (let j = 0; j < company.teams[i].employees.length; j++) {
      if (company.teams[i].employees[j].jobLevel === jobLevel) {
        res[contor++] = company.teams[i].employees[j];
      }
    }
  }
  return res;
}
console.log("j. Gasirea echipei dupa nume in funtie de jobLevel din toata compania")
console.log(getAllEmployeesWithJobLevelFromCompany("junior"))
console.log("----------------------------------");


// k. Scrie o functie: getAllEmployeesWithJobLevelFromFETeams care retunreaza toti anagajatii de cu un anumit job level din echipele de FE
function getAllEmployeesWithJobLevelFromFETeams(jobLevel) {
  let res = [];
  let contor = 0;
  for (let i = 0; i < company.teams.length; i++) {
    for (let j = 0; j < company.teams[i].employees.length; j++) {
      if (company.teams[i].employees[j].jobLevel === jobLevel && company.teams[i].category === "FE") {
        res[contor++] = company.teams[i].employees[j]
      }
    }
  }
  return res;
}
console.log("k. Gasirea echipei dupa nume in funtie de jobLevel din echipele FE")
console.log(getAllEmployeesWithJobLevelFromFETeams("senior"))
console.log("----------------------------------")


// l. Scrie o functie: getNoOfEmployeesFromBETeams care retunreaza numarul de angajati din echipele de BE.
function getNoOfEmployeesFromBETeams(numOfMembers) {
  let contor = 0;
  for (let i = 0; i < company.teams.length; i++) {
    for (let j = 0; j < company.teams[i].employees.length; j++) {
      if (company.teams[i].employees[j].category === "BE") {
        contor++;
      }
    }
  }
  return contor;
}
console.log("Nr de angajati din echipa BE este ", getNoOfEmployeesFromBETeams("senior"))
