document.getElementById('tampilkanBTN').onclick = function() {

    var nama = document.getElementById('nama').value;

    var gender = "";
    var g = document.getElementsByName('gender');
    for (var i = 0; i < g.length; i++) {
        if (g[i].checked) {
            gender = g[i].value;
        }
    }

    var umur = "";
    var u = document.getElementsByName('umur');
    for (var i = 0; i < u.length; i++) {
        if (u[i].checked) {
            umur = u[i].value;
        }
    }

    var tingkatan = "";
    var t = document.getElementsByName('tingkatan');
    for (var i = 0; i < t.length; i++) {
        if (t[i].checked) {
            tingkatan = t[i].value;
        }
    }

    var setuju;
    if (document.getElementById('setuju').checked) {
        setuju = "Ya";
    } else {
        setuju = "Tidak";
    }

    document.getElementById('hasil').innerText =
        "Nama: " + nama +
        "\nUmur: " + umur +
        "\nJenis Kelamin: " + gender +
        "\nTingkatan: " + tingkatan +
        "\nSetuju: " + setuju;
};