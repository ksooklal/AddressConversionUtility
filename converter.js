/* This file contains a class called GeographicLocation, which is used to store the latitude and longitude 
returned by the getAddressConversion() method, which takes in the street address as a string. */

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
