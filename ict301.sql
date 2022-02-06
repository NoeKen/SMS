-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : Dim 06 fév. 2022 à 04:03
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
  `token` varchar(300) NOT NULL,
  PRIMARY KEY (`id_admin`) USING BTREE,
  UNIQUE KEY `id_admin` (`id_admin`) USING BTREE,
  UNIQUE KEY `token` (`token`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `adminstratif`
--

INSERT INTO `adminstratif` (`id_admin`, `tel`, `name`, `password`, `email`, `token`) VALUES
(32, 697606274, 'Noe', '123456789', 'kenafalnoe@gmail.com', 'ad65abf616cfdbe559effe7c5ed792d9'),
(33, 695750783, 'Kenfack', '123456789', 'kenfack@gmail.com', '18e215342183143b73c3ecc17b9d2035'),
(34, 987456321, 'Alexandre', '123456789', 'alex@gmail.com', '5dddb5c6a8a780ecca8f74947a8042aa');

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
  `id_etablissement` varchar(11) DEFAULT '0',
  `nom` varchar(10) NOT NULL,
  `niveau` varchar(20) NOT NULL,
  `examen` tinyint(1) NOT NULL DEFAULT '0',
  `id_pension` int(10) DEFAULT NULL,
  PRIMARY KEY (`class_id`),
  KEY `id_pension` (`id_pension`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `classe`
--

INSERT INTO `classe` (`class_id`, `id_etablissement`, `nom`, `niveau`, `examen`, `id_pension`) VALUES
(27, '0', 'Ict L3', 'premier cycle', 1, 88);

-- --------------------------------------------------------

--
-- Structure de la table `eleve`
--

DROP TABLE IF EXISTS `eleve`;
CREATE TABLE IF NOT EXISTS `eleve` (
  `Nom` varchar(20) NOT NULL,
  `Matricule` varchar(20) NOT NULL,
  `class_id` int(11) NOT NULL,
  `id_pension` int(10) NOT NULL,
  PRIMARY KEY (`Matricule`),
  KEY `eleve_id_class_fr` (`class_id`),
  KEY `eleve_id_pension_fr` (`id_pension`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `eleve`
--

INSERT INTO `eleve` (`Nom`, `Matricule`, `class_id`, `id_pension`) VALUES
('Nadine Bilo\'o', '15D6478', 27, 97),
('THoms Anderson', '15L5478', 27, 96),
('Noe', '19M2791', 27, 91),
('Elizabet Florian', '45F4785', 27, 95);

-- --------------------------------------------------------

--
-- Structure de la table `enseignant`
--

DROP TABLE IF EXISTS `enseignant`;
CREATE TABLE IF NOT EXISTS `enseignant` (
  `tel` bigint(20) NOT NULL,
  `nom` varchar(20) NOT NULL,
  `id_matiere` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`nom`),
  KEY `enseignant_id_intitule_fr` (`id_matiere`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `enseignant`
--

INSERT INTO `enseignant` (`tel`, `nom`, `id_matiere`) VALUES
(654782514, 'Nguelefack', 'Math'),
(656862809, 'Thomas', 'ECM');

-- --------------------------------------------------------

--
-- Structure de la table `etablissement`
--

DROP TABLE IF EXISTS `etablissement`;
CREATE TABLE IF NOT EXISTS `etablissement` (
  `nom` varchar(70) NOT NULL,
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
  `coef` int(11) DEFAULT '1',
  PRIMARY KEY (`intitule`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `matiere`
--

INSERT INTO `matiere` (`intitule`, `coef`) VALUES
('ECM', 1),
('Eng', 2),
('EPS', 1),
('Geo', 2),
('Hist', 2),
('Math', 4);

-- --------------------------------------------------------

--
-- Structure de la table `notes`
--

DROP TABLE IF EXISTS `notes`;
CREATE TABLE IF NOT EXISTS `notes` (
  `id_note` int(10) NOT NULL AUTO_INCREMENT,
  `id_matiere` varchar(15) NOT NULL,
  `id_eleve` varchar(30) NOT NULL,
  `seq 1` float DEFAULT NULL,
  `seq 2` float DEFAULT NULL,
  `seq 3` float DEFAULT NULL,
  `seq 4` float DEFAULT NULL,
  `seq 5` float DEFAULT NULL,
  PRIMARY KEY (`id_note`),
  KEY `note_intitule_id_fr` (`id_matiere`),
  KEY `id_eleve` (`id_eleve`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `pension`
--

DROP TABLE IF EXISTS `pension`;
CREATE TABLE IF NOT EXISTS `pension` (
  `id_pension` int(10) NOT NULL AUTO_INCREMENT,
  `Inscription` double DEFAULT '0',
  `scolarite` double DEFAULT '0',
  PRIMARY KEY (`id_pension`)
) ENGINE=InnoDB AUTO_INCREMENT=98 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `pension`
--

INSERT INTO `pension` (`id_pension`, `Inscription`, `scolarite`) VALUES
(40, 0, 0),
(41, 0, 0),
(42, 0, 0),
(43, 0, 0),
(44, 0, 0),
(45, 0, 0),
(46, 0, 0),
(47, 0, 0),
(48, 0, 0),
(49, 0, 0),
(50, 0, 0),
(51, 0, 0),
(52, 0, 0),
(53, 0, 0),
(54, 0, 0),
(55, 0, 0),
(56, 0, 0),
(57, 0, 0),
(58, 0, 0),
(59, 0, 0),
(60, 0, 0),
(61, 0, 0),
(62, 0, 0),
(63, 0, 0),
(64, 0, 0),
(65, 0, 0),
(66, 0, 0),
(67, 0, 0),
(68, 0, 0),
(69, 0, 0),
(70, 0, 0),
(71, 0, 0),
(72, 0, 0),
(73, 0, 0),
(74, 0, 0),
(75, 0, 0),
(76, 0, 0),
(77, 0, 0),
(78, 0, 0),
(79, 0, 0),
(80, 0, 0),
(81, 0, 0),
(82, 0, 0),
(83, 0, 0),
(84, 0, 0),
(85, 0, 0),
(86, 0, 0),
(87, 0, 0),
(88, 0, 0),
(89, 0, 0),
(90, 0, 0),
(91, 0, 0),
(92, 0, 0),
(93, 0, 0),
(94, 0, 0),
(95, 0, 0),
(96, 0, 0),
(97, 0, 0);

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
  ADD CONSTRAINT `id_pension` FOREIGN KEY (`id_pension`) REFERENCES `pension` (`id_pension`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `eleve`
--
ALTER TABLE `eleve`
  ADD CONSTRAINT `eleve_id_class` FOREIGN KEY (`class_id`) REFERENCES `classe` (`class_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `eleve_id_pension` FOREIGN KEY (`id_pension`) REFERENCES `pension` (`id_pension`) ON DELETE CASCADE ON UPDATE CASCADE;

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
-- Contraintes pour la table `notes`
--
ALTER TABLE `notes`
  ADD CONSTRAINT `id_eleve` FOREIGN KEY (`id_eleve`) REFERENCES `eleve` (`Matricule`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `note_intitule_id_fr` FOREIGN KEY (`id_matiere`) REFERENCES `matiere` (`intitule`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
