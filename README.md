![CI](https://github.com/aellyy/task-api/actions/workflows/ci.yml/badge.svg)
![Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen)

# Task API

## Deskripsi Aplikasi

Task API adalah aplikasi sederhana berbentuk REST API yang digunakan untuk mengelola task (to-do list).

Aplikasi ini dapat digunakan untuk:

* Menambahkan task
* Melihat daftar task

Aplikasi juga memiliki validasi input, sehingga tidak dapat menambahkan task tanpa judul (title tidak boleh kosong).

---

## Cara Menjalankan Aplikasi

1. Install semua dependency:

```
npm install
```

2. Jalankan aplikasi:

```
node src/app.js
```

---

## Cara Menjalankan Test

Untuk menjalankan semua test:

```
npm test
```

Untuk melihat hasil test coverage:

```
npm test -- --coverage
```

---

## Strategi Pengujian

### Unit Testing

Digunakan untuk menguji logika di dalam service.

Contoh:

* Menambahkan task
* Validasi input
* Pengecekan ID

Total unit test: lebih dari 15 test case.

---

### Integration Testing

Digunakan untuk menguji API secara langsung.

Contoh:

* POST /tasks
* GET /tasks

Total integration test: 5 test case.

---

### Test Coverage

Project ini memiliki test coverage sebesar 100%, yang menunjukkan bahwa seluruh bagian kode telah diuji.

---

## Continuous Integration

Project ini menggunakan GitHub Actions.

Setiap kali terdapat perubahan kode (push atau pull request):

* Test akan dijalankan secara otomatis
* Hasil pengujian dapat langsung dilihat di GitHub

