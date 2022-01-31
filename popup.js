alert('selamat datang')
var coba = true;
while (coba == true) {
    var nama = prompt ('masukkan nama')
        alamat = prompt ('masukkan alamat')
        umur = prompt ('masukkan umur')

        alert('halo ${nama}\nalamat ${alamat}\numur ${umur}');
        coba = confirm ('coba lagi');
}
alert('terima kasih');