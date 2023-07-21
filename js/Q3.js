
const studentRecords = [
    { id: 1, name: "John Doe", age: 20 },
    { id: 2, name: "Jane Smith", age: 21 },
    { id: 3, name: "Mike Johnson", age: 19 },
  ];

  function createStudentTable() {
    const tableBody = document.querySelector("#studentTable tbody");
    for (const student of studentRecords) {
      const row = document.createElement("tr");

      const idCell = document.createElement("td");
      idCell.textContent = student.id;
      row.appendChild(idCell);
  
      const nameCell = document.createElement("td");
      nameCell.textContent = student.name;
      row.appendChild(nameCell);
  
      const ageCell = document.createElement("td");
      ageCell.textContent = student.age;
      row.appendChild(ageCell);
  
      const actionCell = document.createElement("td");
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => deleteRow(row));
      actionCell.appendChild(deleteButton);
      row.appendChild(actionCell);

      tableBody.appendChild(row);
    }
  }
  function deleteRow(row) {
    row.remove();
  }
  createStudentTable();
  