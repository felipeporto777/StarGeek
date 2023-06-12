function SortearMes() {
    var mesSorteado = parseInt(Math.random() * 7) + 1


    switch (mesSorteado) {
        case 1:
            document.getElementById("resultado").innerHTML = ` <strong>Um filme bom para você, seria esse </strong><br><br><br><img src="img/guard.png">`
            break
        case 2:
            document.getElementById("resultado").innerHTML = ` <strong>Um filme bom para você, seria esse </strong><br><br><br><img src="img/vvv.png">`
            break
        case 3:
            document.getElementById("resultado").innerHTML = `<strong> Um filme bom para você, seria esse </strong><br><br><br><<img src="img/miles.png">`
            break
        case 4:
            document.getElementById("resultado").innerHTML = ` <strong>Um filme bom para você, seria esse </strong><br><br><br><img src="img/sereia.png">`
            break
        case 5:
            document.getElementById("resultado").innerHTML = ` <strong>Um filme bom para você, seria esse </strong><br><br><br><img src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQv9wGII4uZ6mm3UtYyeCLsR4bBbp5Nu2532up5buQiGMu_EQDG'>`
            break
        case 6:
            document.getElementById("resultado").innerHTML = `<strong> Um filme bom para você, seria esse</strong><br><br><br><img src="img/ioce.png">` 
            break
        default :
            document.getElementById("resultado").innerHTML = ` <strong>Um filme bom para você, seria esse </strong><br><br><br><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIzwi7F63aRojzYR9TegAaFdpSUyYCBu2xVWDfNsp5_sQX_PgT'>`
    }

}