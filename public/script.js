
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

const ListGroupItemOnClick = () => {
    $("#list-group").hide();
    $(".dropdown-buttons").fadeIn(200);
}

const DropdownButtonOnClick = (name) => {
    switch (name) {
        case "Trailer Electronics":
            document.getElementById("list-group").innerHTML = 
            `
                <li class="list-group-item" onclick="ListGroupItemOnClick()">REPAIRED  LIGHT<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">REPLACED CABLE<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">Repair Cable<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">REPLACED ABS TRAILER MODULE<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">Replaced ABS sensors<span style="float: right;">→</span></li>
            `
            break;
        case "Trailer Brake":
            document.getElementById("list-group").innerHTML = 
            `
            <ul>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">Replaced Brakes<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">Replaced Drams<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">REPLACED SLACK ADJUSTER<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">REPLACED scam<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">REPLACED BRAKE CHAMBER<span style="float: right;">→</span></li>
            </ul>
            `
            break;
        case "Air System of the Trailer":
            document.getElementById("list-group").innerHTML = 
            `
                <li class="list-group-item" onclick="ListGroupItemOnClick()">REPLACED AIR LINE<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">REPLACED AIR FITTING<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">REPLACED AIRBAG<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">REPLACED BRAKE VALVE<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">REPLACED PRESSURE PROTECTION VALVE<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">REPLACED AIR TANK<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">REPLACE LEVELING VALVE<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">REPLACED 3 WAY VALVE<span style="float: right;">→</span></li>
                <li class="list-group-item" onclick="ListGroupItemOnClick()">REPLACED PIN ACTUATOR<span style="float: right;">→</span></li>
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