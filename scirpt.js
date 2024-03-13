function Search() {
    var searchInput = document.getElementById("searchInput").value;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("results").innerHTML = xhr.responseText;
        }
    };
    xhr.open("GET", "search.php?query=" + encodeURIComponent(searchInput), true);
    xhr.send();
}
