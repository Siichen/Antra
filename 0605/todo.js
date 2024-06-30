fetch('https://jsonplaceholder.typicode.com/todos') // fetch会返回一个promise对象 这行代码向服务器发送一个GET请求，fetch函数会返回一个Promise对象。
  .then(response => response.json()) // 当请求成功（Promise 被解决），response 对象会传递给第一个 .then。
  .then(data => { 
    const myList = document.getElementById('myUL'); // <ul>
    data.forEach(item => {  // 遍历数组中的每个元素
      let li = document.createElement('li');    // 新建一个<li>
      li.textContent = item.title; // <li>的内容是每个元素的title
      if (item.completed) { // 如果完成建立了
        li.classList.add('checked');   // 加上checked元素
        li.style.textDecoration = 'line-through';    // 加上划线
      }
      myList.appendChild(li); // 往<ul>里加上一个<li>
      addDeleteItem(li); // 添加删除功能
      checkedItem(li); // 添加check功能
    });
  })
  .catch(error => console.error('Error fetching data:', error)); // 如果在请求或数据处理过程中发生错误，会被catch捕获，并在控制台打印错误信息。



// append a new item into the list when click on "Add"
function newElement() {
    // create the li
    let li = document.createElement("li");
    // get the value of new li
    let liValue = document.getElementById("inputBox").value;
    // create a text node,
    var t = document.createTextNode(liValue);
    li.appendChild(t);

    // input format
    if (liValue === '') {
        window.alert("Please write down your goal.")
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    // clear input
    document.getElementById("inputBox").value = "";

    // trigger adddelete button for new added <li>
    addDeleteItem(li);

    // add checked function to new added <li>
    checkedItem(li);
}


// add delete button to every item
// const myLiList = [...document.getElementsByTagName("LI")];
// myLiList.addDeleteItem(); // 这会导致错误，因为数组没有 addDeleteItem 方法.
// can not use self-define function directly
// myLiList.forEach(item => addDeleteItem(item));
// 正确的做法：遍历数组并调用自定义函数
// 为了对数组的每个元素应用自定义函数，使用 forEach 这样的内置方法：


// create a delete button && function
function addDeleteItem (arg) {
    // const myList = [...document.getElementsByTagName("LI")];

    const span = document.createElement("SPAN");
    const chacha = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(chacha);

    // myList.appendChild(span);
    arg.appendChild(span);

    // when button is clicked
    span.onclick = function() {
        let inline = this.parentElement;
        inline.style.display = "none";
    }
}

// Add event listener to all close buttons when button is clicked
// document.getElementById("addButton").addEventListener('click', function() {
//     addDeleteItem();
// });


// add checked functionality to each list item
function checkedItem(li) {
    li.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
            ev.target.style.textDecoration = 'line-through';
        }
    }, false);
}




