CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);


CREATE TABLE "components" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (100) NOT NULL,
    "name" VARCHAR (100) NOT NULL,
    "image" VARCHAR(2083),
    "details" VARCHAR(2083)
);


INSERT INTO "components" ("type", "name" , "image" , "details")
VALUES ('CPU', 'CPU' , 'images/intel-logo2.jpg' , 'The CPU, or "Central Processing Unit" coordinates all programs and tasks, and is the "brains" of the computer.  MacOS runs natively only on Intel processors.'),
		('CPU Cooler','CPU Cooler' , 'images/noctua_logo.jpg' , 'The CPU cooler sits on top of the CPU and keeps it from overheating.'),
		('Motherboard','Motherboard' , 'images/asus-logo.png' , 'Also called a PCB (printed circuit board), the motherboard connects all the components together.'),
		('Case' , 'Case' , 'images/nzxt-logo.jpg' , 'The case houses all of the components.'),
		('GPU','GPU' , 'images/AMD_Radeon.jpg' , 'The GPU, or "Graphics Processing Unit", is used to process complex graphical data.  MacOS runs natively on AMD GPUs.'),
		('Storage' ,'Storage' , 'images/samsung-logo.png' , 'Usually in the form of a hard drive or SSD (solid-state drive), this component is used to store long-term data. Most real Macs use Samsung-branded memory modules.'),
		('Memory', 'Memory' , 'images/micron-logo.png' , 'Called RAM, or "Random Access Memory", the CPU uses this component to store short-term program data for quick access.'),
		('Power Supply' , 'Power Supply' , 'images/corsairlogo2.png' , 'PSU stands for "Power Supply Unit".  It converts outlet power into power your computer can use.'),
		('CPU','Intel Core i5-9400', 'images/i5-9400.jpg', '6 cores, 6 threads, up to 4.1 GHz max boost clock' ),
		('CPU','Intel Core i5-9600K', 'images/i5-9600K.jpg', '6 cores, 6 threads, up to 4.6 GHz max boost clock'),
		('CPU','Intel Core i7-9700', 'images/i5-9700.jpg', '8 cores, 8 threads, up to 4.7 GHz max boost clock'),
		('CPU','Intel Core i7-9700K','images/i5-9700K.jpg', '8 cores, 8 threads, up to 4.9 GHz max boost clock'),
		( 'CPU Cooler','Noctua NH-L9i', 'images/NH-L9i-cooler.jpg', 'Height:  37mm' ),
		( 'CPU Cooler','NoctuaNH-L12S', 'images/NH-L12S-cooler.jpg', 'Height:  70mm' ),
		( 'CPU Cooler','Noctua NH-U9S','images/NH-U9S-cooler.jpg', 'Height:  124mm' ),
		(  'Motherboard','ASRock Z390M-ITX','images/ASRock-Z390-mobo.jpg', 'Mini-ITX form factor;   Intel Z390 chipset'),
		(  'Motherboard','ASRock Z390 Phantom Gaming-ITX','images/ASRock-Fatality-mobo.jpg', 'Mini-ITX form factor;   Intel Z390 chipset'),
		(  'Motherboard','ASUS ROG Strix Z390-I Gaming', 'images/ASUS-Z390-mobo.jpg', 'Mini-ITX form factor;   Intel Z390 chipset'),
		(  'Motherboard','Gigabyte H370N WiFi', 'images/Gigabyte-H370N-mobo.jpg', 'Mini-ITX form factor;   Intel H370 chipset'),
		(  'Case','Phanteks Enthoo Evolv ITX','images/Evolv-ITX-1.jpg', 'Mini-ITX form factor; Galvanized steel, plastic, and tempered glass;   2.7 liters'),
		(  'Case','Fractal Design Node 202' , 'images/Node202.jpg', 'Mini-ITX form factor; Galvanized steel and plastic;   10.2 liters' ),
		(  'Case','CoolerMaster MasterBox NR200', 'images/NR200-case.jpg', 'Mini-ITX form factor; Steel and plastic ;   18.25 liters' ),
		(  'Case','Thermaltake Core V1','images/ThermaltakeV1.jpg', 'Mini-ITX form factor; Steel and plastic;   22.5 liters' ),
		( 'GPU','Sapphire PULSE Radeon RX 580', 'images/Radeon-RX580.jpg', '8GB GDDR5 Memory;  1366 MHz max boost'),
		( 'GPU','MSI Radeon RX 5700 Evoke OC', 'images/MSI-EvokeOC-5700.jpg', '8GB GDDR6 Memory;   1700 MHz max boost'),
		( 'GPU','Sapphire PULSE Radeon RX 5600 XT', 'images/Pulse-5600xt.jpg', '6GB GDDR6 Memory;   1750 MHz max boost'),
		( 'GPU','Gigabyte Radeon RX 5700 XT Gaming OC', 'images/Gigabyte-5700xt.png', '8GB GDDR6 Memory;   1905 MHz max boost'),
		( 'Storage','Samsung 970 Evo Plus 500GB', 'images/970-Evo-Plus-500.jpg', '500GB NVMe M.2 PCIe SSD' ),
		( 'Storage','Samsung 970 Evo Plus 1TB', 'images/970-Evo-Plus-1000.jpg', '1TB NVMe M.2 PCIe SSD' ),
		( 'Storage','Samsung 970 Evo Plus 2TB', 'images/970-Evo-Plus-2000.jpg', '2TB NVMe M.2 PCIe SSD' ),
		( 'Memory','G.Skill Ripjaws V Series 16GB', 'images/G.Skill.V-memory.jpg', '16GB DDR4-3200MHz RAM' ),
		( 'Memory','G.Skill Ripjaws V Series 32GB', 'images/G.Skill.V32-memory.jpg', '32GB DDR4-3600MHz RAM' ),
		( 'Memory','TEAMGROUP T-FORCE Vulcan Z 16GB', 'images/T-FORCE-VULCAN-memory.jpg', '16GB DDR4-2666MHz RAM' ),
		( 'Memory','Corsair Vengeance LPX 32GB', 'images/CORSAIR-LPX-memory.jpg', '32GB DDR4-3600MHz RAM' ),
		(  'Power Supply','Corsair SF600', 'images/SF600-PSU.jpg' , '600 Watt SFX 80+ Platinum rated power supply'),
		(  'Power Supply','Corsair SF750','images/SF750-PSU.jpg' , '750 Watt SFX 80+ Platinum rated power supply'),
		(  'Power Supply','EVGA SuperNOVA 550 GM', 'images/EVGA-550GM-PSU.jpg' , '550 Watt SFX 80+ Gold rated power supply'),
		(  'Power Supply','Corsair RM650', 'images/RM500-PSU.jpg' , '650 Watt ATX 80+ Gold rated power supply');


CREATE TABLE "build" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100),
    "user_id" INT REFERENCES "user"("id"),
    "cpu_id" INT REFERENCES "components"("id"),
    "cooler_id" INT REFERENCES "components"("id"),
    "mobo_id" INT REFERENCES "components"("id"),
    "case_id" INT REFERENCES "components"("id"),
    "gpu_id" INT REFERENCES "components"("id"),
    "storage_id" INT REFERENCES "components"("id"),
    "memory_id" INT REFERENCES "components"("id"),
    "psu_id" INT REFERENCES "components"("id"));