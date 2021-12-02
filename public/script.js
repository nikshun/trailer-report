var choiceName = ""

var boxNames = []
var boxChecks = []
var boxComments = []

$( document ).ready(function() {
    $("#pageThreeHide").hide();
    $("#list-group").hide();
});

const TruckOnClick = () => {
    $(".home-page").hide();
    $(".second-page").fadeIn(200);
    $(".third-page").hide();
    $(".third3-page").hide();
    choiceName = "Truck Labourate"
}

const TrailerOnClick = () => {
    $(".home-page").hide();
    $(".third-page").hide();
    $(".third3-page").hide();
    $(".second-page").fadeIn(200);
    choiceName = "Trailer Labourate"
}

const BackOnClick = (num) => {
    if (num == 1) {
        $(".home-page").fadeIn(200);
        $(".third-page").hide();
        $(".third3-page").hide();
        $(".second-page").hide();        
    }
    else if (num == 3) {
        $(".home-page").hide();
        $(".third-page").fadeIn(200);
        $(".third3-page").hide();
        $(".second-page").hide();        
    }
    else{
        $(".home-page").hide();
        $(".third-page").hide();
        $(".third3-page").hide();
        $(".second-page").fadeIn(200);
    }
}

const NextOnClick = (num) => {
    if (num == 1) {
        $(".home-page").hide();
        $(".third-page").fadeIn(200);
        $(".third3-page").hide();
        $(".second-page").hide();        
    }
    else if (num == 2) {
        $(".home-page").hide();
        $(".second-page").hide();
        $(".third-page").hide();        
        $(".third3-page").fadeIn(200);
    }
    else{
        $(".home-page").hide();
        $(".third-page").hide();
        $(".third3-page").hide();
        $(".second-page").fadeIn(200);
    }
}

const ListGroupItemOnClick = (name) => { // ADD ITEM CREATE
    $("#pageThreeHide").hide();
    $(".dropdown-buttons").fadeIn(200);
    $("#list-group").fadeIn(200);
    ReReadBoxes()
    boxNames.push(name)
    ReRenderBoxes()
}

const ListGroupItemHIDEOnClick = (name) => { 
    $("#pageThreeHide").hide();
    $(".dropdown-buttons").fadeIn(200);
    $("#list-group").hide()
}

const DeleteBoxOnClick = (num) => {
    ReReadBoxes()
    $("#pageThreeHide").hide();
    $(".dropdown-buttons").fadeIn(200);
    // boxNames = boxNames.filter(item => boxNames.indexOf(item) != num)
    boxComments.splice(num, 1)
    boxNames.splice(num, 1)
    ReRenderBoxes()
}

const ReReadBoxes = () => {
    boxComments = []
    boxComments.push($("#ctrl0").val() == undefined ? "" : $("#ctrl0").val())
    boxComments.push($("#ctrl1").val() == undefined ? "" : $("#ctrl1").val())
    boxComments.push($("#ctrl2").val() == undefined ? "" : $("#ctrl2").val())
    boxComments.push($("#ctrl3").val() == undefined ? "" : $("#ctrl3").val())
    boxComments.push($("#ctrl4").val() == undefined ? "" : $("#ctrl4").val())
    boxComments.push($("#ctrl5").val() == undefined ? "" : $("#ctrl5").val())
    boxComments.push($("#ctrl6").val() == undefined ? "" : $("#ctrl6").val())
    boxComments.push($("#ctrl7").val() == undefined ? "" : $("#ctrl7").val())
    boxComments.push($("#ctrl8").val() == undefined ? "" : $("#ctrl8").val())
    boxComments.push($("#ctrl9").val() == undefined ? "" : $("#ctrl9").val())
    boxComments.push($("#ctrl10").val() == undefined ? "" : $("#ctrl10").val())
    boxComments.push($("#ctrl11").val() == undefined ? "" : $("#ctrl11").val())
    boxComments.push($("#ctrl12").val() == undefined ? "" : $("#ctrl12").val())
    boxComments.push($("#ctrl13").val() == undefined ? "" : $("#ctrl13").val())
    boxComments.push($("#ctrl14").val() == undefined ? "" : $("#ctrl14").val())
    boxComments.push($("#ctrl15").val() == undefined ? "" : $("#ctrl15").val())
    boxComments.push($("#ctrl16").val() == undefined ? "" : $("#ctrl16").val())
    boxComments.push($("#ctrl17").val() == undefined ? "" : $("#ctrl17").val())
    boxComments.push($("#ctrl18").val() == undefined ? "" : $("#ctrl18").val())
    boxComments.push($("#ctrl19").val() == undefined ? "" : $("#ctrl19").val())
}

const ReRenderBoxes = () => {
    var str = ""
    var i = 0
    boxNames.forEach((nameStr)=>{
        if(nameStr.slice(-1) == "#"){
            console.log(boxComments[i])
            str += 
            `
                <div class="trailer-report-box">
                    <h6 style="float: left;">
                    ` + nameStr + `
                    </h6>
                    <input type="text" value="` + boxComments[i] + `" class="form-control" id="ctrl` + i + `">
                    
                    <div class="form-check" id="exampleCheckID4">
                    <input type="checkbox" class="form-check-input checkbox" id="checkbox` + i + `">
                    <label class="form-check-label" ">Used</label>
                </div>
                
                <button type="button" style="float: right; margin-top: 10px;" class="btn btn-outline-danger" onclick="DeleteBoxOnClick('` + i + `')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                    Button
                </button>
                
                </div>
            `
        }else{
            str += 
            `
                <div class="trailer-report-box">
                    <h6 style="float: left;">
                    ` + nameStr + `
                    </h6>
                    <input type="text" class="form-control" value="` + boxComments[i] + `"  id="ctrl` + i + `">
                    
                    <div class="form-check" id="exampleCheckID4">
                </div>
                
                <button type="button" style="float: right; margin-top: 10px;" class="btn btn-outline-danger" onclick="DeleteBoxOnClick('` + i + `')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                    Button
                </button>
                
                </div>
            `
        }
        i++
    })
    document.getElementById("right-sidebar").innerHTML = str
    $("#right-sidebar").fadeIn(200)
    $("#list-group").hide()
}


const DropdownButtonOnClick = (name) => {
    switch (name) {
        case "Trailer Electronics":
            document.getElementById("list-group").innerHTML = 
            `
                <li class="list-group-item" onclick="ListGroupItemOnClick('REPAIRED  LIGHT')">REPAIRED  LIGHT<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('REPLACED CABLE')">REPLACED CABLE<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('Repair Cable')">Repair Cable<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('REPLACED ABS TRAILER MODULE')">REPLACED ABS TRAILER MODULE<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('Replaced ABS sensors')">Replaced ABS sensors<span style="float: right;">→</span></li>
            `
            break;
        case "Trailer Brake":
            document.getElementById("list-group").innerHTML = 
            `
            <ul>
                <li class="list-group-item" onclick="ListGroupItemOnClick('Replaced Brakes')">Replaced Brakes<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('Replaced Drams')">Replaced Drams<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('REPLACED SLACK ADJUSTER')">REPLACED SLACK ADJUSTER<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('REPLACED scam')">REPLACED scam<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('REPLACED BRAKE CHAMBER')">REPLACED BRAKE CHAMBER<span style="float: right;">→</span></li>
            </ul>
            `
            break;
        case "Air System of the Trailer":
            document.getElementById("list-group").innerHTML = 
            `
                <li class="list-group-item" onclick="ListGroupItemOnClick('REPLACED AIR LINE')">REPLACED AIR LINE<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('REPLACED AIR FITTING')">REPLACED AIR FITTING<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('REPLACED AIRBAG')">REPLACED AIRBAG<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('REPLACED BRAKE VALVE')">REPLACED BRAKE VALVE<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('REPLACED PRESSURE PROTECTION VALVE')">REPLACED PRESSURE PROTECTION VALVE<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('REPLACED AIR TANK')">REPLACED AIR TANK<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('REPLACE LEVELING VALVE')">REPLACE LEVELING VALVE<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('REPLACED 3 WAY VALVE')">REPLACED 3 WAY VALVE<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('REPLACED PIN ACTUATOR')">REPLACED PIN ACTUATOR<span style="float: right;">→</span></li>
            `
            break;
        case "Engine":
            document.getElementById("list-group").innerHTML = 
            `
                <li class="list-group-item" onclick="ListGroupItemOnClick('REPLACED BATTERY')">REPLACED BATTERY#<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('REPLACED STARTER#')">REPLACED STARTER#<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('REPLACED ALTERNATOR#')">REPLACED ALTERNATOR#<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('alternator braket#')">alternator braket#<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('REPLACED  BELTS')">REPLACED  BELTS<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('REPLACED BELT TENSIONER#')">REPLACED BELT TENSIONER#<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('replace sensors#')">replace sensors#<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('OIL CHANGE')">OIL CHANGE<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('change coolant fluid #')">change coolant fluid #<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('REPLACED SEAL')">REPLACED SEAL<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('ENGINE MOUNT REPLACEMENT #')">ENGINE MOUNT REPLACEMENT #<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('REPLACED WATER PUMP #')">REPLACED WATER PUMP #<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('REPLACED MANIFOLD #')">REPLACED MANIFOLD #<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('REPLACE CILINDER HEAD #')">REPLACE CILINDER HEAD #<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('REPAIR CILINDER HEAD')">REPAIR CILINDER HEAD<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('VALVE ADJUSTMENT')">VALVE ADJUSTMENT<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('REPLACE ENGINE #')">REPLACE ENGINE #<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('REPLACE COMPRESSOR #')">REPLACE COMPRESSOR #<span style="float: right;">→</span></li>
            `
            break;
        case "Trailer SUSPENSION":
            document.getElementById("list-group").innerHTML = 
            `
                <li class="list-group-item" onclick="ListGroupItemOnClick('REPLACED TIRE #')">REPLACED TIRE #<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('REPAIR TIRE')">REPAIR TIRE<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('REPLACE RIM #')">REPLACE RIM #<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('REPLACE BERINGS #')">REPLACE BERINGS #<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('REPLACED HUB #')">REPLACED HUB #<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('REPLACED WHEEL SEAL #')">REPLACED WHEEL SEAL #<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('REPLACED HUB SEAL #')">REPLACED HUB SEAL #<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('REPLACED TANDEM #')">REPLACED TANDEM #<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('REPLACE TANDEM BUSHING')">REPLACE TANDEM BUSHING<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('REPLACE AXLE #')">REPLACE AXLE #<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('REPLACED SHOCK #')">REPLACED SHOCK #<span style="float: right;">→</span></li>
            `
            break;
        case "Trailer Repair":
            document.getElementById("list-group").innerHTML = 
            `
                <li class="list-group-item" onclick="ListGroupItemOnClick('REPLACE LENDING GEAR #')">REPLACE LENDING GEAR #<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('REPAIRED MUD FLAP')">REPAIRED MUD FLAP<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('REPLACE DOT STIKER')">REPLACE DOT STIKER<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('REPLACE DOT BAR #')">REPLACE DOT BAR #<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('REPLACE DOOR #')">REPLACE DOOR #<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('REPAIRE DEMAGE')">REPAIRE DEMAGE<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('REPLACE AIR SHUTE #')">REPLACE AIR SHUTE #<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('INSTALL E-TRAKS #')">INSTALL E-TRAKS #<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('REPLACE CROSS MEMBERS #')">REPLACE CROSS MEMBERS #<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('REPLACE PLASTIC ENGINE')">REPLACE PLASTIC ENGINE<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('REPLACE MUD FLAP BRAKET #')">REPLACE MUD FLAP BRAKET #<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('INSTALL SPARE SUPORT')">INSTALL SPARE SUPORT<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('REPLACE LOCKS #')">REPLACE LOCKS #<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('REPLACE DOCK BUMPERS #')">REPLACE DOCK BUMPERS #<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick('REPLACE HANDLE LENDING GEAR #')">REPLACE HANDLE LENDING GEAR #<span style="float: right;">→</span></li>
            `
            break;                                           
        default:
            break;
    }

    $(".dropdown-buttons").hide();
    $("#pageThreeHide").fadeIn(200);
    $("#list-group").fadeIn(200);
}

$.date = function(orginaldate) { 
    var date = new Date(orginaldate);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    if (day < 10) {
        day = "0" + day;
    }
    if (month < 10) {
        month = "0" + month;
    }
    var date =  month + "/" + day + "/" + year; 
    return date;
};

async function generatePDF() {

    var pdfText = ""
    var i = 0
    boxNames.forEach(name => {
        pdfText += 
        `
        ` + name +` 
        (` + $("#ctrl" + i).val() +`) 
        `
        i++
    });

    var selectedTypes = ""
    if (document.getElementById("Carriercheck").checked) {
        selectedTypes += " Carrier, "
    }
    if (document.getElementById("ThermoKingcheck").checked) {
        selectedTypes += " ThermoKing, "
    }
    if (document.getElementById("Othercheck").checked) {
        selectedTypes += " Other, "
    }
    if (selectedTypes == "") {
        selectedTypes = " none"
    }

    var extraText = ""

    if (document.getElementById("exampleCheck11").checked) {
        extraText += "Brake Adjust, "
    }
    if (document.getElementById("exampleCheck22").checked) { 
        extraText += "Clean Inside, "
    }
    if (document.getElementById("exampleCheck33").checked) { 
        extraText += "Grease, "
    }
    if (document.getElementById("exampleCheck4").checked) { 
        extraText += "Bearings Adjusted, "
    }
    if (document.getElementById("exampleCheck5").checked) { 
        extraText += "Tire Pressures, "
    }
    if (document.getElementById("exampleCheck6").checked) { 
        extraText += "Brake System, "
    }
    if (document.getElementById("exampleCheck7").checked) { 
        extraText += "Lights, "
    }
    if (document.getElementById("exampleCheck8").checked) { 
        extraText += "Air Leaks, "
    }
    if (document.getElementById("exampleCheck9").checked) {
        extraText += "Suspension, "
    }
    if (document.getElementById("exampleCheck99").checked) {
        extraText += "Seals, "
    }
    if (document.getElementById("exampleCheck399").checked) {
        extraText += "Tires "
    }
    
    // const { jsPDF } = window.jspdf;

    // const doc = new jsPDF();
    // doc.text(pdfText, 10, 10);
    // doc.save("a.pdf");

    emailjs.init("user_5v0M9R0u5GcR6baxunaZd");
    emailjs.send("trailers-nik","template_ho4q8cj",{
        type: choiceName,
        unit: $("#unit").val(),
        date: $.date($("#datePicker").val()),
        company: $("#company").val(),
        hours: $("#hours").val(),
        technician: $("#technician").val(),

        selected_types: selectedTypes,

        report_list1 : (boxNames[0] == undefined ? "" : boxNames[0]  + " (" + ($("#ctrl0").val() == undefined ? "" : $("#ctrl0").val()) + ") " + (document.getElementById("checkbox0") != undefined ? (document.getElementById("checkbox0").checked ? " - Used" : "") : "")),
        report_list2 : (boxNames[1] == undefined ? "" : boxNames[1]  + " (" + ($("#ctrl1").val() == undefined ? "" : $("#ctrl1").val()) + ") " + (document.getElementById("checkbox1") != undefined ? (document.getElementById("checkbox1").checked ? " - Used" : "") : "")),
        report_list3 : (boxNames[2] == undefined ? "" : boxNames[2]  + " (" + ($("#ctrl2").val() == undefined ? "" : $("#ctrl2").val()) + ") " + (document.getElementById("checkbox2") != undefined ? (document.getElementById("checkbox2").checked ? " - Used" : "") : "")),
        report_list4 : (boxNames[3] == undefined ? "" : boxNames[3]  + " (" + ($("#ctrl3").val() == undefined ? "" : $("#ctrl3").val()) + ") " + (document.getElementById("checkbox3") != undefined ? (document.getElementById("checkbox3").checked ? " - Used" : "") : "")),
        report_list5 : (boxNames[4] == undefined ? "" : boxNames[4]  + " (" + ($("#ctrl4").val() == undefined ? "" : $("#ctrl4").val()) + ") " + (document.getElementById("checkbox4") != undefined ? (document.getElementById("checkbox4").checked ? " - Used" : "") : "")),
        report_list6 : (boxNames[5] == undefined ? "" : boxNames[5]  + " (" + ($("#ctrl5").val() == undefined ? "" : $("#ctrl5").val()) + ") " + (document.getElementById("checkbox5") != undefined ? (document.getElementById("checkbox5").checked ? " - Used" : "") : "")),
        report_list7 : (boxNames[6] == undefined ? "" : boxNames[6]  + " (" + ($("#ctrl6").val() == undefined ? "" : $("#ctrl6").val()) + ") " + (document.getElementById("checkbox6") != undefined ? (document.getElementById("checkbox6").checked ? " - Used" : "") : "")),
        report_list8 : (boxNames[7] == undefined ? "" : boxNames[7]  + " (" + ($("#ctrl7").val() == undefined ? "" : $("#ctrl7").val()) + ") " + (document.getElementById("checkbox7") != undefined ? (document.getElementById("checkbox7").checked ? " - Used" : "") : "")),
        report_list9 : (boxNames[8] == undefined ? "" : boxNames[8]  + " (" + ($("#ctrl8").val() == undefined ? "" : $("#ctrl8").val()) + ") " + (document.getElementById("checkbox8") != undefined ? (document.getElementById("checkbox8").checked ? " - Used" : "") : "")),
        report_list10 : (boxNames[9] == undefined ? "" : boxNames[9]  + " (" + ($("#ctrl9").val() == undefined ? "" : $("#ctrl9").val()) + ") " + (document.getElementById("checkbox9") != undefined ? (document.getElementById("checkbox9").checked ? " - Used" : "") : "")),
        report_list11 : (boxNames[10] == undefined ? "" : boxNames[10]  + " (" + ($("#ctrl10").val() == undefined ? "" : $("#ctrl10").val()) + ") " + (document.getElementById("checkbox10") != undefined ? (document.getElementById("checkbox10").checked ? " - Used" : "") : "")),
        report_list12 : (boxNames[11] == undefined ? "" : boxNames[11]  + " (" + ($("#ctrl11").val() == undefined ? "" : $("#ctrl11").val()) + ") " + (document.getElementById("checkbox11") != undefined ? (document.getElementById("checkbox11").checked ? " - Used" : "") : "")),
        report_list13 : (boxNames[12] == undefined ? "" : boxNames[12]  + " (" + ($("#ctrl12").val() == undefined ? "" : $("#ctrl12").val()) + ") " + (document.getElementById("checkbox12") != undefined ? (document.getElementById("checkbox12").checked ? " - Used" : "") : "")),
        report_list14 : (boxNames[13] == undefined ? "" : boxNames[13]  + " (" + ($("#ctrl13").val() == undefined ? "" : $("#ctrl13").val()) + ") " + (document.getElementById("checkbox13") != undefined ? (document.getElementById("checkbox13").checked ? " - Used" : "") : "")),
        report_list15 : (boxNames[14] == undefined ? "" : boxNames[14]  + " (" + ($("#ctrl14").val() == undefined ? "" : $("#ctrl14").val()) + ") " + (document.getElementById("checkbox14") != undefined ? (document.getElementById("checkbox14").checked ? " - Used" : "") : "")),
        report_list16 : (boxNames[15] == undefined ? "" : boxNames[15]  + " (" + ($("#ctrl15").val() == undefined ? "" : $("#ctrl15").val()) + ") " + (document.getElementById("checkbox15") != undefined ? (document.getElementById("checkbox15").checked ? " - Used" : "") : "")),
        report_list17 : (boxNames[16] == undefined ? "" : boxNames[16]  + " (" + ($("#ctrl16").val() == undefined ? "" : $("#ctrl16").val()) + ") " + (document.getElementById("checkbox16") != undefined ? (document.getElementById("checkbox16").checked ? " - Used" : "") : "")),
        report_list18 : (boxNames[17] == undefined ? "" : boxNames[17]  + " (" + ($("#ctrl17").val() == undefined ? "" : $("#ctrl17").val()) + ") " + (document.getElementById("checkbox17") != undefined ? (document.getElementById("checkbox17").checked ? " - Used" : "") : "")),
        report_list19 : (boxNames[18] == undefined ? "" : boxNames[18]  + " (" + ($("#ctrl18").val() == undefined ? "" : $("#ctrl18").val()) + ") " + (document.getElementById("checkbox18") != undefined ? (document.getElementById("checkbox18").checked ? " - Used" : "") : "")),
        report_list20 : (boxNames[19] == undefined ? "" : boxNames[19]  + " (" + ($("#ctrl19").val() == undefined ? "" : $("#ctrl19").val()) + ") " + (document.getElementById("checkbox19") != undefined ? (document.getElementById("checkbox19").checked ? " - Used" : "") : "")),

        extra_list: extraText
    })
    location.reload()
}