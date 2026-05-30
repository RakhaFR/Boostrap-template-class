# Bootstrap 5.3 Template Collection

Selamat datang di repositori **Bootstrap 5.3 Template Collection**! Repositori ini berisi kumpulan komponen dan halaman template Bootstrap 5.3 yang lengkap, siap pakai, dan bisa dijalankan secara 100% offline. Semua template juga sudah dilengkapi dengan fitur **Copy Code** untuk mempermudah Anda menyalin elemen atau komponen ke proyek Anda.

---

## 🚀 Panduan Menggunakan Git & Mengunduh Template (Untuk Pemula)

Jika Anda baru pertama kali menggunakan Git melalui terminal (Command Prompt/PowerShell di Windows, atau Terminal di MacOS/Linux), ikuti panduan langkah demi langkah di bawah ini.

### Langkah 1: Instalasi Git
Sebelum bisa melakukan _clone_ (mengunduh) repositori ini, Anda harus menginstal program Git terlebih dahulu di komputer Anda.

1. Kunjungi situs web resmi Git: [https://git-scm.com/downloads](https://git-scm.com/downloads)
2. Unduh aplikasi (*installer*) sesuai dengan sistem operasi yang Anda gunakan.
3. Buka file yang sudah diunduh, lalu lakukan instalasi (cukup klik *Next* terus hingga selesai dengan pengaturan *default* bawaannya).
4. Untuk memastikan Git sudah terinstal, buka **Terminal** atau **Command Prompt**, lalu ketik perintah berikut kemudian tekan Enter:
   ```bash
   git --version
   ```
   *Jika layar memunculkan tulisan versi Git (misalnya `git version 2.40.1`), berarti instalasi telah berhasil!*

### Langkah 2: Cara *Clone* (Mengunduh) Repositori

Setelah Git siap digunakan, Anda bisa mengunduh seluruh file template ini langsung ke komputer Anda.

1. Buka kembali **Terminal**, **Command Prompt**, atau **PowerShell**.
2. Arahkan *directory* (folder aktif) terminal ke lokasi di mana Anda ingin menyimpan folder template ini. Misalnya, jika Anda ingin menyimpannya di folder `Documents`, ketik perintah ini:
   ```bash
   cd Documents
   ```
3. Jalankan perintah `git clone` berikut ini lalu tekan Enter:
   ```bash
   git clone https://github.com/RakhaFR/Boostrap-template-class.git
   ```
4. Git akan mengunduh semua file secara otomatis. Setelah proses selesai (mencapai 100%), masuk ke dalam folder yang baru saja terunduh dengan mengetik:
   ```bash
   cd Boostrap-template-class
   ```

### Langkah 3: Cara Menggunakan Template

Template ini berjalan menggunakan standar HTML murni dan bisa berjalan 100% secara **Offline**. Anda tidak perlu menginstal server, NPM, atau alat bantu tambahan lainnya!

1. Buka *File Explorer* (Windows) atau *Finder* (Mac), dan cari folder `Boostrap-template-class` yang baru saja Anda download.
2. Di dalam folder tersebut, cari file bernama `index.html`.
3. Klik dua kali pada `index.html` untuk membukanya secara langsung menggunakan browser web (seperti Google Chrome, Microsoft Edge, atau Firefox).
4. Anda akan disajikan dengan halaman daftar komponen (01 sampai 20).
5. Pilih komponen yang Anda butuhkan (contoh: *Cards* atau *Navbar*). 
6. Setiap section komponen memiliki tombol **Copy** di pojok kanan atas. Klik tombol tersebut untuk menyalin kode HTML-nya, dan *paste* kode tersebut langsung ke dalam teks editor atau proyek web Anda!

---

## 🔄 Perintah Tambahan Git (Jika Ada Update Template)

Bila di kemudian hari ada fitur baru atau *update* dari template ini, Anda tidak perlu menghapus file lama dan men-download ulang semuanya dari awal. Cukup tarik update terbarunya saja menggunakan terminal:

1. Buka terminal dan arahkan kembali ke dalam folder template:
   ```bash
   cd Documents/Boostrap-template-class
   ```
2. Tarik (*pull*) *update* terbaru dengan perintah:
   ```bash
   git pull origin main
   ```

Selamat bereksplorasi dan berkreasi! 🚀
