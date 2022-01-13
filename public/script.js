var choiceName = ""

var boxNames = []
var boxChecks = []
var boxComments = []

$( document ).ready(function() {
    $("#pageThreeHide").hide();
    $("#list-group").hide();
    OnOtherSelect()
});

const TruckOnClick = () => {
    $(".home-page").hide();
    $(".second-page").fadeIn(200);
    $(".third-page").hide();
    $(".third3-page").hide();
    choiceName = "Truck Labourate"
    document.getElementById("laborate-options").innerHTML = 
    `
        <div class="form-check">
        <input type="checkbox" class="form-check-input checkbox" id="Carriercheck">
        <label class="form-check-label" for="Carriercheck">Volvo</label>
        </div>
        <div class="form-check">
            <input type="checkbox" class="form-check-input checkbox" id="ThermoKingcheck">
            <label class="form-check-label" for="ThermoKingcheck">Freight</label>
        </div>
        <div class="form-check">
            <input type="checkbox" class="form-check-input checkbox" id="Othercheck">
            <label class="form-check-label" for="Othercheck">Other</label>
        </div>
    `
    document.getElementById("truck-specific-fields").innerHTML = 
    `
        <div class="form-group">
            <label for="exampleInputEmail1">Mileage for truck</label>
            <input type="number" class="form-control" id="truckMileage">
        </div>
    `
}

const TrailerOnClick = () => {
    $(".home-page").hide();
    $(".third-page").hide();
    $(".third3-page").hide();
    $(".second-page").fadeIn(200);
    choiceName = "Trailer Labourate"
    document.getElementById("laborate-options").innerHTML = 
    `
    <div class="form-check">
    <input type="checkbox" class="form-check-input checkbox" id="Carriercheck">
    <label class="form-check-label" for="Carriercheck">Carrier</label>
    </div>
    <div class="form-check">
        <input type="checkbox" class="form-check-input checkbox" id="ThermoKingcheck">
        <label class="form-check-label" for="ThermoKingcheck">Thermo King</label>
    </div>
    <div class="form-check">
        <input type="checkbox" class="form-check-input checkbox" id="Othercheck">
        <label class="form-check-label" for="Othercheck">Other</label>
    </div>
    `
    document.getElementById("truck-specific-fields").innerHTML = 
    `
        <div class="form-group">
            <label for="exampleInputEmail1">Engine hours for trailer</label>
            <input type="number" class="form-control" id="engineHours">
        </div>
    `
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

const OnOtherSelect = () => { 
    if ($("#tech-select").val() == "Other") {
        $("#other").fadeIn(200);
    }
    else{
        $("#other").hide();
    }
}

const DeleteBoxOnClick = (num) => {
    ReReadBoxes()
    $("#pageThreeHide").hide();
    $(".dropdown-buttons").fadeIn(200);
    // boxNames = boxNames.filter(item => boxNames.indexOf(item) != num)
    boxComments.splice(num, 1)
    boxNames.splice(num, 1)
    boxChecks.splice(num, 1)
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
    
    boxChecks = []
    boxChecks.push($("#checkbox0") == undefined ? false : $("#checkbox0").is(":checked"))
    boxChecks.push($("#checkbox1") == undefined ? false : $("#checkbox1").is(":checked"))
    boxChecks.push($("#checkbox2") == undefined ? false : $("#checkbox2").is(":checked"))
    boxChecks.push($("#checkbox3") == undefined ? false : $("#checkbox3").is(":checked"))
    boxChecks.push($("#checkbox4") == undefined ? false : $("#checkbox4").is(":checked"))
    boxChecks.push($("#checkbox5") == undefined ? false : $("#checkbox5").is(":checked"))
    boxChecks.push($("#checkbox6") == undefined ? false : $("#checkbox6").is(":checked"))
    boxChecks.push($("#checkbox7") == undefined ? false : $("#checkbox7").is(":checked"))
    boxChecks.push($("#checkbox8") == undefined ? false : $("#checkbox8").is(":checked"))
    boxChecks.push($("#checkbox9") == undefined ? false : $("#checkbox9").is(":checked"))
    boxChecks.push($("#checkbox10") == undefined ? false : $("#checkbox10").is(":checked"))
    boxChecks.push($("#checkbox11") == undefined ? false : $("#checkbox11").is(":checked"))
    boxChecks.push($("#checkbox12") == undefined ? false : $("#checkbox12").is(":checked"))
    boxChecks.push($("#checkbox13") == undefined ? false : $("#checkbox13").is(":checked"))
    boxChecks.push($("#checkbox14") == undefined ? false : $("#checkbox14").is(":checked"))
    boxChecks.push($("#checkbox15") == undefined ? false : $("#checkbox15").is(":checked"))
    boxChecks.push($("#checkbox16") == undefined ? false : $("#checkbox16").is(":checked"))
    boxChecks.push($("#checkbox17") == undefined ? false : $("#checkbox17").is(":checked"))
    boxChecks.push($("#checkbox18") == undefined ? false : $("#checkbox18").is(":checked"))
    boxChecks.push($("#checkbox19") == undefined ? false : $("#checkbox19").is(":checked"))
}

const ReRenderBoxes = () => {
    var str = ""
    var i = 0
    boxNames.forEach((nameStr)=>{
        if(nameStr.slice(-1) == "#"){
            str += 
            `
                <div class="trailer-report-box">
                    <h6 style="float: left;">
                    ` + nameStr + `
                    </h6>
                    <input type="text" value="` + boxComments[i] + `" class="form-control" id="ctrl` + i + `">
                    
                    <div class="form-check" id="exampleCheckID4">
                    <input type="checkbox" class="form-check-input checkbox" id="checkbox` + i + `"` +  (boxChecks[i] ? " checked" : "") + `>
                    <label class="form-check-label">Used</label>
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
                    <input hidden type="checkbox" class="form-check-input checkbox" id="checkbox` + i + (boxChecks[i] ? "checked" : "") + `">
                    <label hidden class="form-check-label">Used</label>
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
            if (choiceName == "Truck Labourate") {
                document.getElementById("list-group").innerHTML += 
                `
                    <li class="list-group-item" onclick="ListGroupItemOnClick('Coolent leak')">Coolent leak <span style="float: right;">→</span></li>
                    <li class="list-group-item" onclick="ListGroupItemOnClick('Oil leak')">Oil leak <span style="float: right;">→</span></li>
                    <li class="list-group-item" onclick="ListGroupItemOnClick('Air compressor')">Air compressor <span style="float: right;">→</span></li>
                    <li class="list-group-item" onclick="ListGroupItemOnClick('A/C compressor')">A/C compressor <span style="float: right;">→</span></li>
                    <li class="list-group-item" onclick="ListGroupItemOnClick('EGR')">EGR <span style="float: right;">→</span></li>
                    <li class="list-group-item" onclick="ListGroupItemOnClick('DPF')">DPF <span style="float: right;">→</span></li>
                    <li class="list-group-item" onclick="ListGroupItemOnClick('Clutch')">Clutch <span style="float: right;">→</span></li>
                    <li class="list-group-item" onclick="ListGroupItemOnClick('Exhaust')">Exhaust <span style="float: right;">→</span></li>
                    <li class="list-group-item" onclick="ListGroupItemOnClick('Air charger system')">Air charger system <span style="float: right;">→</span></li>
                    <li class="list-group-item" onclick="ListGroupItemOnClick('Fuel system')">Fuel system <span style="float: right;">→</span></li>
                    <li class="list-group-item" onclick="ListGroupItemOnClick('Power steering system')">Power steering system <span style="float: right;">→</span></li>
                    <li class="list-group-item" onclick="ListGroupItemOnClick('Computer diagnostic')">Computer diagnostic <span style="float: right;">→</span></li>
                `
            }
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

    emailjs.init("user_jPipHnCI01kPvoSUpNVBW");
    emailjs.send("service_sgcklp9","template_9zqjshf", {
        type: choiceName,
        unit: $("#unit").val(),
        date: (isNaN($.date($("#datePicker").val())) ? $.date($("#datePicker").val()):(new Date()).toString()),
        company: $("#company").val(),
        hours: $("#hours").val(),
        technician: $("#other").val() == "" ? $("#tech-select").val() : $("#other").val(),

        mileageForTruck: ($("#truckMileage").val() != undefined ? "Mileage For Truck: " + $("#truckMileage").val() : ""),
        engineHoursTrailer: ($("#engineHours").val() != undefined ? "Engine Hours For Trailer: " + $("#engineHours").val() : ""),

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
        report_list21 : (boxNames[21] == undefined ? "" : boxNames[21]  + " (" + ($("#ctrl21").val() == undefined ? "" : $("#ctrl21").val()) + ") " + (document.getElementById("checkbox21") != undefined ? (document.getElementById("checkbox21").checked ? " - Used" : "") : "")),
        report_list22 : (boxNames[22] == undefined ? "" : boxNames[22]  + " (" + ($("#ctrl22").val() == undefined ? "" : $("#ctrl22").val()) + ") " + (document.getElementById("checkbox22") != undefined ? (document.getElementById("checkbox22").checked ? " - Used" : "") : "")),
        report_list23 : (boxNames[23] == undefined ? "" : boxNames[23]  + " (" + ($("#ctrl23").val() == undefined ? "" : $("#ctrl23").val()) + ") " + (document.getElementById("checkbox23") != undefined ? (document.getElementById("checkbox23").checked ? " - Used" : "") : "")),
        report_list24 : (boxNames[24] == undefined ? "" : boxNames[24]  + " (" + ($("#ctrl24").val() == undefined ? "" : $("#ctrl24").val()) + ") " + (document.getElementById("checkbox24") != undefined ? (document.getElementById("checkbox24").checked ? " - Used" : "") : "")),
        report_list25 : (boxNames[25] == undefined ? "" : boxNames[25]  + " (" + ($("#ctrl25").val() == undefined ? "" : $("#ctrl25").val()) + ") " + (document.getElementById("checkbox25") != undefined ? (document.getElementById("checkbox25").checked ? " - Used" : "") : "")),
        report_list26 : (boxNames[26] == undefined ? "" : boxNames[26]  + " (" + ($("#ctrl26").val() == undefined ? "" : $("#ctrl26").val()) + ") " + (document.getElementById("checkbox26") != undefined ? (document.getElementById("checkbox26").checked ? " - Used" : "") : "")),
        report_list27 : (boxNames[27] == undefined ? "" : boxNames[27]  + " (" + ($("#ctrl27").val() == undefined ? "" : $("#ctrl27").val()) + ") " + (document.getElementById("checkbox27") != undefined ? (document.getElementById("checkbox27").checked ? " - Used" : "") : "")),
        report_list28 : (boxNames[28] == undefined ? "" : boxNames[28]  + " (" + ($("#ctrl28").val() == undefined ? "" : $("#ctrl28").val()) + ") " + (document.getElementById("checkbox28") != undefined ? (document.getElementById("checkbox28").checked ? " - Used" : "") : "")),
        report_list29 : (boxNames[29] == undefined ? "" : boxNames[29]  + " (" + ($("#ctrl29").val() == undefined ? "" : $("#ctrl29").val()) + ") " + (document.getElementById("checkbox29") != undefined ? (document.getElementById("checkbox29").checked ? " - Used" : "") : "")),
        report_list30 : (boxNames[30] == undefined ? "" : boxNames[30]  + " (" + ($("#ctrl30").val() == undefined ? "" : $("#ctrl30").val()) + ") " + (document.getElementById("checkbox30") != undefined ? (document.getElementById("checkbox30").checked ? " - Used" : "") : "")),
        report_list31 : (boxNames[31] == undefined ? "" : boxNames[31]  + " (" + ($("#ctrl31").val() == undefined ? "" : $("#ctrl31").val()) + ") " + (document.getElementById("checkbox31") != undefined ? (document.getElementById("checkbox31").checked ? " - Used" : "") : "")),
        report_list32 : (boxNames[32] == undefined ? "" : boxNames[32]  + " (" + ($("#ctrl32").val() == undefined ? "" : $("#ctrl32").val()) + ") " + (document.getElementById("checkbox32") != undefined ? (document.getElementById("checkbox32").checked ? " - Used" : "") : "")),
        report_list33 : (boxNames[33] == undefined ? "" : boxNames[33]  + " (" + ($("#ctrl33").val() == undefined ? "" : $("#ctrl33").val()) + ") " + (document.getElementById("checkbox33") != undefined ? (document.getElementById("checkbox33").checked ? " - Used" : "") : "")),
        report_list34 : (boxNames[34] == undefined ? "" : boxNames[34]  + " (" + ($("#ctrl34").val() == undefined ? "" : $("#ctrl34").val()) + ") " + (document.getElementById("checkbox34") != undefined ? (document.getElementById("checkbox34").checked ? " - Used" : "") : "")),
        report_list35 : (boxNames[35] == undefined ? "" : boxNames[35]  + " (" + ($("#ctrl35").val() == undefined ? "" : $("#ctrl35").val()) + ") " + (document.getElementById("checkbox35") != undefined ? (document.getElementById("checkbox35").checked ? " - Used" : "") : "")),
        report_list36 : (boxNames[36] == undefined ? "" : boxNames[36]  + " (" + ($("#ctrl36").val() == undefined ? "" : $("#ctrl36").val()) + ") " + (document.getElementById("checkbox36") != undefined ? (document.getElementById("checkbox36").checked ? " - Used" : "") : "")),
        report_list37 : (boxNames[37] == undefined ? "" : boxNames[37]  + " (" + ($("#ctrl37").val() == undefined ? "" : $("#ctrl37").val()) + ") " + (document.getElementById("checkbox37") != undefined ? (document.getElementById("checkbox37").checked ? " - Used" : "") : "")),
        report_list38 : (boxNames[38] == undefined ? "" : boxNames[38]  + " (" + ($("#ctrl38").val() == undefined ? "" : $("#ctrl38").val()) + ") " + (document.getElementById("checkbox38") != undefined ? (document.getElementById("checkbox38").checked ? " - Used" : "") : "")),
        report_list39 : (boxNames[39] == undefined ? "" : boxNames[39]  + " (" + ($("#ctrl39").val() == undefined ? "" : $("#ctrl39").val()) + ") " + (document.getElementById("checkbox39") != undefined ? (document.getElementById("checkbox39").checked ? " - Used" : "") : "")),
        report_list40 : (boxNames[40] == undefined ? "" : boxNames[40]  + " (" + ($("#ctrl40").val() == undefined ? "" : $("#ctrl40").val()) + ") " + (document.getElementById("checkbox40") != undefined ? (document.getElementById("checkbox40").checked ? " - Used" : "") : "")),
        report_list41 : (boxNames[41] == undefined ? "" : boxNames[41]  + " (" + ($("#ctrl41").val() == undefined ? "" : $("#ctrl41").val()) + ") " + (document.getElementById("checkbox41") != undefined ? (document.getElementById("checkbox41").checked ? " - Used" : "") : "")),
        report_list42 : (boxNames[42] == undefined ? "" : boxNames[42]  + " (" + ($("#ctrl42").val() == undefined ? "" : $("#ctrl42").val()) + ") " + (document.getElementById("checkbox42") != undefined ? (document.getElementById("checkbox42").checked ? " - Used" : "") : "")),

        extra_list: extraText
    })
    
    setTimeout(() => {
        location.reload()
    }, 3000);
}