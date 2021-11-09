var boxNames = []

$( document ).ready(function() {
    $("#list-group").hide();
});

const TruckOnClick = () => {
    $(".home-page").hide();
    $(".third-page").hide();
    $(".second-page").fadeIn(200);
}

const TrailerOnClick = () => {
    $(".home-page").hide();
    $(".third-page").hide();
    $(".second-page").fadeIn(200);
}

const BackOnClick = () => {
    $(".second-page").hide();
    $(".third-page").hide();
    $(".home-page").fadeIn(200);
}

const NextOnClick = () => {
    $(".second-page").hide();
    $(".home-page").hide();
    $(".third-page").fadeIn(200);
}

const ListGroupItemOnClick = (name) => {
    $("#list-group").hide();
    $(".dropdown-buttons").fadeIn(200);
    boxNames.push(name)
    ReRenderBoxes()
}

const DeleteBoxOnClick = (name) => {
    $("#list-group").hide();
    $(".dropdown-buttons").fadeIn(200);
    // let newBoxNames = []
    // let infFlag = false
    // boxNames.forEach((item)=>{
    //     if (item != name || infFlag) {
    //         newBoxNames += item
    //     }else{
    //         infFlag = true
    //     }
    // })
    // boxNames = newBoxNames.values
    boxNames = boxNames.filter(item => item != name)
    ReRenderBoxes()
}

const ReRenderBoxes = () => {
    var str = ""
    boxNames.forEach((nameStr)=>{
        str += 
        `
            <div class="trailer-report-box">
              <h6 style="float: left;">
                
              ` + nameStr + `
              </h6>
              <input type="text" class="form-control" id="exampleInputEmail1">

              <div class="form-check" id="exampleCheckID4">
                <input type="checkbox" class="form-check-input checkbox" id="exampleCheck4">
                <label class="form-check-label" for="exampleCheck4">Used</label>
              </div>
              
              <button type="button" style="float: right; margin-top: 10px;" class="btn btn-outline-danger" onclick="DeleteBoxOnClick('` + nameStr + `')">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
                Button
              </button>
              
            </div>
        `
    })
    document.getElementById("right-sidebar").innerHTML = str
    $("#right-sidebar").fadeIn(200);
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
                <li class="list-group-item" onclick="ListGroupItemOnClick()">REPLACED BATTERY#<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">REPLACED STARTER#<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">REPLACED ALTERNATOR#<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">alternator braket#<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">REPLACED  BELTS<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">REPLACED BELT TENSIONER#<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">replace sensors#<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">OIL CHANGE<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">change coolant fluid #<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">REPLACED SEAL<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">ENGINE MOUNT REPLACEMENT #<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">REPLACED WATER PUMP #<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">REPLACED MANIFOLD #<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">REPLACE CILINDER HEAD #<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">REPAIR CILINDER HEAD<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">VALVE ADJUSTMENT<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">REPLACE ENGINE #<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">REPLACE COMPRESSOR #<span style="float: right;">→</span></li>
            `
            break;
        case "Trailer SUSPENSION":
            document.getElementById("list-group").innerHTML = 
            `
                <li class="list-group-item" onclick="ListGroupItemOnClick()">REPLACED TIRE #<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">REPAIR TIRE<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">REPLACE RIM #<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">REPLACE BERINGS #<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">REPLACED HUB #<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">REPLACED WHEEL SEAL #<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">REPLACED HUB SEAL #<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">REPLACED TANDEM #<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">REPLACE TANDEM BUSHING<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">REPLACE AXLE #<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">REPLACED SHOCK #<span style="float: right;">→</span></li>
            `
            break;
        case "Trailer Repair":
            document.getElementById("list-group").innerHTML = 
            `
                <li class="list-group-item" onclick="ListGroupItemOnClick()">REPLACE LENDING GEAR #<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">REPAIRED MUD FLAP<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">REPLACE DOT STIKER<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">REPLACE DOT BAR #<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">REPLACE DOOR #<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">REPAIRE DEMAGE<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">REPLACE AIR SHUTE #<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">INSTALL E-TRAKS #<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">REPLACE CROSS MEMBERS #<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">REPLACE PLASTIC ENGINE<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">REPLACE MUD FLAP BRAKET #<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">INSTALL SPARE SUPORT<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">REPLACE LOCKS #<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">REPLACE DOCK BUMPERS #<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">REPLACE HANDLE LENDING GEAR #<span style="float: right;">→</span></li>
            `
            break;                                           
        default:
            break;
    }

    $(".dropdown-buttons").hide();
    $("#list-group").fadeIn(200);
}