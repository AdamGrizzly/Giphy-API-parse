var rend
var site='http://api.giphy.com/v1/gifs/search?q={';
var api='}&api_key=dc6zaTOxFJmzC';
function yo() {
	var q=document.getElementById("searchTxt").value;
	fetch(site+q+api).then(data=>data.json()).then(resp=>window.rend=resp.data);
	rend.forEach(function(pochti) {
        var ifrm = document.createElement("iframe");
        ifrm.setAttribute("src",pochti.embed_url);
        ifrm.style.width = "640px";
        ifrm.style.height = "480px";
        document.body.appendChild(ifrm);
    });
}