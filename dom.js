const form = document.getElementById('crud-form');
const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');
const table = document.getElementById('crud-table');

let data = [];

// Function to render table rows
function renderTableRows() {
    table.innerHTML = `
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Actions</th>
    </tr>
  `;

    data.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.email}</td>
      <td>
        <button onclick="editItem(${index})">Edit</button>
        <button onclick="deleteItem(${index})">Delete</button>
      </td>
    `;
        table.appendChild(row);
    });
}

// Function to add a new item
function addItem() {
    const name = nameInput.value;
    const email = emailInput.value;

    if (name && email) {
        data.push({ name, email });
        renderTableRows();
        form.reset();
    }
}

// Function to delete an item
function deleteItem(index) {
    data.splice(index, 1);
    renderTableRows();
}

// Function to edit an item
function editItem(index) {
    const item = data[index];
    nameInput.value = item.name;
    emailInput.value = item.email;
    deleteItem(index);
}

// Add form submit event listener
form.addEventListener('submit', (e) => {
    e.preventDefault();
    addItem();
});
