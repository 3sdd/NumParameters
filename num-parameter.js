
function getJSON() {
    var req = new XMLHttpRequest();
    var json;
    req.onreadystatechange = function() {
        if(req.readyState == 4 && req.status == 200){	
            model_names=[];
            num_parameters=[];			
            var data = JSON.parse(req.responseText);	
            var len = data.length;					
            json=data;
        }
    };
    req.open("GET", "model_parameters.json", false);			
    req.send(null);
    return json;
}