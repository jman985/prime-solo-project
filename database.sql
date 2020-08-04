
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);


CREATE TABLE "cpu" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL,
    "brand" VARCHAR (50) NOT NULL,
    "image" VARCHAR(2083),
    "cores" INTEGER NOT NULL,
    "max_speed" DECIMAL,
    "unlocked" VARCHAR (50) NOT NULL
);

INSERT INTO "cpu" ("name", "brand", "image", "cores", "max_speed", "unlocked")
VALUES 
('Core i5-9400','Intel','images/i5-9400', 6 , 4.1 , 'No' ),
('Core i5-9600K','Intel','images/i5-9600K', 6 , 4.6 , 'Yes' ),
('Core i7-9700','Intel','images/i5-9700', 8 , 4.7 , 'No' ),
('Core i7-9700K','Intel','images/i5-9700K', 8 , 4.9 , 'Yes' );

CREATE TABLE "cooler" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL,
    "brand" VARCHAR (50) NOT NULL,
    "image" VARCHAR(2083),
    "height" DECIMAL
);

INSERT INTO "cooler" ("name", "brand", "image", "height")
VALUES
(  'NH-L9i', 'Noctua', 'images/NH-L9i-cooler.jpg',37  ),
(  'NH-L12S', 'Noctua', 'images/NH-L12S-cooler.jpg',70  ),
(  'NH-U9S', 'Noctua', 'images/NH-U9S-cooler.jpg', 124 );



CREATE TABLE "motherboard" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL,
    "brand" VARCHAR (50) NOT NULL,
    "image" VARCHAR(2083),
    "form_factor" VARCHAR (50) NOT NULL
);

INSERT INTO "motherboard" ("name", "brand", "image", "form_factor")
VALUES 
(  'Z390M-ITX', 'ASRock', 'images/ASRock-Z390-mobo.jpg', 'Mini-ITX'),
(  'Z390 Phantom Gaming-ITX', 'ASRock', 'images/ASRock-Fatality-mobo.jpg', 'Mini-ITX'),
(  'ROG Strix Z390-I Gaming', 'ASUS', 'images/ASUS-Z390-mobo.jpg', 'Mini-ITX'),
(  'H370N WiFi', 'Gigabyte', 'images/Gigabyte-H370N-mobo.jpg', 'Mini-ITX');


CREATE TABLE "memory" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL,
    "brand" VARCHAR (50) NOT NULL,
    "image" VARCHAR(2083),
    "capacity" INTEGER NOT NULL,
    "speed" VARCHAR (50) NOT NULL
);

INSERT INTO "memory" ("name", "brand", "image", "capacity", "speed")
VALUES 
( 'Ripjaws V Series', 'G.Skill', 'images/G.Skill.V-memory.jpg', 16, 'DDR4-3200'  ),
( 'Ripjaws V Series', 'G.Skill', 'images/G.Skill.V32-memory.jpg', 32, 'DDR4-3600'  ),
( 'T-FORCE Vulcan Z ', 'TEAMGROUP', 'images/T-FORCE-VULCAN-memory.jpg', 16, 'DDR4-2666'  ),
( 'Vengeance LPX', 'CORSAIR', 'images/CORSAIR-LPX-memory.jpg', 32, 'DDR4-3600'  );


CREATE TABLE "gpu" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL,
    "brand" VARCHAR (50) NOT NULL,
    "image" VARCHAR(2083),
    "max_speed" DECIMAL,
    "memory" INTEGER NOT NULL,
    "length" DECIMAL
);

INSERT INTO "gpu" ("name", "brand", "image", "max_speed", "memory", "length")
VALUES 
( 'PULSE Radeon RX 580', 'Sapphire', 'images/Radeon-RX580.jpg', 1366, 8 , 230 ),
( 'Radeon RX 5700 Evoke OC', 'MSI', 'images/MSI-EvokeOC-5700.jpg', 1700, 8 , 254 ),
( 'PULSE Radeon RX 5600 XT', 'Sapphire', 'images/Pulse-5600xt.jpg', 1750, 6 , 254 ),
( 'Radeon RX 5700 XT Gaming OC', 'Gigabyte', 'images/Gigabyte-5700xt.jpg', 1905, 8 , 279.85 );


CREATE TABLE "storage" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL,
    "brand" VARCHAR (50) NOT NULL,
    "image" VARCHAR(2083),
    "capacity" INTEGER NOT NULL,
    "form_factor" VARCHAR (50) NOT NULL
);

INSERT INTO "storage" ("name", "brand", "image", "capacity", "form_factor")
VALUES 
( '970 Evo Plus', 'Samsung', 'images/970-Evo-Plus-500.jpg', 500, 'NVMe M.2' ),
( '970 Evo Plus', 'Samsung', 'images/970-Evo-Plus-1000.jpg', 1000, 'NVMe M.2' ),
( '970 Evo Plus', 'Samsung', 'images/970-Evo-Plus-2000.jpg', 2000, 'NVMe M.2' );


CREATE TABLE "case" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL,
    "brand" VARCHAR (50) NOT NULL,
    "image" VARCHAR(2083),
    "form_factor" VARCHAR (50) NOT NULL,
    "color" VARCHAR (50) NOT NULL,
    "material" VARCHAR (50) NOT NULL,
    "volume" DECIMAL
);

INSERT INTO "case" ("name", "brand", "image", "form_factor", "color", "material", "volume")
VALUES 
(  'MX500','MITXPC' , 'images/MITXPC-case.jpg', 'Mini-ITX' , 'black', 'steel', 2.7),
(  'Node 202','Fractal Design' , 'images/Node202.jpg', 'Mini-ITX' , 'black', 'steel, plastic', 10.2 ),
(  'MasterBox NR200', 'CoolerMaster' , 'images/NR200-case.jpg', 'Mini-ITX' , 'black', 'steel, plastic', 18.25 ),
(  'Core V1', 'Thermaltake' , 'images/ThermaltakeV1.jpg', 'Mini-ITX' , 'black', 'steel, plastic', 22.5 );


CREATE TABLE "psu" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL,
    "brand" VARCHAR (50) NOT NULL,
    "image" VARCHAR(2083),
    "form_factor" VARCHAR (50) NOT NULL,
    "wattage" INTEGER NOT NULL,
    "efficiency_rating" VARCHAR (50) NOT NULL
);


INSERT INTO "psu" ("name", "brand", "image", "form_factor", "wattage", "efficiency_rating")
VALUES 
(  'picoPSU-160-XT', 'Mini-Box', 'images/picoPSU.jpg' , 'picoPSU', 160,'N/A'),
(  'SF600', 'Corsair', 'images/SF600-PSU.jpg' , 'SFX', 600, '80+ Platinum'),
(  'SF750', 'Corsair', 'images/SF750-PSU.jpg' , 'SFX', 750, '80+ Platinum'),
(  'SuperNOVA 550 GM', 'EVGA', 'images/EVGA-550GM-PSU.jpg' , 'SFX', 550, '80+ Gold'),
(  'RM650', 'Corsair', 'images/RM500-PSU.jpg' , 'ATX', 650, '80+ Gold');


CREATE TABLE "build" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL,
    "user_id" INT REFERENCES "user"("id"),
    "cpu_id" INT REFERENCES "cpu"("id"),
    "mobo_id" INT REFERENCES "motherboard"("id"),
    "storage_id" INT REFERENCES "storage"("id"),
    "memory_id" INT REFERENCES "memory"("id"),
    "cooler_id" INT REFERENCES "cooler"("id"),
    "psu_id" INT REFERENCES "psu"("id"),
    "case_id" INT REFERENCES "case"("id"),
    "gpu_id" INT REFERENCES "gpu"("id")
);

CREATE TABLE "case_psu" (
    "id" SERIAL PRIMARY KEY,
    "case_id" integer REFERENCES "case",
    "psu_id" integer REFERENCES "psu"
);

INSERT INTO "case_psu" ("case_id", "psu_id")
VALUES
(1,1),
(2,2),
(2,3),
(2,4),
(3,2),
(3,3),
(3,4),
(4,2),
(4,3),
(4,4),
(4,5);