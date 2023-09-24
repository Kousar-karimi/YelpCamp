let btn1 = document.querySelector(".btn1")
let form = document.querySelector("form")

 btn1.addEventListener("click" ,
 function() {
    form.style.display = "block"    
 })

 
let btn2 = document.querySelector(".btn2")

btn2.addEventListener("click" , 
function() {
    const table = document.querySelector('#comments-table tbody');
    let name = document.querySelector(".name")
    let comment = document.querySelector(".comment")

    // Create a new table row and table data element for the comment
    const tableRow = document.createElement('tr');
    const tableData = document.createElement('td');
    
    // Create a heading element for the username and a paragraph element for the comment text
    const heading = document.createElement('h4');
    heading.textContent = name.value;
    
    const paragraph = document.createElement('p');
    paragraph.textContent = comment.value;
    
    // Append the heading and paragraph elements to the table data element
    tableData.appendChild(heading);
    tableData.appendChild(paragraph);
    
    // Append the table data element to the table row
    tableRow.appendChild(tableData);
    
    // Append the table row to the table body
    table.appendChild(tableRow);

name.value = ""
comment.value = ""
}
)
