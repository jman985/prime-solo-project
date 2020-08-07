CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);


CREATE TABLE "cpu" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL,
    "image" VARCHAR(2083),
    "details" VARCHAR(2083)
);

INSERT INTO "cpu" ("name", "image", "details")
VALUES 
('CPU', 'images/Intel-logo.png' , 'CPU stands for "central processing unit".  MacOS runs natively only on Intel processors.'),
('Intel Core i5-9400', 'images/i5-9400', '6 cores, 6 threads, up to 4.1 GHz max boost' ),
('Intel Core i5-9600K', 'images/i5-9600K', '6 cores, 6 threads, up to 4.6 GHz max boost'),
('Intel Core i7-9700', 'images/i5-9700', '8 cores, 8 threads, up to 4.7 GHz max boost'),
('Intel Core i7-9700K','images/i5-9700K', '8 cores, 8 threads, up to 4.9 GHz max boost');


CREATE TABLE "cooler" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL,
    "image" VARCHAR(2083),
    "details" VARCHAR(2083)
);

INSERT INTO "cooler" ("name", "image", "details")
VALUES
('CPU Cooler' , 'images/noctua_logo.jpg' , 'The CPU cooler sits on top of the CPU and keeps it from overheating.'),
(  'Noctua NH-L9i', 'images/NH-L9i-cooler.jpg', '37 height' ),
(  'NoctuaNH-L12S', 'images/NH-L12S-cooler.jpg', '70mm height' ),
(  'Noctua NH-U9S','images/NH-U9S-cooler.jpg', '124mm height' );



CREATE TABLE "motherboard" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL,
    "image" VARCHAR(2083),
    "details" VARCHAR(2083)
);

INSERT INTO "motherboard" ("name", "image", "details")
VALUES 
('Motherboard' , 'images/asus-logo.png' , 'Also called a PCB (printed circuit board) or chipset, the motherboard connects the components together.  Intel CPUs require Intel chipsets'),
(  'ASRock Z390M-ITX','images/ASRock-Z390-mobo.jpg', 'Mini-ITX form factor; Intel Z390 chipset'),
(  'ASRock Z390 Phantom Gaming-ITX','images/ASRock-Fatality-mobo.jpg', 'Mini-ITX form factor;  Intel Z390 chipset'),
(  'ASUS ROG Strix Z390-I Gaming', 'images/ASUS-Z390-mobo.jpg', 'Mini-ITX form factor; Intel Z390 chipset'),
(  'Gigabyte H370N WiFi', 'images/Gigabyte-H370N-mobo.jpg', 'Mini-ITX form factor; Intel H370 chipset');


CREATE TABLE "memory" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL,
    "image" VARCHAR(2083),
    "details" VARCHAR(2083)
);

INSERT INTO "memory" ("name", "image", "details")
VALUES 
('Memory' , 'images/micron-logo.png' , 'Also called RAM or "random access memory", the CPU uses RAM to store program data for quick access'),
( 'G.Skill Ripjaws V Series', 'images/G.Skill.V-memory.jpg', '16GB DDR4-3200MHz RAM' ),
( 'G.Skill Ripjaws V Series', 'images/G.Skill.V32-memory.jpg', '32GB DDR4-3600MHz RAM' ),
( 'TEAMGROUP T-FORCE Vulcan Z ', 'images/T-FORCE-VULCAN-memory.jpg', '16GB DDR4-2666MHz RAM' ),
( 'Corsair Vengeance LPX', 'images/CORSAIR-LPX-memory.jpg', '32GB DDR4-3600MHz RAM' );


CREATE TABLE "gpu" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL,
    "image" VARCHAR(2083),
    "details" VARCHAR(2083)
);

INSERT INTO "gpu" ("name", "image", "details")
VALUES
('GPU' , 'images/AMD_Radeon.png' , 'GPU stands for "Graphics Processing Unit".  MacOS runs native on AMD GPUs'),
( 'Sapphire PULSE Radeon RX 580', 'images/Radeon-RX580.jpg', '8GB GDDR5 Memory; 1366 MHz max boost'),
( 'MSI Radeon RX 5700 Evoke OC', 'images/MSI-EvokeOC-5700.jpg', '8GB GDDR6 Memory; 1700 MHz max boost'),
( 'Sapphire PULSE Radeon RX 5600 XT', 'images/Pulse-5600xt.jpg', '6GB GDDR6 Memory; 1750 MHz max boost'),
( 'Gigabyte Radeon RX 5700 XT Gaming OC', 'images/Gigabyte-5700xt.jpg', '8GB GDDR6 Memory; 1905 MHz max boost');


CREATE TABLE "storage" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL,
    "image" VARCHAR(2083),
    "details" VARCHAR(2083)
);

INSERT INTO "storage" ("name", "image", "details")
VALUES 
('Storage' , 'images/samsung-logo.png' , 'Sometimes called a hard drive or solid-state drive (SSD), this stores data on the computer. Most real Macs use Samsung memory modules'),
( 'Samsung 970 Evo Plus', 'images/970-Evo-Plus-500.jpg', '500GB NVMe M.2 PCIe SSD' ),
( 'Samsung 970 Evo Plus', 'images/970-Evo-Plus-1000.jpg', '1TB NVMe M.2 PCIe SSD' ),
( 'Samsung 970 Evo Plus', 'images/970-Evo-Plus-2000.jpg', '2TB NVMe M.2 PCIe SSD' );


CREATE TABLE "case" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL,
    "image" VARCHAR(2083),
    "details" VARCHAR(2083)
);

INSERT INTO "case" ("name", "image", "details")
VALUES 
('Case' , 'images/nzxt-logo.jpg' , 'The case houses all of the components.'),
(  'MITXPC MX500','images/MITXPC-case.jpg', 'Mini-ITX form factor; galvanized steel material; 2.7 liters'),
(  'Fractal Design Node 202' , 'images/Node202.jpg', 'Mini-ITX form factor; galvanized steel and plastic; 10.2 liters' ),
(  'CoolerMaster MasterBox NR200', 'images/NR200-case.jpg', 'Mini-ITX form factor; steel/plastic material; 18.25 liters' ),
(  'Thermaltake Core V1','images/ThermaltakeV1.jpg', 'Mini-ITX form factor; steel/plastic material; 22.5 liters' );


CREATE TABLE "psu" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL,
    "image" VARCHAR(2083),
    "details" VARCHAR(2083)
);


INSERT INTO "psu" ("name", "image", "details")
VALUES
('Power Supply' , 'images/corsair-logo.png' , 'PSU stands for "power supply unit".  It converts power from the wall into power your computer can use.'),
(  'Corsair SF600', 'images/SF600-PSU.jpg' , '600 Watt SFX 80+ Platinum rated power supply'),
(  'Corsair SF750','images/SF750-PSU.jpg' , '750 Watt SFX 80+ Platinum rated power supply'),
(  'EVGA SuperNOVA 550 GM', 'images/EVGA-550GM-PSU.jpg' , '550 Watt SFX 80+ Gold rated power supply'),
(  'Corsair RM650', 'images/RM500-PSU.jpg' , '650 Watt ATX 80+ Gold rated power supply');


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

CREATE TABLE "components" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (100) NOT NULL,
    "name" VARCHAR (100) NOT NULL,
    "image" VARCHAR(2083),
    "details" VARCHAR(2083)
);



