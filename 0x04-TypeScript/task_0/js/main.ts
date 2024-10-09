interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two students based on the interface
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
  };
  
  const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
  };

// Create an array containing the two students
const studentsList: Array<Student> = [student1, student2];

// Create the table, table head, and table body elements
const table: HTMLTableElement = document.createElement("table");
const thead: HTMLTableSectionElement = document.createElement("thead");
const tbody: HTMLTableSectionElement = document.createElement("tbody");

// Create the header row
const rowHead: HTMLTableRowElement = thead.insertRow(0);
const firstCellHead: HTMLTableCellElement = rowHead.insertCell(0);
const secondCellHead: HTMLTableCellElement = rowHead.insertCell(1);

// Set the header cells' text content
firstCellHead.innerHTML = "First Name";
secondCellHead.innerHTML = "Location";

// Append the header to the table
table.append(thead);

// Iterate over the studentsList array to create table rows
studentsList.forEach((student: Student) => {
  const row: HTMLTableRowElement = tbody.insertRow();
  const firstCell: HTMLTableCellElement = row.insertCell(0);
  const secondCell: HTMLTableCellElement = row.insertCell(1);

  // Set the content of each row's cells
  firstCell.innerHTML = student.firstName;
  secondCell.innerHTML = student.location;
});

// Append the tbody to the table
table.append(tbody);

// Finally, append the table to the body of the document
tbody.append(table);