# Task API

## Deskripsi Aplikasi

Task API adalah aplikasi sederhana berbentuk REST API yang digunakan untuk mengelola task (to-do list).

Aplikasi ini bisa digunakan untuk:

* Menambahkan task
* Melihat daftar task

Aplikasi juga memiliki validasi, jadi tidak bisa menambahkan task tanpa judul.

## Cara Menjalankan Aplikasi

1. Install dulu semua dependency:

```
npm install
```

2. Jalankan aplikasi:

```
node src/app.js
```

## Cara Menjalankan Test

Untuk menjalankan semua test:

```
npm test
```

Untuk melihat hasil coverage:

```
npm test -- --coverage
```

## Strategi Pengujian

### Unit Testing

Digunakan untuk menguji logika di dalam service.

Contoh:

* Menambahkan task
* Validasi input
* Pengecekan ID

Total unit test: lebih dari 15

### Integration Testing

Digunakan untuk menguji API secara langsung.

Contoh:

* POST /tasks
* GET /tasks

Total integration test: 5

### Test Coverage

Project ini memiliki test coverage sebesar 100%, yang artinya semua bagian kode sudah diuji.

## Continuous Integration

Project ini menggunakan GitHub Actions.

Setiap kali ada perubahan kode:

* test akan otomatis dijalankan
* hasilnya bisa langsung dilihat di GitHub



