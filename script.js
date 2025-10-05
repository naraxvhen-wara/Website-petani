// script.js

// Fungsi untuk menampilkan/sembunyikan form tambah produk
function toggleForm() {
    const form = document.getElementById('form-produk');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

// Fungsi untuk menyimpan produk sementara (di memori browser)
function simpanProduk() {
    const nama = document.getElementById('nama-beras').value;
    const harga = document.getElementById('harga-beras').value;
    const fileInput = document.getElementById('foto-beras');

    if (!nama || !harga) {
        alert('Nama dan harga harus diisi!');
        return;
    }

    // Untuk sementara, kita simpan produk dalam array
    const produkBaru = {
        nama: nama,
        harga: 'Rp ' + Number(harga).toLocaleString('id-ID') + ' /kg',
        gambar: fileInput.files[0] ? URL.createObjectURL(fileInput.files[0]) : 'placeholder.jpg' // Gambar sementara
    };

    // Panggil fungsi untuk menampilkan produk
    tampilkanProduk(produkBaru);

    // Reset form dan sembunyikan
    document.getElementById('form-produk').reset();
    toggleForm();
    alert('Produk berhasil disimpan! (Sementara di browser)');
}

// Fungsi untuk menampilkan produk di halaman
function tampilkanProduk(produk) {
    const daftarProduk = document.getElementById('daftar-produk');

    const divProduk = document.createElement('div');
    divProduk.className = 'produk-item';

    divProduk.innerHTML = `
        <img src="${produk.gambar}" alt="${produk.nama}" style="width:100%; max-height:150px; object-fit:cover; border-radius:5px;">
        <h3>${produk.nama}</h3>
        <p><strong>${produk.harga}</strong></p>
        <button>Beli Sekarang</button>
    `;

    daftarProduk.appendChild(divProduk);
}