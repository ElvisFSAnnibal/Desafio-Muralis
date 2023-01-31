-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: sql10.freemysqlhosting.net    Database: sql10593821
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `despesas`
--

DROP TABLE IF EXISTS `despesas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `despesas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `valor` double NOT NULL,
  `data_compra` datetime NOT NULL,
  `descricao` text NOT NULL,
  `tipo_pagamento_id` int NOT NULL,
  `categoria_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `categoria_idx` (`categoria_id`),
  KEY `pagamento_idx` (`tipo_pagamento_id`),
  CONSTRAINT `categoria` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`),
  CONSTRAINT `pagamento` FOREIGN KEY (`tipo_pagamento_id`) REFERENCES `tipo_pagamento` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `despesas`
--

LOCK TABLES `despesas` WRITE;
/*!40000 ALTER TABLE `despesas` DISABLE KEYS */;
INSERT INTO `despesas` VALUES (1,200,'2023-01-01 10:34:09','Almoço ano novo',1,1),(2,20,'2022-12-01 10:34:09','Abastecimento',4,4),(3,20,'2022-01-01 10:34:09','Abastecimento',4,4);
/*!40000 ALTER TABLE `despesas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-27 17:11:21
