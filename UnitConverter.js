window.onload = function () {

	var buttonElement1 = document.getElementById("ConverterM");
	var buttonElement2 = document.getElementById("ConverterI");
	var buttonElement3 = document.getElementById("ConverterF");
	var buttonElement4 = document.getElementById("ConverterY");
	var buttonElement5 = document.getElementById("ConverterK");
	var buttonElement6 = document.getElementById("ConverterMi");
	var buttonElement7 = document.getElementById("ConverterNm");
	var buttonElement8 = document.getElementById("ConverterGo");
	var buttonElement9 = document.getElementById("ConverterM2");
	var buttonElement10 = document.getElementById("ConverterI2");
	var buttonElement11 = document.getElementById("ConverterF2");
	var buttonElement12 = document.getElementById("ConverterY2");
	var buttonElement13 = document.getElementById("ConverterK2");
	var buttonElement14 = document.getElementById("ConverterMi2");
	var buttonElement15 = document.getElementById("ConverterNm2");
	var buttonElement16 = document.getElementById("ConverterGo2");
	var buttonElementMG = document.getElementById("ConverterMG");
	var buttonElementTonne = document.getElementById("ConverterMT");

	var MeterArr = [["Meter", 1.00], ["Inch", 0.0254], ["Foot", 0.3048], ["Yard", 0.9144], ["KiloMeter", 1000], [" Mile", 1609.34], ["Nuatical Mile", 1852]];
	var InchArr = [["Inch", 1.00], ["Foot", 12.00], ["Yard", 32], ["KiloMeter", 1000], [" Mile", 63360], ["Nuatical Mile", 72913.4], ["Meter", 39.3701]];
	var FootArr = [["Inch", 0.083333333], ["Foot", 1.00], ["Yard", 3], ["KiloMeter", 3280.84], [" Mile", 5280], ["Nuatical Mile", 6076.12], ["Meter", 3.28084]];
	var YardArr = [["Inch", 0.0277778], ["Foot", 0.333333], ["Yard", 32], ["KiloMeter", 10993.61], [" Mile", 1760], ["Nuatical Mile", 2025.37], ["Meter", 1.09361]];
	var KiloMeterArr = [["Inch", 0.0000254], ["Foot", 0.0003048], ["Yard", 0.0009144], ["KiloMeter", 1], [" Mile", 1.60934], ["Nuatical Mile", 1.852], ["Meter", 0.001]];
	var MileArr = [["Inch", 0.000015783], ["Foot", 0.000189394], ["Yard", 0.000568182], ["KiloMeter", 0.621371], [" Mile", 1], ["Nuatical Mile", 1.15078], ["Meter", 0.000621371]];
	var naArr = [["Inch", 0.000013715], ["Foot", 0.000164579], ["Yard", 0.000493737], ["KiloMeter", 0.539957], [" Mile", 0.868976], ["Nuatical Mile", 1], ["Meter", 0.000539957]];

	var Meter2Arr = [["Inch", 0.00064516], ["Foot", 0.092903], ["Yard", 0.836127], ["KiloMeter", 1000000], [" Mile", 2589988.10], ["Nuatical Mile", 3429900], ["Meter", 1]];
	var Inch2Arr = [["Inch", 1.00], ["Foot", 144], ["Yard", 1296], ["KiloMeter", 1550000000], [" Mile", 4014000000], ["Nuatical Mile", 5316000000], ["Meter", 1550]];
	var Foot2Arr = [["Inch", 0.00694444], ["Foot", 1.00], ["Yard", 3], ["KiloMeter", 10760000], [" Mile", 27880000], ["Nuatical Mile", 36920000], ["Meter", 10.7639]];
	var Yard2Arr = [["Inch", 0.000771605], ["Foot", 0.111111], ["Yard", 1], ["KiloMeter", 1196000], [" Mile", 3098000], ["Nuatical Mile", 3430000], ["Meter", 1.19599]];
	var Kilo2MeterArr = [["Inch", 0.00000000064516], ["Foot", 0.00000009290304], ["Yard", 0.0000083612736], ["KiloMeter", 1], [" Mile", 2.589988110336], ["Nuatical Mile", 3.4299], ["Meter", 0.0000001]];
	var Mile2Arr = [["Inch", 0.000000000249097668605244], ["Foot", 0.0000000358700642791552], ["Yard", 0.000000322830578512397], ["KiloMeter", 0.386102158542446], [" Mile", 1], ["Nuatical Mile", 1.32429], ["Meter", 0.000000386102158542446]];
	var Na2Arr = [["Inch", 0.0000000001881], ["Foot", 0.000000027086], ["Yard", 0.00000024378], ["KiloMeter", 0.291553], [" Mile", 0.75512], ["Nuatical Mile", 1], ["Meter", 0.00000029155]];

	//Remember that for weight all the stone conversions are just pounds as they get converted to stone later on.

	var MilgramArr = [["Milligram", 1], ["Gram", 1000], ["Kilogram", 1e6], ["Tonne", 1e9], ["Ounce", 28349.5], ["Pound", 453592], ["Stone", 28349.5], ["US Ton", 9.072e8], ["Imperial Ton", 1.016e9]];
	var GramArr = [["Milligram", ], ["Gram", ], ["Kilogram", ], ["Tonne", ], ["Ounce", ], ["Pound", ], ["Stone", ], ["US Ton", ], ["Imperial Ton", ]];
	var KilogramArr = [["Milligram", ], ["Gram", ], ["Kilogram", ], ["Tonne", ], ["Ounce", ], ["Pound", ], ["Stone", ], ["US Ton", ], ["Imperial Ton", ]];
	var TonneArr = [["Milligram", 1e-9], ["Gram", 1e-6], ["Kilogram", 0.001], ["Tonne", 1], ["Ounce", 2.834952e-5], ["Pound", 0.00453592], ["Stone", 2.834952e-5], ["US Ton", 0.907185], ["Imperial Ton", 1.01605]];
	var OunceArr = [["Milligram", ], ["Gram", ], ["Kilogram", ], ["Tonne", ], ["Ounce", ], ["Pound", ], ["Stone", ], ["US Ton", ], ["Imperial Ton", ]];
	var PoundArr = [["Milligram", ], ["Gram", ], ["Kilogram", ], ["Tonne", ], ["Ounce", ], ["Pound", ], ["Stone", ], ["US Ton", ], ["Imperial Ton", ]];
	var StoneArr = [["Milligram", ], ["Gram", ], ["Kilogram", ], ["Tonne", ], ["Ounce", ], ["Pound", ], ["Stone", ], ["US Ton", ], ["Imperial Ton", ]];
	var UStonArr = [["Milligram", ], ["Gram", ], ["Kilogram", ], ["Tonne", ], ["Ounce", ], ["Pound", ], ["Stone", ], ["US Ton", ], ["Imperial Ton", ]];
	var ImperialTonArr = [["Milligram", ], ["Gram", ], ["Kilogram", ], ["Tonne", ], ["Ounce", ], ["Pound", ], ["Stone", ], ["US Ton", ], ["Imperial Ton", ]];


	if (buttonElement1) {
		buttonElement1.addEventListener('click', function () { addinputM("ConverterM", MeterArr, "") });
	}
	if (buttonElement2) {
		buttonElement2.addEventListener('click', function () { addinputM("ConverterI", InchArr, "") });
	}
	if (buttonElement3) {
		buttonElement3.addEventListener('click', function () { addinputM("ConverterF", FootArr, "") });
	}
	if (buttonElement4) {
		buttonElement4.addEventListener('click', function () { addinputM("ConverterY", YardArr), "" });
	}
	if (buttonElement5) {
		buttonElement5.addEventListener('click', function () { addinputM("ConverterK", KiloMeterArr, "") });
	}
	if (buttonElement6) {
		buttonElement6.addEventListener('click', function () { addinputM("ConverterMi", MileArr), "" });
	}
	if (buttonElement7) {
		buttonElement7.addEventListener('click', function () { addinputM("ConverterNm", NaArr, "") });
	}
	if (buttonElement8) {
		buttonElement8.addEventListener('click', addinputGo);
	}
	if (buttonElement9) {
		buttonElement9.addEventListener('click', function () { addinputM("ConverterM2", Meter2Arr, "2") });
	}
	if (buttonElement10) {
		buttonElement10.addEventListener('click', function () { addinputM("ConverterI2", Inch2Arr, "2") });
	}
	if (buttonElement11) {
		buttonElement11.addEventListener('click', function () { addinputM("ConverterF2", Foot2Arr, "2") });
	}
	if (buttonElement12) {
		buttonElement12.addEventListener('click', function () { addinputM("ConverterY2", Yard2Arr, "2") });
	}
	if (buttonElement13) {
		buttonElement13.addEventListener('click', function () { addinputM("ConverterK2", Kilo2MeterArr, "2") });
	}
	if (buttonElement14) {
		buttonElement14.addEventListener('click', function () { addinputM("ConverterMi2", Mile2Arr, "2") });
	}
	if (buttonElement15) {
		buttonElement15.addEventListener('click', function () { addinputM("ConverterNm2", Na2Arr, "2") });
	}
	if (buttonElement16) {
		buttonElement16.addEventListener('click', addinputGo);
	}
	if (buttonElementMG) {
		buttonElementMG.addEventListener('click', function () { addinputM("ConverterMG", MilgramArr, "4") });
	}
	if (buttonElementTonne) {
		buttonElementTonne.addEventListener('click', function () { addinputM("ConverterMT", TonneArr, "4") });
	}



	function addinputGo() {
		var dropdowntext = $("#buttonConverter").text();


		switch (dropdowntext) {
			case "Meter":
				addinputM("ConverterM", MeterArr, "");
				break;
			case "Inch":
				addinputI("ConverterI", InchArr, "");
				break;
			case "Foot":
				addinputM("ConverterF", FootArr, "");
				break;
			case "Yard":
				addinputM("ConverterY", YardArr, "");
				break;
			case "Kilometer":
				addinputM("ConverterK", KiloMeterArr, "");
				break;
			case "Mile":
				addinputM("ConverterMi", MileArr, "");
				break;
			case "Nautical Mile":
				addinputM("ConverterNm", NaArr), "";
				break;

		}

	}




	function addinputM(ID, Arr, Y) {

		var dropdowntext = $("#" + ID).text();
		$("#buttonConverter" + Y).html(dropdowntext);

		var textBoxTitleS = $("#ConverterInput" + Y).val();
		var textBoxTitle = parseFloat(textBoxTitleS);

		Arr = Arr.sort(function (a, b) { return a[1] - b[1]; });

		if (isNaN(textBoxTitle)) {

			$("#ConData" + Y).empty();
			for (i = 0; i < Arr.length; i++) {
				var ConvertNum = FuncConvert(1, Arr[i][1]);
				$("#ConData" + Y).append(1 + " " + dropdowntext + " = " + ConvertNum + " " + Arr[i][0] + "<br>");
			}
		} else {
			$("#ConData" + Y).empty();
			for (i = 0; i < Arr.length; i++) {
				if (Arr[i][0] == "Stone"){
					
					var ConvertNum = SPOConverter(textBoxTitle, Arr[i][1]);
					$("#ConData" + Y).append(textBoxTitle + " " + dropdowntext + " = " + ConvertNum + "<br>");
				} else {
					var ConvertNum = FuncConvert(textBoxTitle, Arr[i][1]);
					$("#ConData" + Y).append(textBoxTitle + " " + dropdowntext + " = " + ConvertNum + " " + Arr[i][0] + "<br>");
				}
			}
		}
	}
};

function FuncConvert(X, Y) {
	var Num = X / Y;

	if (Num >= 1) {

		var fixedNum = Num.toFixed(2);

		return fixedNum
	} else {

		var fixedNum = Num.toFixed(9);
		return fixedNum
	}


}

function SPOConverter(X, Y) {
	var passthrough = X / Y;
	var originalnum = passthrough / 224;
  	 var stone = Math.floor(originalnum);
	var pounds = Math.floor((originalnum - stone) * 14);
	var ounces = (((originalnum - stone) * 14) - pounds) * 16;
	var ouncesfixed = ounces.toFixed(2);
	return stone + " Stone, " + pounds + " Pounds and " + ouncesfixed + " Ounces, ";



};
