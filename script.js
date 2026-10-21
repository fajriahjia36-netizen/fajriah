const formLogin = document.getElementById("formLogin");

if (formLogin) {
  formLogin.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("emailLogin").value.trim();
    const password = document.getElementById("passwordLogin").value.trim();
    const pesanLogin = document.getElementById("pesanLogin");
    const teksPesan = document.getElementById("teksPesan");

    let pesan = "";

    if (email === "" || password === "") {
      pesan = "Email dan password harus diisi!";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      pesan = "Format email belum benar!";
    } else {
      pesan = "Validasi berhasil! Email dan password sudah diisi.";
    }

    teksPesan.textContent = pesan;
    pesanLogin.style.setProperty("display", "flex", "important");
  });
}

const wisata = {
    dato: {
        nama: "Pantai Dato",
        foto: "img/dato.jpg"
    },
    barane: {
        nama: "Pantai Barane",
        foto: "img/pantai_barane.jpg"
    },
    museum: {
        nama: "Museum Mandar",
        foto: "img/museum_mandar.jpg"
    }
};

const pilihan = new URLSearchParams(location.search).get("wisata") || "dato";
const data = wisata[pilihan];
const isi = document.getElementById("isi-detail");

if (data && isi) {
    isi.innerHTML = `
        <div class="card">
            <img src="${data.foto}" class="card-img-top" alt="${data.nama}">
            <div class="card-body">
                <h2>${data.nama}</h2>
                <a href="wisata.html" class="btn btn-success">Kembali</a>
            </div>
        </div>
    `;
}