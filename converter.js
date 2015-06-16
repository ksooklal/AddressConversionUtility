function GeographicLocation(){
	this.latitude = "";
	this.longitude = "";
}

function GeographicLocation(lat, lng){
	this.latitude = lat;
	this.longitude = lng;
}

function getAddressConversion(addressString){
	var address = replaceAll(' ', '+', addressString);
	var apiKey = "AIzaSyAQeBBy5gncPrgeyZCJdTx6zmo2n6t3faA";
	var url = "https://maps.googleapis.com/maps/api/geocode/xml?address=" + address + "&key=" + apiKey;
	console.log(url);
	var eke = new GeographicLocation();
	$.ajax({
		dataType: "xml",
		url: url,
		async: false,
		data: "",
		success: function (data){
			eke.latitude = $(data).find("location>lat").text();
			eke.longitude = $(data).find("location>lng").text();
		}
	});
	return eke;
}