-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : lun. 17 jan. 2022 à 09:15
-- Version du serveur :  5.7.31
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `ict301`
--

-- --------------------------------------------------------

--
-- Structure de la table `adminstratif`
--

DROP TABLE IF EXISTS `adminstratif`;
CREATE TABLE IF NOT EXISTS `adminstratif` (
  `id_admin` int(20) NOT NULL AUTO_INCREMENT,
  `tel` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(50) NOT NULL,
  `email` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id_admin`) USING BTREE,
  UNIQUE KEY `id_admin` (`id_admin`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `adminstratif`
--

INSERT INTO `adminstratif` (`id_admin`, `tel`, `name`, `password`, `email`) VALUES
(28, 697606274, 'Noe', '123456789', 'kenfaclnoe@gmail.com');

-- --------------------------------------------------------

--
-- Structure de la table `bulletin`
--

DROP TABLE IF EXISTS `bulletin`;
CREATE TABLE IF NOT EXISTS `bulletin` (
  `id_bulletin` varchar(100) NOT NULL,
  PRIMARY KEY (`id_bulletin`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `classe`
--

DROP TABLE IF EXISTS `classe`;
CREATE TABLE IF NOT EXISTS `classe` (
  `class_id` int(11) NOT NULL AUTO_INCREMENT,
  `id_pension` varchar(10) NOT NULL,
  `id_etablissement` varchar(11) NOT NULL,
  `nom` varchar(10) NOT NULL,
  `niveau` varchar(10) NOT NULL,
  PRIMARY KEY (`class_id`),
  KEY `classe_id_pension_fr` (`id_pension`),
  KEY `classe_id_etablissement_fr` (`id_etablissement`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `eleve`
--

DROP TABLE IF EXISTS `eleve`;
CREATE TABLE IF NOT EXISTS `eleve` (
  `Nom` varchar(20) NOT NULL,
  `Matricule` varchar(20) NOT NULL,
  `class_id` int(11) NOT NULL,
  `id_pension` varchar(10) NOT NULL,
  PRIMARY KEY (`Matricule`),
  KEY `eleve_id_class_fr` (`class_id`),
  KEY `eleve_id_pension_fr` (`id_pension`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `enseignant`
--

DROP TABLE IF EXISTS `enseignant`;
CREATE TABLE IF NOT EXISTS `enseignant` (
  `tel` bigint(20) NOT NULL,
  `nom` varchar(20) NOT NULL,
  `id_matiere` varchar(15) NOT NULL,
  PRIMARY KEY (`nom`),
  KEY `enseignant_id_intitule_fr` (`id_matiere`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `etablissement`
--

DROP TABLE IF EXISTS `etablissement`;
CREATE TABLE IF NOT EXISTS `etablissement` (
  `nom` varchar(11) NOT NULL,
  `numeroEts` int(11) NOT NULL,
  `ville` varchar(11) NOT NULL,
  `admin_id` int(11) NOT NULL,
  PRIMARY KEY (`nom`),
  KEY `admin_id_fk` (`admin_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `matiere`
--

DROP TABLE IF EXISTS `matiere`;
CREATE TABLE IF NOT EXISTS `matiere` (
  `intitule` varchar(15) NOT NULL,
  `class_id` int(11) NOT NULL,
  `id_bulletin` varchar(100) NOT NULL,
  `coef` int(11) NOT NULL,
  PRIMARY KEY (`intitule`),
  KEY `matiere_id_classe_fr` (`class_id`),
  KEY `matiere_id_bulletin_fr` (`id_bulletin`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `notes`
--

DROP TABLE IF EXISTS `notes`;
CREATE TABLE IF NOT EXISTS `notes` (
  `id_note` varchar(11) NOT NULL,
  `id_matiere` varchar(15) NOT NULL,
  `value` int(11) NOT NULL,
  PRIMARY KEY (`id_note`),
  KEY `note_intitule_id_fr` (`id_matiere`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `pension`
--

DROP TABLE IF EXISTS `pension`;
CREATE TABLE IF NOT EXISTS `pension` (
  `id_pension` varchar(10) NOT NULL,
  `Inscription` double NOT NULL,
  `scolarite` double NOT NULL,
  PRIMARY KEY (`id_pension`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `sequence`
--

DROP TABLE IF EXISTS `sequence`;
CREATE TABLE IF NOT EXISTS `sequence` (
  `seq_id` int(11) NOT NULL,
  `id_note` varchar(11) NOT NULL,
  KEY `sequence_id_note` (`id_note`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `classe`
--
ALTER TABLE `classe`
  ADD CONSTRAINT `classe_id_etablissement_fr` FOREIGN KEY (`id_etablissement`) REFERENCES `etablissement` (`nom`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `eleve`
--
ALTER TABLE `eleve`
  ADD CONSTRAINT `eleve_id_pension_fr` FOREIGN KEY (`id_pension`) REFERENCES `pension` (`id_pension`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `enseignant`
--
ALTER TABLE `enseignant`
  ADD CONSTRAINT `enseignant_id_intitule_fr` FOREIGN KEY (`id_matiere`) REFERENCES `matiere` (`intitule`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `etablissement`
--
ALTER TABLE `etablissement`
  ADD CONSTRAINT `admin_id_fk` FOREIGN KEY (`admin_id`) REFERENCES `adminstratif` (`id_admin`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `matiere`
--
ALTER TABLE `matiere`
  ADD CONSTRAINT `matiere_id_bulletin_fr` FOREIGN KEY (`id_bulletin`) REFERENCES `bulletin` (`id_bulletin`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `notes`
--
ALTER TABLE `notes`
  ADD CONSTRAINT `note_intitule_id_fr` FOREIGN KEY (`id_matiere`) REFERENCES `matiere` (`intitule`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `sequence`
--
ALTER TABLE `sequence`
  ADD CONSTRAINT `sequence_id_note` FOREIGN KEY (`id_note`) REFERENCES `notes` (`id_note`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
