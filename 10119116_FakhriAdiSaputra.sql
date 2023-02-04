-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.30 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for db_sertifikasi_2
CREATE DATABASE IF NOT EXISTS `db_sertifikasi_2` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `db_sertifikasi_2`;

-- Dumping structure for table db_sertifikasi_2.adonis_schema
CREATE TABLE IF NOT EXISTS `adonis_schema` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `batch` int NOT NULL,
  `migration_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table db_sertifikasi_2.adonis_schema: ~3 rows (approximately)
INSERT INTO `adonis_schema` (`id`, `name`, `batch`, `migration_time`) VALUES
	(1, 'database/migrations/1675395183433_bukus', 1, '2023-02-03 17:36:20'),
	(2, 'database/migrations/1675395193434_penerbits', 1, '2023-02-03 17:36:20'),
	(3, 'database/migrations/1675395212562_alter_table_bukus', 1, '2023-02-03 17:36:20');

-- Dumping structure for table db_sertifikasi_2.adonis_schema_versions
CREATE TABLE IF NOT EXISTS `adonis_schema_versions` (
  `version` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table db_sertifikasi_2.adonis_schema_versions: ~0 rows (approximately)
INSERT INTO `adonis_schema_versions` (`version`) VALUES
	(2);

-- Dumping structure for table db_sertifikasi_2.buku
CREATE TABLE IF NOT EXISTS `buku` (
  `id` int NOT NULL AUTO_INCREMENT,
  `kode_buku` varchar(50) DEFAULT NULL,
  `kategori` varchar(255) DEFAULT NULL,
  `nama_buku` varchar(255) DEFAULT NULL,
  `harga` int DEFAULT NULL,
  `stok` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `penerbit_id` int unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `buku_penerbit_id_foreign` (`penerbit_id`),
  CONSTRAINT `buku_penerbit_id_foreign` FOREIGN KEY (`penerbit_id`) REFERENCES `penerbit` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table db_sertifikasi_2.buku: ~8 rows (approximately)
INSERT INTO `buku` (`id`, `kode_buku`, `kategori`, `nama_buku`, `harga`, `stok`, `created_at`, `updated_at`, `penerbit_id`) VALUES
	(1, 'K1001', 'Keilmuan', 'Analisis & Perancangan Sistem Informasi', 50000, 60, '2023-02-03 17:37:47', '2023-02-04 01:49:24', 1),
	(2, 'K1002', 'Keilmuan', 'Artificial Intelligence', 45000, 60, '2023-02-03 17:38:13', '2023-02-04 01:50:01', 1),
	(3, 'K2003', 'Keilmuan', 'Autocad 3 Dimensi', 40000, 25, '2023-02-03 17:38:40', '2023-02-04 01:50:21', 1),
	(4, 'K3004', 'Keilmuan', 'Cloud Computing Technology', 85000, 15, '2023-02-03 17:39:39', '2023-02-04 01:50:53', 1),
	(5, 'B1002', 'Bisnis', 'Etika Bisnis dan Tanggung Jawab', 67500, 20, '2023-02-03 17:40:09', '2023-02-04 01:51:12', 1),
	(6, 'B1001', 'Bisnis', 'Bisnis Online', 75000, 9, '2023-02-03 17:39:12', '2023-02-04 01:50:37', 1),
	(7, 'N1001', 'Novel', 'Cahaya Di Penjuru Hati', 68000, 10, '2023-02-03 17:40:43', '2023-02-04 01:51:28', 2),
	(8, 'N1002', 'Novel', 'Aku Ingin Ceria', 48000, 12, '2023-02-03 17:41:09', '2023-02-04 01:51:39', 3);

-- Dumping structure for table db_sertifikasi_2.penerbit
CREATE TABLE IF NOT EXISTS `penerbit` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) DEFAULT NULL,
  `alamat` text,
  `kota` varchar(255) DEFAULT NULL,
  `telepon` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table db_sertifikasi_2.penerbit: ~3 rows (approximately)
INSERT INTO `penerbit` (`id`, `nama`, `alamat`, `kota`, `telepon`, `created_at`, `updated_at`) VALUES
	(1, 'Penerbit Informatika', 'Jalan Buah Batu No. 121', 'Bandung', '081322201946', '2023-02-03 10:25:09', '2023-02-03 10:25:09'),
	(2, 'Andi Offset', 'Jl. Suryalaya IX No. 3', 'Bandung', '087839030688', '2023-02-03 10:26:05', '2023-02-03 10:26:05'),
	(3, 'Danendra', 'Jl. Moch Toha 44', 'Bandung', '0225201215', '2023-02-03 10:26:50', '2023-02-03 10:26:50');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
