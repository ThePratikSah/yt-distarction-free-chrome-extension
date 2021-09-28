const yt = `
  <div class="wrap">
    <div class="search">
      <input type="text" id="inputSearch" class="searchTerm" placeholder="Search distraction free">
      <button id="btnSearch" class="searchButton">
        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
      </button>
    </div>
  </div>
  <style>
  body{
    background: #f2f2f2;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .search {
    width: 100%;
    position: relative;
    display: flex;
  }

  .wrap {
    text-align: center;
  }

  .searchTerm {
    width: 100%;
    border: 3px solid #FF0000;
    border-right: none;
    padding: 5px;
    height: 20px;
    border-radius: 5px 0 0 5px;
    outline: none;
    color: #282828;
  }

  .searchTerm:focus{
    color: #282828;
  }

  .searchButton {
    width: 40px;
    height: 36px;
    border: 1px solid #FF0000;
    background: #FF0000;
    text-align: center;
    color: #fff;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    font-size: 20px;
  }

  /*Resize the wrap to see the search bar change!*/
  .wrap{
    width: 30%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  </style>
`;

setInterval(() => {});

if (window.location.pathname === "/watch") {
  document.getElementById("secondary").style.display = "none";
}

if (window.location.pathname === "/results") {
  const sidebar = document.getElementById("guide-inner-content");
  sidebar.style.display = "none";
}

if (window.location.pathname === "/") {
  document.body.innerHTML = yt;
}

const button = document.getElementById("btnSearch");
const searchInput = document.getElementById("inputSearch");

button.addEventListener("click", (e) => {
  fetchData();
});

searchInput.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    fetchData();
  }
});

const fetchData = () => {
  // I have to get all the content of the input field and replace space with '+'
  let searchValue = searchInput.value;
  if (!searchValue) {
    return alert("Please enter something to search");
  }
  searchValue = searchValue.split(" ").join("+");
  window.location.href = `https://www.youtube.com/results?search_query=${searchValue}`;
};
