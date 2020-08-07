
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);



INSERT INTO "components" ("type", "name", "image", "details")
VALUES 
('CPU', 'images/Intel-logo.png' , 'CPU stands for "central processing unit".  MacOS runs natively only on Intel processors.'),
('Intel Core i5-9400', 'images/i5-9400', '6 cores, 6 threads, up to 4.1 GHz max boost' ),
('Intel Core i5-9600K', 'images/i5-9600K', '6 cores, 6 threads, up to 4.6 GHz max boost'),
('Intel Core i7-9700', 'images/i5-9700', '8 cores, 8 threads, up to 4.7 GHz max boost'),
('Intel Core i7-9700K','images/i5-9700K', '8 cores, 8 threads, up to 4.9 GHz max boost');
('CPU Cooler' , 'images/noctua_logo.jpg' , 'The CPU cooler sits on top of the CPU and keeps it from overheating.'),
(  'Noctua NH-L9i', 'images/NH-L9i-cooler.jpg', '37 height' ),
(  'NoctuaNH-L12S', 'images/NH-L12S-cooler.jpg', '70mm height' ),
(  'Noctua NH-U9S','images/NH-U9S-cooler.jpg', '124mm height' );